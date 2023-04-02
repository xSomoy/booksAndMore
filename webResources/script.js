function loadData(){
    // Create New Request 
    const xhr = new XMLHttpRequest();

    // What to do when response arraives
    xhr.onload = function (){
        const container = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;

    };

    // prepare request - methods : GET , POST, PUT, PATCH, DELETE, OPTIONS 

    xhr.open("GET","https://s3-ap-southeast-1.amazonaws.com/rokomari110/LookInside20190827/18769a362_213270-1.jpg" );
    // Send Request

    xhr.send();
};

// AJAX is working