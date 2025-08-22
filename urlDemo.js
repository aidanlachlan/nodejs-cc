import url from "url";

const urlString = "http://www.google.com/search?q=hello+world";

// URL object
const urlObj = new URL(urlString);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath() - convert file URL to path
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);

console.log(params.get("q")); // hello world

params.append("limit", "5");
params.delete("limit");
console.log(params);


