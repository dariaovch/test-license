//Массив радиокнопок
const radio = document.getElementsByName('license-type');

//Константа для отображения итоговой суммы
const sum = document.querySelector('.window__sum');
const selectedPlan = document.querySelector('.window__plan');

//Константа для окна выбора количества лицензий
const select = document.querySelector('.window__input_type_select');

//Получаем значение выбранной радиокнопки
function getRadioValue() {
     for (let i=0; i<radio.length; i++) {
         if(radio[i].checked) {
             selectedPlan.textContent = `Selected plan: #${i+1}`;
             return radio[i].value;
         } 
     }
     
 }

//Выделение выбранной строки в массиве радиокнопок
document.forms.licenses.addEventListener('change', () => {
    radio.forEach((item) => {
    if(item.checked) {
         item.closest('.window__input-container').classList.add('window__input-container_active');
         } else {
    item.closest('.window__input-container').classList.remove('window__input-container_active');
    }
});
});

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
    sum.textContent = `$${total}`;
})


//Функция-обработчик сабмита формы
function handleSubmitForm() {
    document.forms.licenses.classList.add('window__form_submitted');
    document.querySelector('.window__payment').classList.remove('window__payment_inactive');
}

//Добавляем слушатель события submit для формы
document.forms.licenses.addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.querySelector('.window__sum-to-pay').textContent = `$${countTotal()}`
    handleSubmitForm();
})