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

    inputDescricao.value = "";
    inputValor.value = "";
    inputTipo.value = "entrada";
    inputData.value = "";
  } catch (err) {
    mensagemErro.textContent = err.message || "Erro ao adicionar!";
    mensagemErro.style.color = "red";
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
