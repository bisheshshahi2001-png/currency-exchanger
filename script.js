const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll('.drop-down select')
const btn = document.querySelector('.done')




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


btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let amount = document.querySelector('.input input').value;
    

})
