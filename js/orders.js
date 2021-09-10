function getserverData(url){
    let fetchOptions ={
        method: "GET",
        mode:"cors",
        cache:"no-cache"
    };
    
    return fetch(url,fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    )
    
    }
    
    getserverData("https://my-json-server.typicode.com/carlos26-hu/carlos26-hu.github.io/products_meat").then(
        data => console.log(data)
    );