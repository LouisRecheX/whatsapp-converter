const inputsContainer = document.getElementById("inputs");

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.classList.add("input-set");
  div.innerHTML = `
    <input type="text" placeholder="DDD" maxlength="2" class="ddd">
    <input type="text" placeholder="Telefone" maxlength="9" class="tel">
    <input type="text" placeholder="Nome (será usado no início com 'Olá Nome')" class="nome">
  `;
  inputsContainer.appendChild(div);
}

function gerarLinks() {
  const ddds = document.querySelectorAll(".ddd");
  const tels = document.querySelectorAll(".tel");
  const nomes = document.querySelectorAll(".nome");
  const mensagemBase = document.getElementById("mensagem").value.trim();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const ddd = ddds[i].value.trim();
    const tel = tels[i].value.trim();
    const nome = nomes[i].value.trim();

    if (ddd && tel && nome) {
      const numero = `55${ddd}${tel}`;
      const texto = `Olá ${nome}, ${mensagemBase}`;
      const mensagemCodificada = encodeURIComponent(texto);
      const link = `https://wa.me/${numero}?text=${mensagemCodificada}`;

      const box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `
        <strong>${ddd}${tel} - ${nome}</strong>
        <a href="${link}" target="_blank">${link}</a>
      `;
      resultados.appendChild(box);
    }
  }
}
