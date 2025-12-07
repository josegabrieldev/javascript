const icons = {
  success: "✔️",
  info: "ℹ️",
  warn: "⚠️",
  error: "❌",
};

function showAlert(type, title, message) {
  // Criar container se não existir
  let container = document.getElementById("alert-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "alert-container";
    document.body.appendChild(container);
  }

  // Criar alerta
  const alertBox = document.createElement("div");
  alertBox.className = `alert ${type}`;

  alertBox.innerHTML = `
    <span class="alert-icon">${icons[type] || "ℹ️"}</span>
    <div class="alert-texts">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
    <button class="alert-close">✕</button>
  `;

  container.appendChild(alertBox);

  // Fechar manual
  alertBox.querySelector(".alert-close").onclick = () => alertBox.remove();

  // Fechar automático
  setTimeout(() => {
    alertBox.remove();
  }, 3500);
}

// 📊 Controle Financeiro
class Transacao {
  constructor(descricao, valor, tipo, data) {
    if (!descricao || descricao.trim().length < 3) {
      throw new Error("A descrição deve ter pelo o menos 3 caracteres.");
    }

    if (isNaN(valor) || valor <= 0) {
      throw new Error("O valor deve ser um número maior que zero.");
    }

    if (!data) {
      throw new Error("Data inválida.");
    }

    if (tipo !== "entrada" && tipo !== "saida") {
      throw new Error("O tipo deve ser 'entrada' ou 'saida'.");
    }

    this.id = Date.now() + Math.random();
    this.descricao = descricao.trim();
    this.valor = Number(valor);
    this.data = data;
    this.tipo = tipo;
  }
}

class Carteira {
  constructor() {
    this.transacoes = [];
  }

  adicionar(transacao) {
    if (!(transacao instanceof Transacao)) {
      throw new Error(
        "Transação inválida. Deve ser uma instancia de Transação."
      );
    }
    this.transacoes.push(transacao);
  }

  removerPorId(id) {
    const idx = this.transacoes.findIndex((t) => t.id === id);
    if (idx === -1) {
      throw new Error("Transação não encontrada.");
    }
    return this.transacoes.splice(idx, 1)[0];
  }

  limpar() {
    this.transacoes = [];
  }

  get totalEntradas() {
    return this.transacoes
      .filter((t) => t.tipo === "entrada")
      .reduce((acc, t) => acc + Number(t.valor), 0);
  }

  get totalSaidas() {
    return this.transacoes
      .filter((t) => t.tipo === "saida")
      .reduce((acc, t) => acc + Number(t.valor), 0);
  }

  get saldo() {
    return this.totalEntradas - this.totalSaidas;
  }

  listar() {
    return this.transacoes.map((t) => ({
      id: t.id,
      descricao: t.descricao,
      valor: t.valor,
      tipo: t.tipo,
      data: t.data,
    }));
  }

  toJSON() {
    return JSON.stringify(this.transacoes);
  }

  static fromJSON(json) {
    const dados = JSON.parse(json || "[]");
    const c = new Carteira();
    for (const d of dados) {
      const t = new Transacao(d.descricao, d.valor, d.tipo, d.data);
      t.id = d.id ?? t.id;
      c.adicionar(t);
    }
    return c;
  }
}

class ApiCliente {
  constructor() {
    this.db = { transacoes: [] };
  }

  async #request(method, url, body = null) {
    console.log(`${method} -> ${url}`, body ?? "");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.06) {
          return reject({
            status: 500,
            mensagem: "Erro interno no servidor mock (simulado!)",
          });
        }

        if (url === "/transacoes") {
          if (method === "GET") {
            return resolve({ status: 200, dados: this.db.transacoes });
          }

          if (method === "POST") {
            const receb = {
              descricao: String(body.descricao ?? "").trim(),
              valor: Number(body.valor ?? 0),
              tipo: String(body.tipo ?? ""),
              data: String(body.data ?? ""),
            };

            if (!receb.descricao || receb.descricao.length < 3) {
              return reject({ status: 400, mensagem: "Descrição inválida." });
            }

            if (isNaN(receb.valor) || receb.valor <= 0) {
              return reject({ status: 400, mensagem: "Valor inválido." });
            }

            if (receb.tipo !== "entrada" && receb.tipo !== "saida") {
              return reject({ status: 400, mensagem: "Tipo inválido." });
            }

            if (!receb.data) {
              return reject({ status: 400, mensagem: "Data inválida." });
            }

            const nova = { id: Date.now() + Math.random(), ...receb };
            this.db.transacoes.push(nova);

            return resolve({
              status: 201,
              dados: nova,
              mensagem: "Transação Salva!",
            });
          }
        }

        if (method === "DELETE" && url.startsWith("/transacoes/")) {
          const parts = url.split("/");
          const idStr = parts[2];
          const id = Number(idStr) || idStr;
          const idx = this.db.transacoes.findIndex((t) => t.id === id);
          if (idx === -1) {
            return reject({
              status: 404,
              mensagem: "Transação não encontrada.",
            });
          }
          const removed = this.db.transacoes.splice(idx, 1)[0];
          return resolve({ status: 200, dados: removed, mensagem: "Removido" });
        }

        reject({ status: 404, mensagem: "Rota não encontrada no mock." });
      }, 600);
    });
  }

  async get(url) {
    return this.#request("GET", url);
  }

  async post(url, body) {
    return this.#request("POST", url, body);
  }

  async delete(url) {
    return this.#request("DELETE", url);
  }
}

class CarteiraOnline {
  constructor(ApiCliente) {
    if (!ApiCliente) {
      throw new Error("ApiCliente obrigatório para CarteiraOnline");
    }
    this.api = ApiCliente;
    this.transacoes = [];
  }

  async carregar() {
    const resposta = await this.api.get("/transacoes");
    if (!resposta || resposta.status !== 200) {
      throw new Error(
        resposta?.mensagem ?? "Erro ao carregar transações online."
      );
    }
    this.transacoes = resposta.dados.map((d) => {
      const t = new Transacao(d.descricao, d.valor, d.tipo, d.data);
      t.id = d.id ?? t.id;
      return t;
    });
    return this.transacoes;
  }

  async adicionar(transacao) {
    if (!(transacao instanceof Transacao)) {
      throw new Error("Transação inválida. Deve ser instancia de Transação.");
    }

    const payload = {
      descricao: transacao.descricao,
      valor: transacao.valor,
      tipo: transacao.tipo,
      data: transacao.data,
    };

    const resposta = await this.api.post("/transacoes", payload);
    if (!resposta || (resposta.status !== 201 && resposta.status !== 200)) {
      throw new Error(resposta?.mensagem ?? "Erro ao salvar transação online.");
    }
    const d = resposta.dados;
    const t = new Transacao(d.descricao, d.valor, d.tipo, d.data);
    t.id = d.id ?? t.id;
    this.transacoes.push(t);
    return t;
  }

  async removerPorId(id) {
    const resposta = await this.api.delete(`/transacoes/${id}`);
    if (!resposta || resposta.status !== 200) {
      throw new Error(
        resposta?.mensagem ?? "Erro ao remover transação online."
      );
    }

    const idx = this.transacoes.findIndex((t) => t.id === id);
    if (idx !== -1) this.transacoes.splice(idx, 1);
    return resposta.dados;
  }

  listar() {
    return this.transacoes.map((t) => ({
      id: t.id,
      descricao: t.descricao,
      valor: t.valor,
      tipo: t.tipo,
      data: t.data,
    }));
  }
}

const api = new ApiCliente();
const carteiraLocal = new Carteira();
const carteiraOnline = new CarteiraOnline(api);

const inputDescricao = document.querySelector("#descricao");
const inputValor = document.querySelector("#valor");
const inputTipo = document.querySelector("#tipo");
const inputData = document.querySelector("#data");
const btnAdicionar = document.querySelector("#btn-adicionar");
const mensagemErro = document.querySelector("#mensagem-erro");

const selectModo = document.querySelector("#modo");
const spanSaldo = document.querySelector("#saldo");
const spanEntradas = document.querySelector("#total-entradas");
const spanSaidas = document.querySelector("#total-saidas");
const tableLista = document.querySelector("#lista");
const tbody = tableLista.querySelector("tbody");

function carteiraAtual() {
  return selectModo.value === "online" ? carteiraOnline : carteiraLocal;
}

function salvarCarteiraNoLocalStorage() {
  try {
    localStorage.setItem("carteira_transacoes", carteiraLocal.toJSON());
  } catch (e) {
    console.warn("Não foi possivel salvar no localStorage:", e);
  }
}

function carregarCarteiraDoLocalStorage() {
  try {
    const json = localStorage.getItem("carteira_transacoes");
    if (!json) {
      carteiraLocal.limpar();
      return;
    }
    const c = Carteira.fromJSON(json);
    carteiraLocal.transacoes = c.transacoes;
  } catch (e) {
    console.warn("Erro ao carregar carteira!", e);
    carteiraLocal.limpar();
  }
}

async function carregarInicial() {
  mensagemErro.textContent = "";
  if (selectModo.value === "online") {
    try {
      await carteiraOnline.carregar();
    } catch (e) {
      showAlert("error", e.message, "Erro ao carregar dados online")
      mensagemErro.textContent = e.message || "Erro ao carregar dados online";
      mensagemErro.style.color = "red";
      carteiraOnline.transacoes = [];
    }
  } else {
    carregarCarteiraDoLocalStorage();
  }

  atualizarTela();
}

selectModo.addEventListener("change", async () => {
  await carregarInicial();
});

function criarTransacaoDoFormulario() {
  const descricao = inputDescricao.value.trim();
  const valor = inputValor.value;
  const tipo = inputTipo.value;
  const data = inputData.value;

  return new Transacao(descricao, valor, tipo, data);
}

btnAdicionar.addEventListener("click", async (e) => {
  e.preventDefault();
  mensagemErro.textContent = "";
  btnAdicionar.disabled = true;

  try {
    const transacao = criarTransacaoDoFormulario();
    const sistema = carteiraAtual();

    await sistema.adicionar(transacao);
    salvarCarteiraNoLocalStorage();
    atualizarTela();
    showAlert("success", "Sucesso!", "Transação adicionada");

    inputDescricao.value = "";
    inputValor.value = "";
    inputTipo.value = "entrada";
    inputData.value = "";
  } catch (err) {
    showAlert("error", "Erro!", "Não foi possivel adicionar transação");
  } finally {
    btnAdicionar.disabled = false;
  }
});

async function handleRemover(id) {
  mensagemErro.textContent = "";
  const sistema = carteiraAtual();

  const botoes = tableLista.querySelectorAll(".btn-remover");
  botoes.forEach((b) => (b.disabled = true));

  try {
    if (typeof sistema.removerPorId === "function") {
      const possiblePromise = sistema.removerPorId(id);
      await possiblePromise;
    } else {
      throw new Error("Sistema atual não implementa remoção.");
    }

    salvarCarteiraNoLocalStorage();
    atualizarTela();
  } catch (e) {
    showAlert("error", e.message, "Erro ao remover")
    mensagemErro.textContent = e.message || "Erro ao remover.";
    mensagemErro.style.color = "red";
  } finally {
    botoes.forEach((b) => (b.disabled = false));
  }
}

function atualizarTela() {
  tbody.innerHTML = "";

  const sistema = carteiraAtual();
  const transacoes = sistema.listar();

  transacoes.forEach((t) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${t.descricao}</td>
    <td>R$: ${Number(t.valor).toFixed(2)}</td>
    <td>${t.tipo.toUpperCase()}</td>
    <td>${t.data}</td>
    <td>
    <button class="btn-remover">Remover</button>
    </td>
    `;

    const btnRemover = tr.querySelector(".btn-remover");
    btnRemover.addEventListener("click", async () => {
      await handleRemover(t.id);
    });

    tbody.appendChild(tr);
  });

  const entradas =
    carteiraAtual() === carteiraLocal
      ? carteiraLocal.totalEntradas
      : carteiraOnline.transacoes.reduce(
          (s, t) => s + (t.tipo === "entrada" ? t.valor : 0),
          0
        );
  const saidas = transacoes
    .filter((t) => t.tipo === "saida")
    .reduce((s, t) => s + Number(t.valor), 0);
  const saldo = entradas - saidas;

  spanEntradas.textContent = `R$: ${entradas.toFixed(2)}`;
  spanSaidas.textContent = `R$: ${saidas.toFixed(2)}`;
  spanSaldo.textContent = `R$: ${saldo.toFixed(2)}`;
}

(async function init() {
  carregarCarteiraDoLocalStorage();
  await carregarInicial();
})();

// -------------------------------------------------------------------- //
// 🎓 Gerenciamento de Alunos
class Aluno {
  constructor(nome, idade, nota) {
    if (!nome || nome.trim().length < 3) {
      throw new Error(
        "Nome inválido. Por favor digite um nome válido e com pelo o menos 3 caracteres."
      );
    }

    if (isNaN(idade) || idade < 4) {
      throw new Error(
        "Idade precisa ser válida e inteira. Maior que 3 anos de idade"
      );
    }

    if (isNaN(nota) || nota < 0 || nota > 100) {
      throw new Error(
        "A nota está incorreta para o formato desejado. Nota precisa ser de 0 a 100"
      );
    }

    this.id = Date.now() + Math.random();
    this.nome = nome.trim();
    this.idade = Number(idade);
    this.nota = Number(nota);
  }
}

class Turma {
  constructor() {
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    if (!(aluno instanceof Aluno)) {
      throw new Error("O objeto informado não é um aluno válido.");
    }
    this.alunos.push(aluno);
  }

  removerPorId(id) {
    this.alunos = this.alunos.filter((aluno) => aluno.id !== id);
  }

  editarAluno(id, novoNome, novaIdade, novaNota) {
    const aluno = this.alunos.find((a) => a.id === id);
    if (!aluno) return false;

    aluno.nome = novoNome.trim();
    aluno.idade = Number(novaIdade);
    aluno.nota = Number(novaNota);
    return true;
  }

  melhoresAlunos() {
    return this.alunos.filter((aluno) => aluno.nota >= 80);
  }

  mediaDaTurma() {
    if (this.alunos.length === 0) return 0;

    const soma = this.alunos.reduce((total, aluno) => total + aluno.nota, 0);
    return Number((soma / this.alunos.length).toFixed(2));
  }

  salvar() {
    const dados = JSON.stringify(this.alunos);
    localStorage.setItem("turma-alunos", dados);
  }

  carregar() {
    const dados = localStorage.getItem("turma-alunos");
    if (!dados) return;

    const lista = JSON.parse(dados);
    this.alunos = lista.map((a) => {
      const aluno = new Aluno(a.nome, a.idade, a.nota);
      aluno.id = a.id;
      return aluno;
    });
  }

  buscar(keyword) {
    const termo = keyword.trim().toLowerCase();
    if (!termo) return this.alunos;
    return this.alunos.filter((aluno) =>
      aluno.nome.toLowerCase().includes(termo)
    );
  }

  aplicarOrdenacao(lista, tipo) {
    switch (tipo) {
      case "nome-az":
        return [...lista].sort((a, b) => a.nome.localeCompare(b.nome));

      case "nome-za":
        return [...lista].sort((a, b) => b.nome.localeCompare(a.nome));

      case "nota-up":
        return [...lista].sort((a, b) => b.nota - a.nota);

      case "nota-down":
        return [...lista].sort((a, b) => a.nota - b.nota);

      case "idade-up":
        return [...lista].sort((a, b) => b.idade - a.idade);

      case "idade-down":
        return [...lista].sort((a, b) => a.idade - b.idade);

      default:
        return lista;
    }
  }
}

const nomeAluno = document.querySelector("#aluno-nome");
const idadeAluno = document.querySelector("#aluno-idade");
const notaAluno = document.querySelector("#aluno-nota");
const BuscaAluno = document.querySelector("#aluno-busca");

const listaAlunos = document.querySelector("#lista-alunos");
const mensagemTurma = document.querySelector("#mensagem-turma");

const btnAdicionarAluno = document.querySelector("#btn-adicionar-aluno");
const btnMelhoresAlunos = document.querySelector("#btn-melhores");
const btnMedia = document.querySelector("#btn-media");
const btnSalvar = document.querySelector("#btn-salvar");
const btnCarregar = document.querySelector("#btn-carregar");

const selectOrdenar = document.querySelector("#ordenar-alunos");

let idEmEdicao = null;
const turma = new Turma();

btnAdicionarAluno.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (idEmEdicao !== null) {
      turma.editarAluno(
        idEmEdicao,
        nomeAluno.value,
        idadeAluno.value,
        notaAluno.value
      );

      showAlert(
        "success",
        "Edição feita!",
        `Aluno ${nomeAluno.value} editado`
      );
      mensagemTurma.textContent = "Aluno editado com sucesso!";
      mensagemTurma.style.color = "green";

      nomeAluno.value = "";
      idadeAluno.value = "";
      notaAluno.value = "";

      idEmEdicao = null;
      btnAdicionarAluno.textContent = "Adicionar Aluno";
      renderizarLista();
    } else {
      const aluno = new Aluno(
        nomeAluno.value,
        idadeAluno.value,
        notaAluno.value
      );
      turma.adicionarAluno(aluno);
      showAlert(
        "success",
        "Aluno adicionado!",
        `${nomeAluno.value} foi registrado`
      );
      mensagemTurma.textContent = `Aluno ${nomeAluno.value} adicionado!`;
      mensagemTurma.style.color = "green";

      nomeAluno.value = "";
      idadeAluno.value = "";
      notaAluno.value = "";
      renderizarLista();
    }
  } catch (erro) {
    showAlert("error", "Erro ao adicionar aluno", erro.message)
    mensagemTurma.textContent = erro.message;
    mensagemTurma.style.color = "red";
  }
});

btnSalvar.addEventListener("click", () => {
  turma.salvar();
  showAlert("success", "Turma salva com sucesso!", "Os dados foram gravados no armazenamento local")
  mensagemTurma.textContent = "Turma salva com sucesso!";
  mensagemTurma.style.color = "green";
});

btnCarregar.addEventListener("click", () => {
  turma.carregar();
  showAlert("success", "Turma carregada!", "Os alunos foram carregados da memória")
  mensagemTurma.textContent = "Turma carregada!";
  mensagemTurma.style.color = "green";
  renderizarLista();
});

btnMelhoresAlunos.addEventListener("click", () => {
  const melhores = turma.melhoresAlunos();
  renderizarLista(melhores);

  if (melhores.length === 0) {
    showAlert("error", "Sem alunos excelentes!", "Nenhum aluno com nota maior que 80 pontos!")
    mensagemTurma.textContent = "Nenhum aluno com nota acima de 80 pontos!"
    mensagemTurma.style.color = "red"
  } else {
    showAlert("success", "Melhores alunos encontrados!", `${melhores.length} aluno(s) excelentes!`)
    mensagemTurma.textContent = `${melhores.length} aluno(s) excelentes!`
    mensagemTurma.style.color = "green"
  }
});

btnMedia.addEventListener("click", () => {
  const media = turma.mediaDaTurma();
  showAlert("info", "Média da turma", `A média calculada foi ${media} pontos`)
  mensagemTurma.textContent = `Média da turma: ${media}`;
  mensagemTurma.style.color = "blue";
});

BuscaAluno.addEventListener("input", () => {
  renderizarLista();
});

selectOrdenar.addEventListener("click", () => {
  renderizarLista();
});

function renderizarLista(listaExterna = null) {
  let lista = listaExterna || turma.buscar(BuscaAluno.value);
  lista = turma.aplicarOrdenacao(lista, selectOrdenar.value);

  listaAlunos.innerHTML = "";

  lista.forEach((aluno) => {
    const li = document.createElement("li");
    const largura = aluno.nota;

    let cor = "";
    if (aluno.nota >= 80) cor = "green";
    else if (aluno.nota >= 50) cor = "gold";
    else cor = "red";

    li.innerHTML = `
      <p>${aluno.nome} - ${aluno.idade} anos - Nota: ${aluno.nota}</p>

      <div class="barra-nota">
        <div class="preenchimento" style="width:${largura}%; background:${cor};"></div>
      </div>

      <div> <button class="editar" data-id="${aluno.id}">Editar</button>
      <button class="remover" data-id="${aluno.id}">Remover</button> </div>
    `;

    listaAlunos.appendChild(li);
  });

  document.querySelectorAll(".remover").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const aluno = turma.alunos.find((a) => a.id === id)
      const nomeRemovido = aluno ? aluno.nome : "Aluno"

      turma.removerPorId(id);
      renderizarLista();

      showAlert("warn", "Aluno removido!", `${nomeRemovido} foi excluído da lista`)
      mensagemTurma.textContent = "Aluno removido!";
      mensagemTurma.style.color = "green";
    });
  });

  document.querySelectorAll(".editar").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const aluno = turma.alunos.find((a) => a.id === id);

      nomeAluno.value = aluno.nome;
      idadeAluno.value = aluno.idade;
      notaAluno.value = aluno.nota;

      idEmEdicao = id;

      btnAdicionarAluno.textContent = "Salvar Alterações";

      showAlert(
        "info",
        "Modo edição ativado!",
        "Edite os dados e clique em salvar"
      );
      mensagemTurma.textContent = "Modo edição ativado!";
      mensagemTurma.style.color = "orange";
    });
  });
}
