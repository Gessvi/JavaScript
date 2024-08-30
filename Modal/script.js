function mostrarSenha() {
    const senhaInput = document.getElementById('senha');
    const tipo = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = tipo;
}
