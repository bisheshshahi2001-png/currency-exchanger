const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll('.drop-down select')
const btn = document.querySelector('.done')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg')


for(let select of dropdowns){
    for(let currcode in countryList){
        let newOption = document.createElement('option')
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === 'from' && currcode === 'USD') {
         newOption.selected = true;
        }   
        else if (select.name === 'to' && currcode === 'NPR') {
            newOption.selected = true;
        }
        select.append(newOption)
    }
    select.addEventListener('change', (e) => {
        updateFlage(e.target);
    });
}


const updateFlage = (Element) => {
    let currcode = Element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = Element.parentElement.querySelector('img');
    img.src = newsrc;
};


const updateExchangeRate =  async () =>{
    let amount = document.querySelector('.input input');
    let amtval = amount.value;
    if(amtval === '' || amtval < 1){
        amount.value = 1;
        amtval = 1;
    }
    const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let total = amtval * rate ;
    msg.innerText =  ` ${amtval} ${fromCurr.value}  = ${total} ${toCurr.value}` ;

};

btn.addEventListener('click' ,  (e) => {
     e.preventDefault(); 
    updateExchangeRate();
})
window.addEventListener('load', (e) => {
    updateExchangeRate();
})