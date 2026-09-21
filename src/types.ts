export interface Dish {
  id: string;
  name: string;
  hindiName?: string;
  category:
    | 'starters'
    | 'soups'
    | 'biryani'
    | 'chinese'
    | 'breads'
    | 'mains'
    | 'south-indian'
    | 'continental'
    | 'grill'
    | 'desserts'
    | 'beverages';
  description: string;
  price: number;
  imageUrl: string;
  isChefSpecial?: boolean;
  isVegetarian: boolean;
  isGlutenFree?: boolean;
  spiceLevel: 1 | 2 | 3;
  servingSize?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface RestaurantOffer {
  id: string;
  title: string;
  code: string;
  category: 'discount' | 'bogo' | 'freebie' | 'combo' | 'day_special' | 'exclusive';
  description: string;
  badge?: string;
  discountType: 'percentage' | 'fixed_combo' | 'free_item' | 'free_delivery';
  discountValue?: number;
  minOrder?: number;
  comboPrice?: number;
}

export interface ReservationDetails {
  guests: number;
  date: string;
  time: string;
  seatingArea: 'Main Dining Hall' | "Chef's Counter" | 'Royal Verandah' | 'Private Maharaja Chamber';
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
}
