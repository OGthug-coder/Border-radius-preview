let inputs = document.querySelectorAll('input');
let block = document.querySelector('#block');
let copy_data = document.querySelector('#copy');
let dict = {
    'top': 0,
    'bottom': 1,
    'left': 2,
    'right': 3
};

for (let i = 0; i < inputs.length; i++) {
    inputs[i].oninput = function () {

        if (inputs[i].value > 100 | inputs[i].value < 0) {
            inputs[i].value = 0;
        }
        
        let side = inputs[i].id;
        let actual_style = getComputedStyle(block).borderRadius.split('%');
        actual_style.pop();
        actual_style[dict[side]] = inputs[i].value;
        actual_style = actual_style.map(Number);
        let new_style = `${actual_style[0]}% ${actual_style[1]}% ${actual_style[2]}% ${actual_style[3]}%`;
        block.style.borderRadius = new_style;
        copy_data.innerHTML = `border-radius: ${new_style};`;
    }
}

function copy() {
    let copyText = copy_data;
    let textArea = document.createElement("textarea");
    textArea.value = copyText.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}