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


// Fucntion JSON Loan 

// function loadJson(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(xhttp.readyState == 4 && xhttp.status == 200){
//             let data = JSON.parse(xhttp.responseText);
//             document.getElementById("bList").innerHTML = data.name;
//         }
//         else {
//             console.log("Error")
//         }
//     }
//     xhttp.open("GET" , "../bookList/book00.json", true);
//     xhttp.send()
// }

// loadJson()

// fetch Method 
fetch('../bookList/book00.json')
    .then((response) => response.json())
    .then((book) => document.getElementById("book-00_name").innerHTML = book.name)
    .then((book) => document.getElementById("book-00-img").setAttribute("src" = book.url));
    
