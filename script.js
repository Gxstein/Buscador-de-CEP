const form = document.querySelector("#cep-form");
const cepInput = document.querySelector("#cep-input");
const submitButton = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-button");
const statusMessage = document.querySelector("#status-message");
const resultBadge = document.querySelector("#result-badge");

const fields = {
  logradouro: document.querySelector("#logradouro"),
  bairro: document.querySelector("#bairro"),
  localidade: document.querySelector("#localidade"),
  uf: document.querySelector("#uf"),
};

const EMPTY_FIELD_VALUE = "-";

function onlyDigits(value) {
  return value.replace(/\D/g, "");
}

function formatCep(value) {
  const digits = onlyDigits(value).slice(0, 8);

  if (digits.length <= 5) {
    return digits;
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function updateStatus(message, type = "default") {
  statusMessage.textContent = message;
  statusMessage.classList.remove("is-success", "is-error");
  resultBadge.classList.remove("is-success", "is-error", "is-loading");

  if (type === "success") {
    statusMessage.classList.add("is-success");
    resultBadge.classList.add("is-success");
    resultBadge.textContent = "Consulta concluida";
    return;
  }

  if (type === "error") {
    statusMessage.classList.add("is-error");
    resultBadge.classList.add("is-error");
    resultBadge.textContent = "Falha na consulta";
    return;
  }

  if (type === "loading") {
    resultBadge.classList.add("is-loading");
    resultBadge.textContent = "Buscando";
    return;
  }

  resultBadge.textContent = "Aguardando consulta";
}

function resetAddress() {
  Object.values(fields).forEach((field) => {
    field.textContent = EMPTY_FIELD_VALUE;
  });
}

function fillAddress(data) {
  fields.logradouro.textContent = data.logradouro || "Nao informado";
  fields.bairro.textContent = data.bairro || "Nao informado";
  fields.localidade.textContent = data.localidade || "Nao informado";
  fields.uf.textContent = data.uf || "Nao informado";
}

async function fetchAddressByCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) {
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return response.json();
}

async function handleSubmit(event) {
  event.preventDefault();

  const cep = onlyDigits(cepInput.value);

  if (cep.length !== 8) {
    resetAddress();
    updateStatus("Digite um CEP valido com 8 numeros.", "error");
    cepInput.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Buscando...";
  updateStatus("Consultando dados na ViaCEP...", "loading");

  try {
    const data = await fetchAddressByCep(cep);

    if (data.erro) {
      resetAddress();
      updateStatus("CEP nao encontrado. Confira os numeros informados.", "error");
      return;
    }

    fillAddress(data);
    updateStatus("Endereco localizado com sucesso.", "success");
  } catch (error) {
    resetAddress();
    updateStatus(
      "Nao foi possivel realizar a consulta no momento. Tente novamente.",
      "error"
    );
    console.error("Erro ao consultar o CEP:", error);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Buscar CEP";
  }
}

function handleInput(event) {
  event.target.value = formatCep(event.target.value);
}

function handleClear() {
  form.reset();
  resetAddress();
  updateStatus("Informe um CEP para iniciar a consulta.");
  cepInput.focus();
}

cepInput.addEventListener("input", handleInput);
clearButton.addEventListener("click", handleClear);
form.addEventListener("submit", handleSubmit);

resetAddress();
