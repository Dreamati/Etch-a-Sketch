const input = document.querySelector('input');
const body = document.querySelector('body');
const bigBox = document.querySelector('.bigBox');
let isRainbow = false;

input.addEventListener('click', boxCreate);
const clear = document.querySelector('.clear')
clear.addEventListener('click', boxCreate)

let sliderValue = document.querySelector(".sliderValue");
boxCreate();

function boxCreate() {

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
            let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'indigo', 'violet'];
            let grandchildBox = document.createElement('div');
            grandchildBox.classList.add('grandchildBox');
            childBox.appendChild(grandchildBox);
            if(isRainbow)
            {
                grandchildBox.addEventListener('mousemove', () => grandchildBox.style.backgroundColor = colors[Math.floor(Math.random() * 7)]);
            }
            else{
            grandchildBox.addEventListener('mousemove', () => grandchildBox.classList.add('clicked'))
            }
        }
    }

}

document.querySelector('.rainbow').addEventListener('click', function(){

    if (isRainbow)
    {
        isRainbow = false;
    }
    else {
        isRainbow = true;
    }
    boxCreate();
}) 