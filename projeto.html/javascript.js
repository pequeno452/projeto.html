    const paginas= { 
        
      "inicio": "" ,
      "sobre": "",
      "servicos": "" ,
      "contato": "",
    };

    let conteudo= windos .document.getlelementByid("conteudo");
    function navegarpara(pagina){
      conteudo.innerHTML = paginas[pagina];
    }