    function myFunction() {
        let x = parseFloat(document.getElementById("numberA").value);
        let y = parseFloat(document.getElementById("numberB").value);

        let text;
        if (x < y) {
            text = "Condição válida: Número B maior que número A.";
        } else if (y < x) {
            text = "Condição inválida: Número A maior que número B.";
        } else {
            text = "Os números A e B são iguais.";
        }
        document.getElementById("result").innerHTML = text;
    }