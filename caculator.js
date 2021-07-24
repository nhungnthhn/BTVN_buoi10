function Addition() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sum = num1 + num2;

    document.getElementById ("result").innerHTML = "Kết quả là:" + sum
}

function Subtraction() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sum = num1 - num2;

    document.getElementById ("result").innerHTML = "Kết quả là:" + sum
}

function Multiplication() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sum = num1 * num2;

    document.getElementById ("result").innerHTML = "Kết quả là:" + sum
}

function Division() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sum = num1 / num2;

    document.getElementById ("result").innerHTML = "Kết quả là:" + sum
}