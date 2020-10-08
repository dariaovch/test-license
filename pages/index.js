//Константа для отображения итоговой суммы
const sum = document.querySelector('.window__sum');
const selectedPlan = document.querySelector('.window__plan');

//Константа для окна выбора количества лицензий
const select = document.querySelector('.window__input_type_select');

//Получаем значение выбранной радиокнопки
function getRadioValue() {
    const radio = document.getElementsByName('license-type');
     for (let i=0; i<radio.length; i++) {
         if(radio[i].checked) {
             selectedPlan.textContent = `Selected plan: #${i+1}`;
             return radio[i].value;
         }
     }
 }

 //Получаем значение выбранного количества лицензий
select.onChange = () => {
    return select.value;
}

//Считаем итоговую сумму
function countTotal() {
        let n = select.onChange();
        let m = getRadioValue();

        let total = m * n;

         return total;
    
}

//Слушатель события 'change' для формы
document.forms.licenses.addEventListener('change', () => {
    let total = countTotal();
    sum.textContent = `$${total}US`;
})



const submitButton = document.querySelector('.window__submit-button');

function handleSubmitForm() {
    document.forms.licenses.classList.add('window__form_submitted');
    document.querySelector('.window__payment').classList.remove('window__payment_inactive');
}

document.forms.licenses.addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.querySelector('.window__sum-to-pay').textContent = `$${countTotal()}US`
    handleSubmitForm();
})