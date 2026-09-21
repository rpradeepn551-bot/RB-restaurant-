const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const cssPath = path.join(distDir, 'assets/style.css');
const jsPath = path.join(distDir, 'assets/script.js');

if (fs.existsSync(indexPath) && fs.existsSync(cssPath) && fs.existsSync(jsPath)) {
  // 1. Copy flat files to dist root so both ./assets/ and ./ paths work
  fs.copyFileSync(cssPath, path.join(distDir, 'style.css'));
  fs.copyFileSync(jsPath, path.join(distDir, 'script.js'));

  // 2. Generate standalone all-in-one index.html (Everything inlined, 0 external CSS/JS needed)
  let html = fs.readFileSync(indexPath, 'utf8');
  const css = fs.readFileSync(cssPath, 'utf8');
  const js = fs.readFileSync(jsPath, 'utf8');

  let standaloneHtml = html;
  standaloneHtml = standaloneHtml.replace(
    /<link rel="stylesheet"[^>]*href="[^"]*style\.css"[^>]*>/,
    '<style>\n' + css + '\n</style>'
  );
  standaloneHtml = standaloneHtml.replace(
    /<script type="module"[^>]*src="[^"]*script\.js"[^>]*><\/script>/,
    '<script type="module">\n' + js + '\n</script>'
  );

  fs.writeFileSync(path.join(distDir, 'standalone.html'), standaloneHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'single_file_index.html'), standaloneHtml, 'utf8');

  console.log('✅ Deployment assets prepared:');
  console.log(' - dist/index.html (Standard modular bundle)');
  console.log(' - dist/style.css & dist/script.js (Root assets copy)');
  console.log(' - dist/standalone.html (100% self-contained single-file HTML, zero deploy errors)');
} else {
  console.warn('⚠️ Dist build files not found for post-processing.');
}
