const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. ¿Donde le gustaria vivir a Joseda?",
    respuestas: {
      a: "Grieta del invocador",
      b: "Isekai",
      c: "Sanse",
      d: "Las Vegas"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "2. ¿Cuantos dias vamos a Italia?",
    respuestas: {
      a: "7",
      b: "8",
      c: "9",
      d: "10"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta:
      "3. ¿Cuantas colas tiene Naruto en la pelea contra Orochimaru en el Puente del cielo y la Tierra?",
    respuestas: {
      a: "1",
      b: "2",
      c: "4",
      d: "6"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "4. ¿De que restaurante es mas probable que salgas rodando?",
    respuestas: {
      a: "Tierra",
      b: "McDonalds",
      c: "Chino",
      d: "Fast & Good"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta:
      "5. Te has quedado calvo, ¿cual es probablemente tu juego favorito?",
    respuestas: {
      a: "Persona",
      b: "Zelda",
      c: "Genshin Impact",
      d: "Pokemon"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "6. ¿Cuantos emuTronez es capaz de levantar Asel?",
    respuestas: {
      a: "Solo 1 :(",
      b: "2",
      c: "3 (Al menos)",
      d: "100"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "7. ¿Donde está la casa de Noe, la amiga de Alex?",
    respuestas: {
      a: "Badalona",
      b: "Matadepera",
      c: "Terrasa",
      d: "Sant Boi de Llobregat"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "8. ¿Quien es la emperatriz de Ixaocan?",
    respuestas: {
      a: "Nidalee",
      b: "Qiyana",
      c: "Karma",
      d: "Cassiopeia"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "9. ¿Quien tiene el record de carreras abandonadas?",
    respuestas: {
      a: "Félix",
      b: "emuTronez",
      c: "Alex",
      d: "Adri"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "10. ¿Quien tiene mas éxito con las minitas?",
    respuestas: {
      a: "Alex",
      b: "emuTronez",
      c: "Adri",
      d: "Joseda"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "11. ¿Cual es el segundo mejor campeón de emuTronez?",
    respuestas: {
      a: "Vladimir",
      b: "Tahm Kench",
      c: "Fizz",
      d: "Yone"
    },
    respuestaCorrecta: "d"
  },
  {
    pregunta: "12. [...], por tu culo se me mete",
    respuestas: {
      a: "3",
      b: "7",
      c: "9",
      d: "13"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta:
      "13. ¿Cuál es el campeón con el que es mas probable que Joseda se estampe?",
    respuestas: {
      a: "Sejuani",
      b: "Kayn",
      c: "Kha'zix",
      d: "Ekko"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta:
      "?aedi adavlam atse odis árbah neiuq eD¿ !oditrevni odis ah otxet lE¡ !on hO¡ .41",
    respuestas: {
      a: "zenorTume",
      b: "aruaL",
      c: "oiraM",
      d: "udE"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "15. ¿Quien tiene mas probabilidades de acabar en el paro?",
    respuestas: {
      a: "Mario",
      b: "Laura",
      c: "Asel",
      d: "Alex"
    },
    respuestaCorrecta: "b"
  }
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (const letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `
        <div style="display: flex">
          <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
          <label>${preguntaActual.respuestas[letraRespuesta]}</label>
          </div>
        <label>
        `
      );
    }
    preguntasYrespuestas.push(
      `<div class= "pregunta">
      <div class="cuestion">${preguntaActual.pregunta}</div>
      <div class="respuestas"> ${respuestas.join("")} </div></div>`
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  if (respuestasCorrectas < 15)
    resultadoTest.innerHTML =
      "Solo has acertado " +
      respuestasCorrectas +
      " preguntas de " +
      preguntas.length +
      ", seguro que puedes hacerlo mejor.";
  else
    resultadoTest.innerHTML =
      "¡Enhorabuena, has acertado todas las preguntas!" +
      "Ahora, apunta la primera letra/número de cada respuesta correcta.";
}

botonRes.addEventListener("click", mostrarResultado);
