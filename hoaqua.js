function hoaqua() {
    let cost = document.getElementById("hoaqua1").value;
    switch (cost) {
        case '1':
        document.getElementById("result").innerHTML = "Giá ổi là: 20000VND/kg";
        break;
        case '2':
        document.getElementById("result").innerHTML = "Giá dưa hấu là: 20000VND/kg";
        break;
        case '3':
        document.getElementById("result").innerHTML = "Giá táo là: 30000VND/kg";
        break;
        case '4':
        document.getElementById("result").innerHTML = "Giá xoài là: 30000VND/kg";
        break;
        case '5':
        document.getElementById("result").innerHTML = "Giá cam là: 40000VND/kg";
        break;
        case '6':
        document.getElementById("result").innerHTML = "Giá chôm chôm là: 40000VND/kg";
        break;
        case '7':
        document.getElementById("result").innerHTML = "Giá măng cụt là: 50000VND/kg";
        break;
        // default document.getElementById("result").innerHTML = "Không có sản phẩm này";
    }
}