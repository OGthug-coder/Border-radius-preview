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

        inputs[i].value = checkCorrectInput(inputs[i].value);

        let top_radius = getCorrectValue(document.querySelector('#top').value);
        let bottom_radius = getCorrectValue(document.querySelector('#bottom').value);
        let left_radius = getCorrectValue(document.querySelector('#left').value);
        let right_radius = getCorrectValue(document.querySelector('#right').value);

        let new_style = `${top_radius}% ${bottom_radius}% ` + 
            `${left_radius}% ${right_radius}%`;
        
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

function getCorrectValue(value) {
    let tmp = value ? Number(value) : 0;
    return tmp;
}

function checkCorrectInput(value) {
    let endOfLine = value.substr(value.length - 1);
    let re = /\d/;

    if (!re.test(endOfLine)){ 
        value = value.substr(0, value.length - 1);
    }
    
    if (value > 100 | value < 0) {
        return value.substr(0, value.length - 1);
    }
    
    return value
}