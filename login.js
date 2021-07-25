function login() {

    let username = prompt ("Hãy nhập tên của bạn:")
    if (username == 'Admin') {
        let password = prompt("Hãy nhập mật khẩu của bạn:")
        if (password == 'TheMaster'){
            alert('Hello')
        }
        else if (password == '') {
            alert('Quên mk ah bạn mình')
        }
        else alert('Sai mk rồi bạn eii')

    }else if (username == null) {
        alert ('Canceled')

    }else alert("Tôi không biết bạn :3")

}