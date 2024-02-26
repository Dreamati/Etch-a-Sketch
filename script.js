const input = document.querySelector('input');
const body = document.querySelector('body');
const bigBox = document.querySelector('.bigBox');

input.addEventListener('click', function() {

    while(bigBox.firstChild)
    {
        let x = bigBox.firstChild
        bigBox.removeChild(x);
    }

    let boxNumber = Math.floor(input.value*64/100);
    sliderValue.textContent = boxNumber;
    for (let i = 0; i< boxNumber; i++)
    {
        let childBox = document.createElement('div');
        childBox.classList.add('childBox');
        bigBox.appendChild(childBox);

        for(let j = 0; j< boxNumber; j++)
        {
            let grandchildBox = document.createElement('div');
            grandchildBox.classList.add('grandchildBox');
            childBox.appendChild(grandchildBox);

            grandchildBox.addEventListener('click', )
        }
    }

});

let sliderValue = document.querySelector(".sliderValue");

