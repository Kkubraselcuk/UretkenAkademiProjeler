var sayac=2;
var randomFunc =0;
var buttonColor = ["primary","secondary","success","danger","warning","info"];

function myNewFunction(element) {
    randomFunc = element.selectedIndex-1;
}

let addBlock = () => {

    var main = document.getElementById("mainRow");
    var listName = document.getElementById("personName").value;

    var x=$("#inlineCheckbox1").is(":checked");
    if(x == true){
        random = Math.floor(Math.random() * 6);
    }
    else{
        random = randomFunc;
    }

    var newItem = `
    <div class="col-3 mr-3 mt-3 cols">
        <div class="card text-white bg-${buttonColor[random]}  mb-3">
            <div class="card-header"><h4>${listName}</h4></div>
            <button type="submit" onclick="addItem('list${sayac}')" class="btn btn-dark addButton  mt-2 mr-5 ml-5">+</button>
                <div class="card-body">
                    <ul id="list${sayac}">
                    </ul>
                </div>
            </div>
        </div>
    </div>

        
    `;
        main.innerHTML += newItem;
        sayac++;
}

let addItem = (id) => {
    var item = prompt("yapılacak iş: ");
    var list = document.getElementById(id);
    var newItem = `
        <li>${item}</li>
    `;
    list.innerHTML +=newItem;
}
