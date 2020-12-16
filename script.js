
function plus(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return (a + b);
}

function minus(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return (a - b);
}

function umnojit(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return (a * b);
}

function razdelit(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return (a / b);
}

function calc() {
    var w;
    var x = document.getElementById("num1").value;
    var y = document.getElementById("oper").value;
    var z = document.getElementById("num2").value;

    switch (y) {
        case 'plus':
            w = plus(x, z);
            document.getElementById("out").innerHTML=w;
            break;
        case 'minus':
            w = minus(x, z);
            document.getElementById("out").innerHTML=w;
            break;
        case 'umnojit':
            w = umnojit(x, z);
            document.getElementById("out").innerHTML=w;
            break;
        case 'razdelit':
            w = razdelit(x, z);
            document.getElementById("out").innerHTML=w;
            break;

    }

}