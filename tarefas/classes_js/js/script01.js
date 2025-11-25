class User {
  constructor(nome, email, senhaHash) {
    this.id = User.gerarId();
    this.nome = nome;
    this.email = User.normalizarEmail(email);
    this.senhaArmazenada = senhaHash;
    this.role = "user";
    this.dataCriacao = new Date().toISOString();
  }

  static gerarId() {
    const idUnico = Date.now() + "-" + Math.floor(Math.random() * 100000);
    return idUnico;
  }

  static normalizarEmail(email) {
    let emailTratado = email.trim().toLowerCase();
    return emailTratado;
  }

  static async encriptarSenha(senha) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(senha);
    const buffer = await crypto.subtle.digest("SHA-256", bytes);
    const arrayBytes = [...new Uint8Array(buffer)];
    const hashHex = arrayBytes
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }
}

class UserService {
  static validarNome(nome) {
    // Verifica se é null ou undefined
    if (nome == null) {
      throw new Error(
        "Nome está inválido. Digite corretamente e tente novamente."
      );
    }

    // Verifica se é string
    if (typeof nome !== "string") {
      throw new Error(
        "Seu nome precisa ser uma String ou seja criada por letras."
      );
    }
    const nomeTratado = nome.trim();

    // Verifica se é vazio
    if (nomeTratado.length === 0) {
      throw new Error("Seu nome não pode ser vazio!");
    }

    // Verifica tamanho mínimo
    if (nomeTratado.length < 3) {
      throw new Error("Seu nome precisa ter pelo o menos 3 caracteres.");
    }

    // Proíbe números no nome
    if (/[0-9]/.test(nomeTratado)) {
      throw new Error("O nome não pode conter números.");
    }

    return true;
  }

  static validarEmail(email) {
    if (email == null) {
      throw new Error("Email inválido. Digite um email e tente novamente.");
    }

    if (typeof email !== "string") {
      throw new Error(
        "O email precisa ser uma string ou seja criada com letras, um texto."
      );
    }

    const emailTratado = email.trim();

    if (emailTratado.length === 0) {
      throw new Error("O email não pode estar vazio.");
    }

    if (emailTratado.length < 5) {
      throw new Error("O email deve conter pelo o menos 5 caracteres");
    }

    const emailPadrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPadrao.test(emailTratado)) {
      throw new Error(
        "Formato de email inválido. Verifique e tente novamente."
      );
    }

    return true;
  }

  static validarSenha(senha) {
    if (senha == null) {
      throw new Error(
        "Senha inválida. Digite uma senha válida e tente novamente."
      );
    }

    if (typeof senha !== "string") {
      throw new Error("A senha precisa ser uma string com texto.");
    }

    const senhaTratada = senha.trim();

    if (senhaTratada.length === 0) {
      throw new Error("A senha não pode estar vazia.");
    }

    if (senhaTratada.length < 8) {
      throw new Error("A senha deve conter pelo o menos 8 caracteres.");
    }

    return true;
  }

  static async cadastrar(nome, email, senha) {
    UserService.validarNome(nome);
    UserService.validarEmail(email);
    UserService.validarSenha(senha);

    const nomeTratado = nome.trim();
    const emailTratado = User.normalizarEmail(email);
    const senhaTratada = senha.trim();

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    const emailJaExiste = usuariosSalvos.some((u) => u.email === emailTratado);

    if (emailJaExiste) {
      throw new Error("Este email já está cadastrado. Tente outro!");
    }

    const senhaHash = await User.encriptarSenha(senha);
    const novoUsuario = new User(nomeTratado, emailTratado, senhaHash);

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
  }

  static async login(email, senha) {
    UserService.validarEmail(email);
    UserService.validarSenha(senha);

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuariosSalvos.find(
      (u) => u.email === User.normalizarEmail(email)
    );

    if (!usuarioEncontrado) {
      throw new Error("Email não cadastrado!");
    }

    const senhaHash = await User.encriptarSenha(senha);

    if (senhaHash !== usuarioEncontrado.senhaArmazenada) {
      throw new Error("Senha incorreta!");
    }
    return usuarioEncontrado;
  }
}

const nomeCadastro = document.getElementById("nome-cadastro");
const emailCadastro = document.getElementById("email-cadastro");
const senhaCadastro = document.getElementById("senha-cadastro");
const btnCadastrar = document.getElementById("btn-cadastrar");
const mensagemCadastro = document.getElementById("mensagem-cadastro");

btnCadastrar.addEventListener("click", async () => {
  const nome = nomeCadastro.value;
  const email = emailCadastro.value;
  const senha = senhaCadastro.value;

  btnCadastrar.disabled = true;
  mensagemCadastro.textContent = "";

  try {
    await UserService.cadastrar(nome, email, senha);

    mensagemCadastro.textContent = "Cadastro realizado com sucesso!";
    mensagemCadastro.style.color = "green";

    nomeCadastro.value = "";
    emailCadastro.value = "";
    senhaCadastro.value = "";
  } catch (erro) {
    mensagemCadastro.textContent = erro.message;
    mensagemCadastro.style.color = "red";
  } finally {
    btnCadastrar.disabled = false;
  }
});

const emailLogin = document.getElementById("email-login");
const senhaLogin = document.getElementById("senha-login");
const btnLogin = document.getElementById("btn-login");
const mensagemLogin = document.getElementById("mensagem-login");

btnLogin.addEventListener("click", async () => {
  const email = emailLogin.value;
  const senha = senhaLogin.value;

  btnLogin.disabled = true;
  mensagemLogin.textContent = "";

  try {
    const usuario = await UserService.login(email, senha);
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    mensagemLogin.textContent = `Bem-vindo! ${usuario.nome}`;
    mensagemLogin.style.color = "green";

    emailLogin.value = "";
    senhaLogin.value = "";
  } catch (erro) {
    mensagemLogin.textContent = erro.message;
    mensagemLogin.style.color = "red";
  } finally {
    btnLogin.disabled = false;
  }
});

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  temEstoque(qtd) {
    return this.quantidade >= qtd;
  }

  reduzirEstoque(qtd) {
    if (this.temEstoque(qtd)) {
      this.quantidade -= qtd;
    }
  }

  aumentarEstoque(qtd) {
    this.quantidade += qtd;
  }
}

const produtos = [
  new Produto("Mouse Gamer", 79.9, 10),
  new Produto("Teclado Mecânico", 199.9, 5),
  new Produto("Monitor 144Hz", 899.9, 3),
  new Produto("Headset RGB", 149.9, 7),
  new Produto("Pizza Calabresa", 35, 10),
  new Produto("Pizza Mussarela", 32, 8),
  new Produto("Hambúrguer", 18, 15),
  new Produto("Refrigerante Lata", 6, 40),
  new Produto("Batata Frita", 12, 20),
];

class Carrinho {
  constructor() {
    this.itens = new Map();
  }

  adicionar(produto, qtd = 1) {
    qtd = Number(qtd);
    qtd = Math.floor(qtd);

    if (qtd <= 0) {
      throw Error("Quantidade inválida. Deve ser maior que ZERO!");
    }

    if (!produto.temEstoque(qtd)) {
      throw Error("Estoque insuficiente.");
    }

    let chave = produto.nome;
    let linha = this.itens.get(chave);
    if (this.itens.has(chave)) {
      linha.quantidade += qtd;
      produto.reduzirEstoque(qtd);
      this.itens.set(chave, linha);

      return { ok: true, acao: "Atualizado", linha: linha };
    } else {
      linha = { produto: produto, quantidade: qtd };
      produto.reduzirEstoque(qtd);
      this.itens.set(chave, linha);
      return { ok: true, acao: "Adicionado", linha: linha };
    }
  }

  remover(produto, qtd = 1) {
    qtd = Number(qtd);
    qtd = Math.floor(qtd);

    if (qtd <= 0) {
      throw Error("Quantidade inválida. Deve ser maior que ZERO!");
    }

    const chave = produto.nome;

    if (!this.itens.has(chave)) {
      throw Error("Produto não está no carrinho");
    }

    const linha = this.itens.get(chave);

    if (linha.quantidade < qtd) {
      throw Error("Você está tentando remover mais do que tem no carrinho.");
    }

    linha.quantidade -= qtd;
    produto.aumentarEstoque(qtd);

    if (linha.quantidade == 0) {
      this.itens.delete(chave);
      return { ok: true, acao: "Removido totalmente", linha: null };
    }

    this.itens.set(chave, linha);
    return { ok: true, acao: "Quantidade reduzida", linha: linha };
  }

  calcularTotal() {
    let total = 0;

    for (let [nome, linha] of this.itens.entries()) {
      const produto = linha.produto;
      const quantidade = linha.quantidade;

      const subtotal = produto.preco * quantidade;
      total += subtotal;
    }
    return total;
  }
}

const produtoSelect = document.getElementById("produto-select");
const listaProdutos = document.getElementById("lista-produtos");
const produtoQtdCart = document.getElementById("produto-qtd-cart");
const btnAddCarrinho = document.getElementById("btn-add-carrinho");
const avisoCarrinho = document.getElementById("aviso-carrinho")
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

const carrinho = new Carrinho();

function renderizarProdutos() {
  listaProdutos.innerHTML = "";

  produtos.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.nome} — R$ ${p.preco} — Estoque: ${p.quantidade}`;
    listaProdutos.appendChild(li);
  });
}

function atualizarCarrinho() {
  listaCarrinho.innerHTML = ""

  carrinho.itens.forEach((linha) => {
    const li = document.createElement("li")
    li.textContent = `${linha.produto.nome} — ${linha.quantidade}`

    const btnRemoverCarrinho = document.createElement("button")
    btnRemoverCarrinho.textContent = "-"
    btnRemoverCarrinho.style.color = "white"

    btnRemoverCarrinho.addEventListener("click", () => {
      try {
        carrinho.remover(linha.produto, 1)
        atualizarCarrinho()
        renderizarProdutos()
      } catch (e) {
        avisoCarrinho.textContent = e.message
        avisoCarrinho.style.color = e.message
      }
    })

    li.appendChild(btnRemoverCarrinho)
    listaCarrinho.appendChild(li)
  })

  const total = carrinho.calcularTotal()
  totalCarrinho.textContent = `R$: ${total.toFixed(2)}`
}

function carregarSelectProdutos() {
  produtoSelect.innerHTML = "";

  produtos.forEach((p, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${p.nome} - R$: ${p.preco}`;
    produtoSelect.appendChild(option);
  });
}

btnAddCarrinho.addEventListener("click", () => {
  const indice = Number(produtoSelect.value);
  const produto = produtos[indice];
  const quantidade = Number(produtoQtdCart.value);

  try {
    carrinho.adicionar(produto, quantidade)
    atualizarCarrinho()
    renderizarProdutos()
  } catch (e) {
    avisoCarrinho.textContent = e.message
    avisoCarrinho.style.color = "red"
  }
});

carregarSelectProdutos();
renderizarProdutos();
