let output = document.getElementById('display-scr');

function display(val) {
    output.value += val;
}

function result() {
    try{
        output.value = eval(output.value);
    } catch(err) {
        output.value = 'ERROR';
    }
}

function del() {
    output.value = output.value.slice(0,-1);
}

function alClear() {
    output.value = '';
}

function power () {
    let pow = eval(output.value);
    output.value = pow*pow;
}

