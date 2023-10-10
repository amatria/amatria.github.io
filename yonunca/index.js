const playButton = document.getElementById("play");
const questionParagraph = document.getElementById("question");
const url = "https://api.amatria.dev/yonunca/preguntas";

var questions = [];

function error(msg) {
  window.alert(msg)

  playButton.textContent = "Reintentar";
  playButton.disabled = false;
}

function displayNextQuestion() {
  questionParagraph.innerHTML = questions.pop();
}

function loadQuestions() {
  const xhr = new XMLHttpRequest();

  playButton.textContent = "Cargando...";
  playButton.disabled = true;

  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (this.status == 200) {
      playButton.textContent = "Siguiente"
      playButton.disabled = false;

      questions = this.response;
      displayNextQuestion();
    }
    else {
      error("Error del servidor. Prueba más tarde.");
    }
  }
  xhr.onerror = function () {
    error("Error de conexión. ¿Estás conectado a internet?");
  };

  xhr.send();
}

function playClicked() {
  if (!questions.length) {
    loadQuestions();
    return;
  }
  displayNextQuestion();
}

playButton.addEventListener("click", playClicked, false);
