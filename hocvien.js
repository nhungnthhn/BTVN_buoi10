let array = Array("Nguyễn Hồng Nhung","Nguyễn Thanh Nhàn");
function add() {
    let text = document.getElementById("string").value;
    array.push(document.getElementById("string").value);
    alert("Học sinh: " + array[array.length-1]);
}

function display() {
    // hr de tao mot duong ke phan cach nam ngang
    let e = "<hr/>"; 
    for (i = 0; i < array.length; i++) {
        e += "Số thứ tự học sinh: " + array[i] + " là " + i + "<br/>";
    }
    document.getElementById("result").innerHTML = e; 
}

function xoa() {
    array.pop();
}