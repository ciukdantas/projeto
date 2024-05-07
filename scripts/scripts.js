function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}

function enviarParaWhatsApp(){
    const name = document.getElementById('input-name').value
    const email = document.getElementById('input-email').value
    const telefone = document.getElementById('input-tel').value
    const mensagem = document.getElementById('input-msg').value
    
    const texto = `Nome: ${name}\nE-email: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5582991135823';//Insira o numero de telefone do whatsApp aqui (apenas numeros);
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}