const fs = require('fs');
const css = fs.readFileSync('css/styles.css', 'utf-8');
const lines = css.split('\n');
lines.forEach((line, i) => {
    if (line.toLowerCase().includes('overflow')) {
        console.log(`Line ${i+1}: ${line.trim()}`);
    }
});
