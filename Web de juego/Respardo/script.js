// script.js - Lógica del juego de preguntas para Jenny (Versión Final sin Redundancia)

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM ---
    const splashScreen = document.getElementById('splash-screen');
    const gameScreen = document.getElementById('game-screen');
    const levelSpecialScreen = document.getElementById('level-special-question-screen');
    const endScreen = document.getElementById('end-game-screen');

    const btnIniciar = document.getElementById('btn-iniciar');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    const nivelInfo = document.getElementById('nivel-info');
    const progresoNivel = document.getElementById('progreso-nivel');
    const preguntaEl = document.getElementById('pregunta');
    const opcionesEl = document.getElementById('opciones');
    
    const preguntaEspecialEl = document.getElementById('pregunta-especial');
    const opcionesEspecialEl = document.getElementById('opciones-especial');

    const puntuacionFinalEl = document.getElementById('puntuacion-final');
    const puntuacionTotalEl = document.getElementById('puntuacion-total');

    // --- DATOS DEL JUEGO ---
    const niveles = [
        { // Nivel 1
            preguntas: [
                { pregunta: "¿Cuál es mi color favorito?", opciones: ["Azul", "Negro", "Rojo", "Verde"], respuesta: "Negro" },
                { pregunta: "¿Comida que no me gusta?", opciones: ["Lentejas", "Brocoli", "higado", "Cebolla"], respuesta: "higado" },
                { pregunta: "¿Cuál es nuestro sitio icónico?", opciones: ["El cine", "El parque", "La vereda", "La casa"], respuesta: "La casa" },
                { pregunta: "¿Qué prefiero?", opciones: ["Dulce", "Salado", "Ácido", "Amargo"], respuesta: "Ácido" },
                { pregunta: "¿Qué me gusta más?", opciones: ["El frío", "El calor", "Ambos", "Ninguno"], respuesta: "El frío" },
                { pregunta: "¿Qué pasó el 16/01/25?", opciones: ["Todo comenzó", "Nos conocimos", "Cambio de gobierno", "El fin del mundo"], respuesta: "Todo comenzó", especial: true },
            ]
        },
        { // Nivel 2
            preguntas: [
                { pregunta: "¿Que libro nos encató?", opciones: ["Zonas erróneas", "Dopamina", "Deja de ser tú", "El camino de los sabios"], respuesta: "Zonas erróneas" },
                { pregunta: "¿Que pasa cuando nos miramos fijamente?", opciones: ["Lloramos", "Nos reimos", "No pasa nada", "Se dilatan nuentras pupilas"], respuesta: "Se dilatan nuentras pupilas" },
                { pregunta: "¿Qué animal me da más miedo?", opciones: ["Serpiente", "Araña", "Ninguno", "Ratón"], respuesta: "Ninguno" },
                { pregunta: "¿Qué hago en mi tiempo libre?", opciones: ["Jugar videojuegos", "Ver series", "leer", "Todas las anteriores"], respuesta: "Todas las anteriores" },
                { pregunta: "¿Cuál es mi postre favorito?", opciones: ["Helado", "Torta de chocolate", "Cheesecake", "Tú"], respuesta: "Tú" },
                { pregunta: "¿Cuál es el lugar donde el mundo se paralizó aunque estábamos de cabeza?", opciones: ["La vereda", "El cine", "El carro", "El Martillo"], respuesta: "El Martillo", especial: true },
            ]
        },
        { // Nivel 3
            preguntas: [+
                { pregunta: "¿Qué tipo de música prefiero?", opciones: ["Rock", "Pop", "Reggaetón", "Hip-hop/rap"], respuesta: "Hip-hop/rap" },
                { pregunta: "¿Cuál es mi serie favorita?", opciones: ["The Office", "Breaking Bad", "Game of Thrones", "Stranger Things"], respuesta: "Breaking Bad" },
                { pregunta: "¿A dónde me gustaría viajar contigo?", opciones: ["Japón", "París", "Italia", "A cualquier lugar"], respuesta: "A cualquier lugar" },
                { pregunta: "¿Qué me enamora más de ti?", opciones: ["Tu sonrisa", "Tu inteligencia", "Tu forma de ser", "Todo"], respuesta: "Todo" },
                { pregunta: "¿Qué prefiero en una cita?", opciones: ["Cena romántica", "Noche de películas", "Aventura al aire libre", "Concierto"], respuesta: "Noche de películas" },
                { pregunta: "¿Qué pasó en el carro que es inolvidable?", opciones: ["Cantamos a gritos", "Nos perdimos", "Llovió mucho", "Tres Rapidos Uff..."], respuesta: "Tres Rapidos Uff...", especial: true },
            ]
        },
        { // Nivel 4
            preguntas: [
                { pregunta: "¿Cuál es mi mayor sueño?", opciones: ["Viajar por el mundo", "Tener una familia", "Ser exitoso", "Tener libertad finaciaera"], respuesta: "Tener libertad finaciaera" },
                { pregunta: "¿Qué superpoder me gustaría tener?", opciones: ["Volar", "Invisibilidad", "Teletransportación", "Leer mentes"], respuesta: "Leer mentes" },
                { pregunta: "¿Qué es lo que más valoro en una persona?", opciones: ["La honestidad", "La lealtad", "El humor", "La inteligencia"], respuesta: "La lealtad" },
                { pregunta: "¿Cuál es mi estación del año favorita?", opciones: ["Verano", "Otoño", "Invierno", "Primavera"], respuesta: "Invierno" },
                { pregunta: "¿Qué me relaja más?", opciones: ["Escuchar música", "Leer un libro", "Jugar", "Boxear"], respuesta: "Boxear" },
                { pregunta: "¿Qué es lo que más nos une?", opciones: ["El amor", "La confianza", "Las risas", "Hablar el mismo idioma"], respuesta: "Hablar el mismo idioma", especial: true },
            ]
        },
        { // Nivel 5
            preguntas: [
                { pregunta: "¿Cómo me describirías en una palabra?", opciones: ["Divertido", "Cariñoso", "Inteligente", "Todas las anteriores"], respuesta: "Todas las anteriores" },
                { pregunta: "¿Qué canción te dediqué?", opciones: ["Querer Querernos - Cansebero", "Tu jardin con enanitos - Melendi", "Propuesta indecente - Romeo santos", "Todas"], respuesta: "Todas" },
                { pregunta: "¿Cuál es nuestro apodo secreto?", opciones: ["Mi amor", "Mi vida", "Bebé", "Osito"], respuesta: "Osito" },
                { pregunta: "¿Qué es lo que más nos caracteriza?", opciones: ["La comunicación", "El crecimiento mutuo", "La pasión", "Que somos un equipo"], respuesta: "El crecimiento mutuo" },
                { pregunta: "¿Si pudieras estar donde quieres donde estarias?", opciones: ["En la playa", "Viajando por le mundo", "Ser libre", "Todos los anteriores"], respuesta: "Todos los anteriores" },
                { pregunta: "¿Cuál de estas preguntas es icónica para nosotros?", opciones: ["¿cual fue tu momento favorito del dia?", "¿si pudieras?", "¿1+1?", "¿Confías en mí?"], respuesta: "¿cual fue tu momento favorito del dia?", especial: true },
            ]
        }
    ];

    // --- ESTADO DEL JUEGO ---
    let nivelActual = 0;
    let preguntaActual = 0;
    let puntuacionTotal = 0;

    // --- FUNCIONES DEL JUEGO ---

    const mostrarPantalla = (pantalla) => {
        [splashScreen, gameScreen, levelSpecialScreen, endScreen].forEach(p => p.classList.add('hidden'));
        pantalla.classList.remove('hidden');
    };

    const iniciarJuego = () => {
        nivelActual = 0;
        preguntaActual = 0;
        puntuacionTotal = 0;
        cargarNivel();
        mostrarPantalla(gameScreen);
    };

    const cargarNivel = () => {
        puntuacionTotalEl.textContent = `Puntuación Total: ${puntuacionTotal}`;
        nivelInfo.textContent = `Nivel ${nivelActual + 1}`;
        mostrarPregunta();
    };

    const mostrarPregunta = () => {
        const preguntaData = niveles[nivelActual].preguntas[preguntaActual];
        
        // El progreso se cuenta sobre 5 preguntas normales
        progresoNivel.textContent = `Pregunta ${preguntaActual + 1} de 5`;
        preguntaEl.textContent = preguntaData.pregunta;
        
        opcionesEl.innerHTML = '';
        preguntaData.opciones.forEach(opcion => {
            const button = document.createElement('button');
            button.textContent = opcion;
            button.addEventListener('click', () => manejarRespuesta(button, opcion, preguntaData.respuesta));
            opcionesEl.appendChild(button);
        });
    };

    const manejarRespuesta = (btnSeleccionado, opcion, respuestaCorrecta) => {
        const esCorrecta = opcion === respuestaCorrecta;
        
        if (esCorrecta) {
            puntuacionTotal += 10;
            btnSeleccionado.classList.add('correcta');
        } else {
            btnSeleccionado.classList.add('incorrecta');
        }
        
        puntuacionTotalEl.textContent = `Puntuación Total: ${puntuacionTotal}`;

        // Deshabilitar todos los botones
        Array.from(opcionesEl.children).forEach(btn => btn.disabled = true);

        setTimeout(() => {
            // Si es la pregunta 5 (índice 4), la siguiente es la especial
            if (preguntaActual === niveles[nivelActual].preguntas.length - 2) {
                preguntaActual++; // Avanzamos el índice a la pregunta especial
                mostrarPantallaEspecial();
            } else {
                preguntaActual++;
                mostrarPregunta();
            }
        }, 1200);
    };

    const mostrarPantallaEspecial = () => {
        const preguntaData = niveles[nivelActual].preguntas[preguntaActual]; // La última pregunta (especial)
        
        preguntaEspecialEl.textContent = preguntaData.pregunta;
        opcionesEspecialEl.innerHTML = '';

        preguntaData.opciones.forEach(opcion => {
            const button = document.createElement('button');
            button.textContent = opcion;
            button.addEventListener('click', () => manejarRespuestaEspecial(button, opcion, preguntaData.respuesta));
            opcionesEspecialEl.appendChild(button);
        });

        mostrarPantalla(levelSpecialScreen);
    };

    const manejarRespuestaEspecial = (btnSeleccionado, opcion, respuestaCorrecta) => {
        const esCorrecta = opcion === respuestaCorrecta;

        if (esCorrecta) {
            puntuacionTotal += 20; // Puntuación extra por pregunta especial
            btnSeleccionado.classList.add('correcta');
        } else {
            btnSeleccionado.classList.add('incorrecta');
        }

        puntuacionTotalEl.textContent = `Puntuación Total: ${puntuacionTotal}`;
        Array.from(opcionesEspecialEl.children).forEach(btn => btn.disabled = true);

        setTimeout(() => {
            nivelActual++;
            preguntaActual = 0;

            if (nivelActual < niveles.length) {
                cargarNivel();
                mostrarPantalla(gameScreen);
            } else {
                mostrarResultadoFinal();
            }
        }, 1500);
    };

    const mostrarResultadoFinal = () => {
        puntuacionFinalEl.textContent = `Tu puntuación final es: ${puntuacionTotal}`;
        mostrarPantalla(endScreen);
    };

    // --- EVENT LISTENERS ---
    btnIniciar.addEventListener('click', iniciarJuego);
    btnReiniciar.addEventListener('click', iniciarJuego);

    // Iniciar en la pantalla de bienvenida
    mostrarPantalla(splashScreen);
});