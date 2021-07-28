function hoaqua() {
    let cost = document.getElementById("hoaqua1").value;
    switch (cost) {
        case '1':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 20000VND/kg";
        break;
        case '2':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 20000VND/kg";
        break;
        case '3':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 30000VND/kg";
        break;
        case '4':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 30000VND/kg";
        break;
        case '5':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 40000VND/kg";
        break;
        case '6':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 40000VND/kg";
        break;
        case '7':
        document.getElementById("result").innerHTML = "Giá " + cost + "là: 50000VND/kg";
        break;
        default document.getElementById("result").innerHTML = "Không có sản phẩm này";
    }
}