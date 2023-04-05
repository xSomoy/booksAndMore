// Book Size 

let size0 = "Regular / Hard Cover";
let size1 = "Crown / Hard Cover";
let size2 = "Crown / Paperback";
let size3 = "Regular / Paperback";

// Book Genre 

let genre0 = "গল্পগ্রন্থ";
let genre1 = "সমকালীন";
let genre2 = "রোমান্টিক";
let genre3 = "ক্রাইম থ্রিলার";
let genre4 = "থ্রিলার";
let genre5 = "কবিতা";
let genre6 = "মোটিভেশনাল";
let genre7 = "ঐতিহাসিক থ্রিলাস";
let genre8 = "মৌলিক উপকথা";
// let aloha = [];


// fetch('./bookList/books.json')
//     .then((response) => response.json())
//     .then((json) = aloha);
const json = './bookList/books.json';
const obj = JSON.parse(json);
console.log(obj); // Output: { name: 'John', age: 30, city: 'New York' }
