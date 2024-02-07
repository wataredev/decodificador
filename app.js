let textoFinal;
let textArea = document.querySelector("textArea");

function criptografar() {
    let textoCriptografada = document.querySelector("textarea").value;
    esconderTexto("container1")
    mostrarTexto("container2")
    esconderTexto("container3")
    if (textoCriptografada) {
        textoCriptografada = textoCriptografada.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
                            console.log(textoCriptografada);
                            document.getElementById("textarea1").innerHTML = textoCriptografada;
                            textoFinal = textoCriptografada;

    }
    }

function descriptografar() {
    esconderTexto("container1");
    esconderTexto("container2");
    mostrarTexto("container3");
    let textoCriptografada = document.querySelector("textarea").value;
    if (textoCriptografada) {
        textoCriptografada = textoCriptografada.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
                            console.log(textoCriptografada);
                            document.getElementById("textarea2").innerHTML = textoCriptografada;
                            textoFinal = textoCriptografada;
                            
    }
}

function esconderTexto(tag) {
    document.getElementById(tag).style.display = "none";
}

function mostrarTexto(tag) {
    document.getElementById(tag).style.display = "block";
}

function mostrarTextoInicial(tag, imagens) {
    document.getElementById(tag).style.display = "block";
    if (window.matchMedia("(min-width:1200px)").matches) {
        document.getElementById(imagens).style.paddingTop = "175px";
    }
    
    if (window.matchMedia("(max-width:1199px)").matches) {
        document.getElementById(imagens).style.paddingTop = "50px";
    }
}

function copiar() {
    navigator.clipboard.writeText(textoFinal);
}
    
function reiniciar() {
    let apagarTexto = document.querySelector("textArea");
    apagarTexto.value = "";
    document.getElementById("button-main").disabled = true;
    document.getElementById("button-main2").disabled = true;
    mostrarTextoInicial("container1", "container1-variable")
    esconderTexto("container2")
    esconderTexto("container3")
}

function buttonAttributeRemove() {
    const texto = document.getElementById("textArea").value
    if (texto === "") {
        document.getElementById("button-main").disabled = true;
        document.getElementById("button-main2").disabled = true;
    }   
    if (texto !== "") {
        document.getElementById("button-main").disabled = false;
        document.getElementById("button-main2").disabled = false;
    }
}
