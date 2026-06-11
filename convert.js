const fs = require('fs');

let html = fs.readFileSync('C:/xampp/htdocs/SI/SiPosMA.html', 'utf8');

// Match everything inside <body> until the last <script> tag before </body>
const bodyMatch = html.match(/<body>([\s\S]*?)<script>/);
if (!bodyMatch) {
  console.log('Body not found');
  process.exit(1);
}

let body = bodyMatch[1];
body = body.replace(/class=/g, 'className=')
           .replace(/for=/g, 'htmlFor=')
           .replace(/onclick="[^"]*"/g, '')
           .replace(/onchange="[^"]*"/g, '')
           .replace(/oninput="[^"]*"/g, '')
           .replace(/onsubmit="[^"]*"/g, '')
           .replace(/<!--[\s\S]*?-->/g, '');

// Fix self closing tags
body = body.replace(/<img([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<img${p1} />`)
           .replace(/<input([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<input${p1} />`)
           .replace(/<hr([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<hr${p1} />`)
           .replace(/<br([^>]*)>/g, (match, p1) => p1.endsWith('/') ? match : `<br${p1} />`);

// Fix style="display: none;" -> style={{ display: 'none' }}
body = body.replace(/style="([^"]*)"/g, (match, styleString) => {
    let rules = styleString.split(';').filter(s => s.trim().length > 0);
    let objArr = rules.map(rule => {
        let parts = rule.split(':');
        if (parts.length < 2) return '';
        let key = parts[0].trim();
        let val = parts.slice(1).join(':').trim();
        if (!key) return '';
        // camelCase key
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: '${val}'`;
    }).filter(s => s.length > 0);
    return `style={{ ${objArr.join(', ')} }}`;
});

// Fix other SVG properties
body = body.replace(/stroke-width/g, 'strokeWidth')
           .replace(/stroke-linecap/g, 'strokeLinecap')
           .replace(/stroke-linejoin/g, 'strokeLinejoin');

const jsx = `"use client";
import { useState, useEffect } from "react";

export default function Home() { 
  const [activeView, setActiveView] = useState("dashboard");
  
  return (
    <>
      ${body}
    </>
  ); 
}
`;

fs.writeFileSync('./temp.tsx', jsx);
console.log('Conversion to page.tsx complete!');
