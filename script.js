    function copytxt() {
      const inputText = document.getElementById("inputText");
      navigator.clipboard.writeText(inputText.value)
        .then(() => {
          alert('Texto copiado para a área de transferência');
        })
        .catch(err => {
          alert('Algo não ocorreu como o esperado', err);
        });
    }
