
let total;
let priceBasic = 1000;
var priceFood = 0;
var priceDrink = 0;
var priceExtra = 0;
var priceSauce = 0;
var quantity = 1;
let keys = ["id","name","comment","value"];
/*
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

    function fillDataTable(data, tableID) {
        let table = document.querySelector(`#${tableID}`);
        if (!table) {
            console.error(`Table "${tableID} isnt found`);
            return;
        }

        let tBody = table.querySelector("tbody");

        for (let row of data) {
            let tr = createAnyElement("tr");
            for (let k of keys) {
                let td = createAnyElement("td"); 
                 let input = createAnyElement("input",{
                        class: "form-control",
                        value: row[k],
                        name:k,
                 });
              
                td.appendChild(input);
                tr.appendChild(td); 
            }

        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
        }
    }     
console.log(data);


        function createBtnGroup(data) {
        let group = createAnyElement("div", { class:"form-check"});
        let infoBtn = createAnyElement("input", { class:"form-check-input",name:`${data}`, type:"radio", onclick: "handleFood(this)" });
        group.appendChild(infoBtn);
        let td = createAnyElement("td");
        td.appendChild(group);
        return td;
    }

    function getRowData (tr){
        let inputs = tr.querySelectorAll("input.form-control");
        let data = {};
        for(let i=0;i<inputs.length;i++){
            data[inputs[i].name] = inputs[i].value;
        }
        return data;
    }
    
    
    
  
    
    function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    };
    return element;
}

function handleFood(infoBtn){
   let tr = infoBtn.parentElement.parentElement.parentElement;
   console.log(tr);
   let inputs = tr.querySelectorAll("form-check-input");
   console.log(inputs);
   let data = {};
   for(let i=0;i<inputs.length;i++){
       data[inputs[i].name] = inputs[i].value;
   }
   console.log(data);
}
*/

function handleClick(data) {
     priceExtra = parseInt(data.value);
     console.log(priceDrink);
     calcTotal();
}


function handleSelect(data){
     priceSauce = parseInt(data.value);
    calcTotal();
}

function handlequan(data){
    quantity = parseInt(data.value);
    calcTotal();
}

function calcTotal() {
    let showTotal = document.querySelector("span.show-total");
    total = (priceBasic+priceExtra+priceSauce) * quantity;
    showTotal.innerHTML = total;
    if (total<5000){
        alert("A rendelés összege kevesebb, mint 5000Ft, házhozszállitási dijat (500Ft) kell fizetni;")
    }else alert("A házhozszállitás ingyenes!");
    console.log(total);
}



