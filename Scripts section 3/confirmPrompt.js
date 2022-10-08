let data = ["111","222"]

    const sayHello = function (input) {
        if (input == data[0]) {
            return alert("welcome william")
        } else {
            return window.close()
        }
    }

    sayHello(prompt("your password"))