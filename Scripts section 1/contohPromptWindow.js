    const sayHello = function (name) {
        if (name !== "william") {
            return window.close()
        } else {
            alert(`hello ${name}`)
        }
    }

    sayHello(prompt("masukan nama anda?"))