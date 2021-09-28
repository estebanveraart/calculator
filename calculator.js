let main = document.querySelector('main');
let table = document.createElement('table');


// Creation tableHead

let tableHead = document.createElement('thead');
let tableTrHead = document.createElement('tr');
let tableThHead = document.createElement('th');
let tableTh1Head = document.createElement('th');
let inputCalcul = document.createElement('input');
inputCalcul.value = "";
let buttonClear = document.createElement('button');


tableThHead.classList.add('ecranLCD');
tableThHead.colSpan = '3';
inputCalcul.classList.add('inputString');
tableThHead.appendChild(inputCalcul);
buttonClear.classList.add('buttonClear');
buttonClear.textContent = 'C'
tableTh1Head.appendChild(buttonClear);
tableTrHead.appendChild(tableThHead);
tableTrHead.appendChild(tableTh1Head);
tableHead.appendChild(tableTrHead);
table.appendChild(tableHead);


// Creation table foot

let tableFoot = document.createElement('tfoot');
let tableTrFoot = document.createElement('tr');
let tableThFoot = document.createElement('th');
let tableTh1Foot = document.createElement('th');
let tableTh2Foot = document.createElement('th');
let button0 = document.createElement('button');
let buttonEgal = document.createElement('button');
let buttonDivision = document.createElement('button');

button0.classList.add('button0');
button0.textContent = '0';
buttonEgal.classList.add('buttonEgal');
buttonEgal.textContent = '=';
tableTh1Foot.colSpan = '2';
buttonDivision.classList.add('buttonDi');
buttonDivision.textContent = '/';
tableThFoot.appendChild(button0);
tableTrFoot.appendChild(tableThFoot);
tableTh1Foot.appendChild(buttonEgal);
tableTrFoot.appendChild(tableTh1Foot);
tableTh2Foot.appendChild(buttonDivision);
tableTrFoot.appendChild(tableTh2Foot);
tableFoot.appendChild(tableTrFoot);
table.appendChild(tableFoot);


// Creation table body

let tableBody = document.createElement('tbody');
let tableTr = document.createElement('tr');
let tableTr1 = document.createElement('tr');
let tableTr2 = document.createElement('tr');


const objetArrClass = [
    {
        arr1 : "7",
        class1 : "button7",
        arr2 : "4",
        class2 : "button4",
        arr3 : "1",
        class3 : "button1",
    },
    {
        arr1 : "8",
        class1 : "button8",
        arr2 : "5",
        class2 : "button5",
        arr3 : "2",
        class3 : "button2",
    },
    {
        arr1 : "9",
        class1 : "button9",
        arr2 : "6",
        class2 : "button6",
        arr3 : "3",
        class3 : "button3",
    },
    {
        arr1 : "+",
        class1 : "buttonPlus",
        arr2 : "-",
        class2 : "buttonMoins",
        arr3 : "*",
        class3 : "buttonFois",
    }
]
for (let i = 0; i < 4; i++) {
    
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let tableTd = document.createElement('td');
    let tableTd1 = document.createElement('td');
    let tableTd2 = document.createElement('td');
    

    button1.classList.add(objetArrClass[i].class1);
    button1.textContent = (objetArrClass[i].arr1);
    tableTd.appendChild(button1);
    tableTr.appendChild(tableTd);
    button2.classList.add(objetArrClass[i].class2);
    button2.textContent = objetArrClass[i].arr2;
    tableTd1.appendChild(button2);
    tableTr1.appendChild(tableTd1);
    button3.classList.add(objetArrClass[i].class3);
    button3.textContent = objetArrClass[i].arr3;
    tableTd2.appendChild(button3);
    tableTr2.appendChild(tableTd2);
}

tableBody.appendChild(tableTr);
tableBody.appendChild(tableTr1);
tableBody.appendChild(tableTr2);
table.appendChild(tableBody);
main.appendChild(table);



// Algorithme et mise en fonctionnement calculette.

buttonVal0 = document.querySelector('.button0');
buttonVal1 = document.querySelector('.button1');
buttonVal2 = document.querySelector('.button2');
buttonVal3 = document.querySelector('.button3');
buttonVal4 = document.querySelector('.button4');
buttonVal5 = document.querySelector('.button5');
buttonVal6 = document.querySelector('.button6');
buttonVal7 = document.querySelector('.button7');
buttonVal8 = document.querySelector('.button8');
buttonVal9 = document.querySelector('.button9');
buttonClearInput = document.querySelector('.buttonClear');
buttonDivisionInput = document.querySelector('.buttonDi');
buttonMultiplicationInput = document.querySelector('.buttonFois');
buttonSubtractionInput = document.querySelector('.buttonMoins');
buttonSumInput = document.querySelector('.buttonPlus');
buttonResultFinal = document.querySelector('.buttonEgal')

function computeResult(str){
    return Function('return ' + str)()
}

buttonVal0.onclick = function(){
    inputCalcul.value = inputCalcul.value + "0";
}
buttonVal1.onclick = function(){
    inputCalcul.value = inputCalcul.value + "1";
}
buttonVal2.onclick = function(){
    inputCalcul.value = inputCalcul.value + "2";
}
buttonVal3.onclick = function(){
    inputCalcul.value = inputCalcul.value + "3";
}
buttonVal4.onclick = function(){
    inputCalcul.value = inputCalcul.value + "4";
}
buttonVal5.onclick = function(){
    inputCalcul.value = inputCalcul.value + "5";
}
buttonVal6.onclick = function(){
    inputCalcul.value = inputCalcul.value + "6";
}
buttonVal7.onclick = function(){
    inputCalcul.value = inputCalcul.value + "7";
}
buttonVal8.onclick = function(){
    inputCalcul.value = inputCalcul.value + "8";
}
buttonVal9.onclick = function(){
    inputCalcul.value = inputCalcul.value + "9";
}
buttonDivisionInput.onclick = function(){
    inputCalcul.value = inputCalcul.value + "/";
}
buttonMultiplicationInput.onclick = function(){
    inputCalcul.value = inputCalcul.value + "*";
}
buttonSubtractionInput.onclick = function(){
    inputCalcul.value = inputCalcul.value + "-";
}
buttonSumInput.onclick = function(){
    inputCalcul.value = inputCalcul.value + "+";
}
buttonClearInput.onclick = function(){
    inputCalcul.value = "";
}

buttonResultFinal.onclick = function(){

    let a = inputCalcul.value;

    inputCalcul.value = computeResult(a)

}







