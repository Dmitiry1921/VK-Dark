const fs = require('fs');

const all = fs.readFileSync("./css/vkdark_all.css", "utf8");
const borders = fs.readFileSync("./css/vkdark-borders.css", "utf8");
const backgrounds = fs.readFileSync("./css/vkdark-backgrounds.css", "utf8");
const colors = fs.readFileSync("./css/vkdark-colors.css", "utf8");

let merged = '';

merged += borders;
merged += backgrounds;
merged += colors;
merged += all;

fs.writeFileSync("./css/vkdark.css", merged);
