function changeEstado() {
    const select = document.getElementById("estado");
    const textoestado = select.value;
 
    const estadoActual= document.getElementById('estadoActual');
    estadoActual.innerText = textoestado;
    
}