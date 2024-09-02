function gerarSenha(comprimento, incluirNumeros, incluirSimbolos) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let simbolos = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";
  
    if (incluirNumeros) {
      caracteres += numeros;
    }
  
    if (incluirSimbolos) {
      caracteres += simbolos;
    }
  
    let senha = "";
  
    for (let i = 0; i < comprimento; i++) {
      let indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indice];
    }
  
    return senha;
  }
  
  const comprimento = parseInt(prompt("Qual o comprimento da senha?"));
  const incluirNumeros = confirm("Deseja incluir números?");
  const incluirSimbolos = confirm("Deseja incluir símbolos?");
  
  const senha = gerarSenha(comprimento, incluirNumeros, incluirSimbolos);
  
  alert(`Sua nova senha é: ${senha}`);