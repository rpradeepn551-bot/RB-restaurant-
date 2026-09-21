import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle, Sparkles, Tag, Truck, Check } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_OFFERS } from '../data/offersData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
  appliedPromoCode?: string;
  onApplyPromoCode?: (code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromoCode = '',
  onApplyPromoCode,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'dine-in' | 'takeaway'>('delivery');
  const [promoInput, setPromoInput] = useState('');
  const [promoSuccessMsg, setPromoSuccessMsg] = useState('');
  const [promoErrorMsg, setPromoErrorMsg] = useState('');

  if (!isOpen) return null;

  const FREE_DELIVERY_THRESHOLD = 99; // Free delivery above 99 as requested
  const STANDARD_DELIVERY_FEE = 40;

  const subtotal = items.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);

  // Delivery calculation
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD || deliveryMode !== 'delivery';
  const deliveryFee = deliveryMode === 'delivery' ? (isFreeDelivery ? 0 : STANDARD_DELIVERY_FEE) : 0;
  const progressToFreeDelivery = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
  const amountNeededForFree = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  // Promo code calculation
  const activePromo = RESTAURANT_OFFERS.find(
    (o) => o.code.toUpperCase() === (appliedPromoCode || promoInput).trim().toUpperCase()
  );

  let discountAmount = 0;
  if (activePromo && subtotal >= (activePromo.minOrder || 0)) {
    if (activePromo.discountType === 'percentage' && activePromo.discountValue) {
      discountAmount = Math.round((subtotal * activePromo.discountValue) / 100);
    } else if (activePromo.discountType === 'fixed_combo') {
      discountAmount = Math.round(subtotal * 0.2); // 20% combo discount
    } else if (activePromo.discountType === 'free_item') {
      discountAmount = Math.min(120, Math.round(subtotal * 0.15));
    }
  }

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gstTax = Math.round(taxableAmount * 0.05 * 100) / 100; // 5% GST on food in India
  const serviceCharge = deliveryMode === 'dine-in' ? Math.round(subtotal * 0.05 * 100) / 100 : 0;
  const total = taxableAmount + deliveryFee + gstTax + serviceCharge;

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || promoInput).trim().toUpperCase();
    if (!code) return;

    const found = RESTAURANT_OFFERS.find((o) => o.code.toUpperCase() === code);
    if (found) {
      if (subtotal < (found.minOrder || 0)) {
        setPromoErrorMsg(`Minimum order for ${code} is ₹${found.minOrder}`);
        setPromoSuccessMsg('');
      } else {
        if (onApplyPromoCode) onApplyPromoCode(code);
        setPromoSuccessMsg(`Coupon ${code} applied successfully!`);
        setPromoErrorMsg('');
      }
    } else {
      setPromoErrorMsg('Invalid coupon code. Try SAVE10 or ROYAL20');
      setPromoSuccessMsg('');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#081711] text-[#F5F0E6] border-l border-[#1D4A37] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#163D2D] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D4A24C]" />
              <h3 className="font-serif-display text-xl font-bold text-white">
                Your Order Bag
              </h3>
              <span className="text-xs bg-[#123A29] text-[#D4A24C] px-2.5 py-0.5 rounded-full font-bold">
                {items.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#123A29] text-[#B8CFC2] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          {orderPlaced ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4A24C]/20 border-2 border-[#D4A24C] flex items-center justify-center text-[#D4A24C] mb-4 shadow-xl animate-scale">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4A24C] font-bold">
                ORDER RECEIVED • ROYAL DISPATCH
              </span>
              <h4 className="font-serif-display text-2xl font-bold text-white mt-1 mb-2">
                The Master Chef is Preparing
              </h4>
              <p className="text-sm text-[#A0B8AA] max-w-xs">
                Your order is being prepared with live charcoal dum and authentic spices. Estimated time: 25-35 mins.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#102B20] flex items-center justify-center text-[#587566] mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-xl font-bold text-white mb-2">
                Your Bag is Empty
              </h4>
              <p className="text-xs sm:text-sm text-[#8BA496] max-w-xs mb-6">
                Explore our 115+ starters, authentic dum biryanis, hot soups, South Indian feasts, and continental pizzas.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4A24C] text-[#0A1A14] hover:bg-[#E5B65E] transition-all cursor-pointer"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-5 no-scrollbar">
              {/* Free Delivery Banner on Orders Above 99 */}
              <div className="bg-[#0C241B] border border-[#205540] rounded-2xl p-4 shadow-md">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2 font-bold text-[#F5F0E6]">
                    <Truck className="w-4 h-4 text-[#D4A24C]" />
                    <span>Free Delivery on orders above ₹99</span>
                  </div>
                  <span className="font-mono text-[#D4A24C] font-bold">
                    {subtotal >= FREE_DELIVERY_THRESHOLD ? 'FREE' : `₹${amountNeededForFree} to unlock`}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-[#06140E] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4A24C] to-[#4ADE80] transition-all duration-500 rounded-full"
                    style={{ width: `${progressToFreeDelivery}%` }}
                  />
                </div>

                {subtotal >= FREE_DELIVERY_THRESHOLD ? (
                  <p className="text-[11px] text-[#4ADE80] font-medium mt-2 flex items-center gap-1">
                    <Check className="w-3 h-3" /> You unlocked FREE Express Delivery!
                  </p>
                ) : (
                  <p className="text-[11px] text-[#A0BCAE] mt-1.5">
                    Add items worth ₹{amountNeededForFree} more to save ₹{STANDARD_DELIVERY_FEE} on delivery!
                  </p>
                )}
              </div>

              {/* Delivery Mode Selector */}
              <div className="grid grid-cols-3 gap-1.5 bg-[#0A1F17] p-1 rounded-xl border border-[#173D2E] text-[11px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => setDeliveryMode('delivery')}
                  className={`py-2 rounded-lg transition-all ${
                    deliveryMode === 'delivery'
                      ? 'bg-[#D4A24C] text-[#0A1A14] shadow'
                      : 'text-[#8DAAA0] hover:text-white'
                  }`}
                >
                  Delivery
                </button>
                <button
                  onClick={() => setDeliveryMode('dine-in')}
                  className={`py-2 rounded-lg transition-all ${
                    deliveryMode === 'dine-in'
                      ? 'bg-[#D4A24C] text-[#0A1A14] shadow'
                      : 'text-[#8DAAA0] hover:text-white'
                  }`}
                >
                  Dine-In
                </button>
                <button
                  onClick={() => setDeliveryMode('takeaway')}
                  className={`py-2 rounded-lg transition-all ${
                    deliveryMode === 'takeaway'
                      ? 'bg-[#D4A24C] text-[#0A1A14] shadow'
                      : 'text-[#8DAAA0] hover:text-white'
                  }`}
                >
                  Takeaway
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#143929]">
                {items.map((item) => (
                  <div key={item.dish.id} className="py-3.5 flex gap-3 items-center">
                    {item.dish.imageUrl ? (
                      <img
                        src={item.dish.imageUrl}
                        alt={item.dish.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover border border-[#1E4D3B] shrink-0"
                      />
                    ) : null}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h5 className="font-serif-display text-xs sm:text-sm font-bold text-white truncate pr-2">
                          {item.dish.name}
                        </h5>
                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="text-[#648474] hover:text-[#E07A7A] transition-colors p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-[#D4A24C] font-semibold block">
                        ₹{item.dish.price} each
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="w-5 h-5 rounded-full bg-[#113123] hover:bg-[#1A4835] flex items-center justify-center text-xs text-white"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="text-xs font-bold text-white px-1.5">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="w-5 h-5 rounded-full bg-[#113123] hover:bg-[#1A4835] flex items-center justify-center text-xs text-white"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                        <span className="ml-auto text-xs font-bold text-white">
                          ₹{item.dish.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Section */}
              <div className="bg-[#0A1F17] p-4 rounded-xl border border-[#194532] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4A24C] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Restaurant Offers & Coupons</span>
                  </span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value);
                      setPromoErrorMsg('');
                    }}
                    placeholder="Enter Code (e.g. SAVE10)"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#06140E] border border-[#1E4D3B] text-xs text-white uppercase placeholder-[#5E7A6E] focus:outline-none focus:border-[#D4A24C]"
                  />
                  <button
                    onClick={() => handleApplyCoupon()}
                    className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D4A24C] text-[#0A1813] hover:bg-[#E5B65E] transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {promoSuccessMsg && (
                  <p className="text-[11px] text-[#4ADE80] font-medium">{promoSuccessMsg}</p>
                )}
                {promoErrorMsg && (
                  <p className="text-[11px] text-[#F87171] font-medium">{promoErrorMsg}</p>
                )}

                {/* Popular Quick Coupons */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {['SAVE10', 'ROYAL20', 'BOGO', 'BREAKFAST99'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setPromoInput(c);
                        handleApplyCoupon(c);
                      }}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#102F23] hover:bg-[#164231] text-[#D4A24C] border border-[#1F533E]"
                    >
                      +{c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer Calculations & Order CTA */}
          {items.length > 0 && !orderPlaced && (
            <div className="p-6 bg-[#06130D] border-t border-[#173F2F] space-y-3">
              <div className="space-y-1.5 text-xs text-[#A0B8AA]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#4ADE80]">
                    <span>Discount ({activePromo?.code || 'Offer'})</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {deliveryMode === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Express Delivery</span>
                    <span className={deliveryFee === 0 ? 'text-[#4ADE80] font-bold' : 'text-white'}>
                      {deliveryFee === 0 ? 'FREE (Orders > ₹99)' : `₹${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>GST & Restaurant Tax (5%)</span>
                  <span className="text-white font-medium">₹{gstTax.toFixed(2)}</span>
                </div>

                {deliveryMode === 'dine-in' && (
                  <div className="flex justify-between">
                    <span>Hospitality Service (5%)</span>
                    <span className="text-white font-medium">₹{serviceCharge.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm font-bold text-white pt-2.5 border-t border-[#163D2E]">
                  <span className="font-serif-display text-base">To Pay</span>
                  <span className="text-[#D4A24C] font-serif-display text-xl">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                id="checkout-proceed-btn"
                className="w-full py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-2xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>CONFIRM ORDER (₹{total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
