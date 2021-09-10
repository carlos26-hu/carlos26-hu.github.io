

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

getserverData("https://my-json-server.typicode.com/carlos26-hu/carlos26-hu.github.io/products_food").then(
   data => fillDataTable(data,"products-food")
);

getserverData("https://my-json-server.typicode.com/carlos26-hu/carlos26-hu.github.io/products_drink").then(
    data => fillDataTable(data,"products-drink")
);

function fillDataTable(data,tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found!`);
        return;
    }

    let tBody = table.querySelector("tbody");

    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML =row[k];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }
}


function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes){
        element.setAttribute(k,attributes[k]);
    };
    return element;
}