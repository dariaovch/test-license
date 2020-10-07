const radioButtons = Array.from(document.querySelectorAll('.window__input'));
const numbers = Array.from(document.querySelector('.window__input_type_select'));
const numberOfLicenses = numbers.selectedIndex.value;
const sum = document.querySelector('.window__sum');

const countTotal = () => {
    radioButtons.forEach((item) => {
        if(item.checked) {
            return item.value
        }

        return item.value * numberOfLicenses;
    })
}

sum.textContent = countTotal;