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

// function countJSONObjects(json) {
//   // Parse the JSON string into an object
//   const obj = JSON.parse(json);
//   // Get an array of keys in the top-level object
//   const keys = Object.keys(obj);
//   // Count the number of keys
//   return keys.length;
// }

// const json = "../bookList/booka.json";
// console.log(countJSONObjects(json)); // Output: 2
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const json = xhr.responseText;
//     const obj = JSON.parse(json);
//     console.log(obj);
//   }
// };
// xhr.open('GET', '../bookList/books.json');
// xhr.send();

  fetch('books.json')
  .then(response => response.json())
  .then(data => console.log(data));


