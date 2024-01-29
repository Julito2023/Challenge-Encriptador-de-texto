const botonEncriptar = document.querySelector('.btn-encriptar');
const botonDesencriptar = document.querySelector('.btn-desencriptar');
const botonCopiar = document.querySelector('.contenedor-copiar');
const imagenMunieco = document.querySelector('.contenedor-munieco');
const contenedorParrafo = document.querySelector('.contenedor-parrafo');

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarTexto;

function encriptarTexto(){
    imagenMunieco.classList.add("ocultar-elemento");
    contenedorParrafo.classList.add("ocultar-elemento");
    botonCopiar.classList.add("mostrar-elemento");

    let mensajeUsuario = document.getElementById("mensaje-usuario").value;
    if(mensajeUsuario.includes('a') || mensajeUsuario.includes('e') || mensajeUsuario.includes('i') || mensajeUsuario.includes('o') || mensajeUsuario.includes('u')){
        mensajeUsuario = mensajeUsuario.replaceAll('e', 'enter');
        mensajeUsuario = mensajeUsuario.replaceAll('i', 'imes');
        mensajeUsuario = mensajeUsuario.replaceAll('a', 'ai');
        mensajeUsuario = mensajeUsuario.replaceAll('o', 'ober');
        mensajeUsuario = mensajeUsuario.replaceAll('u', 'ufat');
        document.querySelector('.mensaje-encriptado').innerHTML = mensajeUsuario;
    }
    else{
        document.querySelector('.mensaje-encriptado').innerHTML = 'No se puede encriptar tu mensaje';
    }
}

function desencriptarTexto(){
    imagenMunieco.classList.add("ocultar-elemento");
    contenedorParrafo.classList.add("ocultar-elemento");
    botonCopiar.classList.add("mostrar-elemento");
    
    let mensajeUsuario = document.getElementById("mensaje-usuario").value;
    if(mensajeUsuario.includes('a') || mensajeUsuario.includes('e') || mensajeUsuario.includes('i') || mensajeUsuario.includes('o') || mensajeUsuario.includes('u')){
        mensajeUsuario = mensajeUsuario.replaceAll('enter', 'e');
        mensajeUsuario = mensajeUsuario.replaceAll('imes', 'i');
        mensajeUsuario = mensajeUsuario.replaceAll('ai', 'a');
        mensajeUsuario = mensajeUsuario.replaceAll('ober', 'o');
        mensajeUsuario = mensajeUsuario.replaceAll('ufat', 'u');
        document.querySelector('.mensaje-encriptado').innerHTML = mensajeUsuario;
    }
    else{
        document.querySelector('.mensaje-encriptado').innerHTML = 'No se puede encriptar tu mensaje';
    }
}

function copiarTexto(){
    var contenido = document.querySelector('.mensaje-encriptado').textContent;
    navigator.clipboard.writeText(contenido);
}

