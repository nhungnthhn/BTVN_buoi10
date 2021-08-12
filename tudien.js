function check() {
    // let word_eng = ["happy", "sad", "why", "water", "lemon"];
    // let word_viet = ["vui", "buồn", "tại sao", "nước", "chanh"]
    // let text = document.getElementById("string").value;
    // let index_eng = 0;
    // let result = "";
    // for (let z = 0; z < word_eng.length; z ++) {
    //     if (text == word_eng[z]) {
    //         index_eng = z;
    //         for (j = 0; j < word_viet.length; j++) {
    //             if (index_eng == j) {
    //                 result = word_viet[j];
    //             }
    //         }
    //     }
    // }
    // document.getElementById("result").innerHTML=result;



    let word_eng = ["happy", "sad", "why", "water", "lemon"];
    let word_viet = ["Vui", "Vuồn", "Tại sao", "Nước", "Chanh"]
    let text = document.getElementById("string").value;
    let index_eng = 0;
    let result = "";
    let flag = false;
    for (z = 0; z < word_eng.length; z ++) {
            if (text == word_eng[z]) {
                flag = true;
                index_eng = z;
                for (j = 0; j < word_viet.length; j++) {
                    if (index_eng == j) {
                        result = word_viet[j];
                    }
                }
                break;
            }
        }
    if (flag) {
        document.getElementById("result").innerHTML=result;
    }
    else {
        alert("Không có từ này")
    }
}