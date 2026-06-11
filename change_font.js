const fs = require('fs');
const files = [
  'src/app/globals.css',
  'src/app/premium.css',
  'src/app/(dashboard)/dashboard/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    // Replace "'Inter', sans-serif" with "\"Bookman Old Style\", serif"
    content = content.replace(/'Inter', sans-serif/g, '"Bookman Old Style", serif');
    content = content.replace(/Inter/g, '"Bookman Old Style"');
    fs.writeFileSync(f, content);
  }
});
console.log('Fonts updated!');
