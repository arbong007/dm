const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('src/app/(dashboard)');
files.forEach(dir => {
  const fp = path.join('src/app/(dashboard)', dir, 'page.tsx');
  if(fs.existsSync(fp)) {
    let c = fs.readFileSync(fp, 'utf8');
    c = c.replace(/maxLength="(\d+)"/g, 'maxLength={$1}')
         .replace(/colSpan="(\d+)"/g, 'colSpan={$1}')
         .replace(/rowSpan="(\d+)"/g, 'rowSpan={$1}')
         .replace(/tabIndex="(-?\d+)"/g, 'tabIndex={$1}');
    fs.writeFileSync(fp, c);
  }
});
console.log('Fixed numeric types for TS');
