const questions = [
    {
        question: "¿Cuál de las siguientes bases de datos ha sido compatible con PHP casi desde el principio?",
        answers: ["Oracle Database", "SQL", "MySQL", "SQL+"],
        correct: 2
    },
    {
        question: "La extensión de MySQL actualizada lanzada con PHP 5 generalmente se conoce como....",
        answers: ["mysql", "MYSQL", "mysqli", "mysqly"],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes líneas debe descomentarse o agregarse en el archivo php.ini para habilitar la extensión mysqli?",
        answers: ["extension mysql.dll", "extension=php_mysqli.dll", "extension=php_mysqli.dl", "extension-mysqlidi"],
        correct: 1
    },
    {
        question: "¿Cuál de los siguientes tipos de datos no es soportado por MySQL?",
        answers: ["INTEGER", "VARCHAR", "BLOB", "ARRAY"],
        correct: 3
    },
    {
        question: "¿Cuál de las siguientes funciones en PHP se usa para abrir una conexión a MySQL?",
        answers: ["mysql_open()", "mysqli_connect()", "mysql_connect()", "mysqli_open()"],
        correct: 1
    },
    {
        question: "¿Cuál es la extensión de archivo de un documento HTML?",
        answers: [".htm", ".html", ".php", ".xml"],
        correct: 1
    },
    {
        question: "¿Qué significa CSS?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 0
    },
    {
        question: "¿Cuál es el lenguaje de programación principal que se usa para crear páginas web dinámicas?",
        answers: ["Python", "JavaScript", "Ruby", "C++"],
        correct: 1
    },
    {
        question: "¿Cuál de las siguientes opciones es una biblioteca de JavaScript?",
        answers: ["React", "Laravel", "Django", "Flask"],
        correct: 0
    },
    {
        question: "¿Qué es una API?",
        answers: ["Application Programming Interface", "Applied Protocol Interface", "Application Proxy Interface", "Advanced Programming Interface"],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes opciones es un framework de backend?",
        answers: ["Angular", "Vue.js", "Laravel", "React"],
        correct: 2
    },
    {
        question: "¿Qué protocolo se utiliza principalmente para la transferencia de páginas web?",
        answers: ["FTP", "SMTP", "HTTP", "SNMP"],
        correct: 2
    },
    {
        question: "¿Cuál es la finalidad de usar Bootstrap en el desarrollo web?",
        answers: ["Desarrollo de bases de datos", "Desarrollo de aplicaciones de escritorio", "Desarrollo de interfaces web responsivas", "Desarrollo de videojuegos"],
        correct: 2
    },
    {
        question: "¿Qué método de HTTP se utiliza para enviar datos al servidor?",
        answers: ["GET", "POST", "DELETE", "PUT"],
        correct: 1
    },
    {
        question: "¿Cuál es el propósito del atributo 'alt' en la etiqueta <img>?",
        answers: ["Define el tamaño de la imagen", "Proporciona texto alternativo si la imagen no se puede mostrar", "Establece la posición de la imagen", "Enlaza la imagen a una URL"],
        correct: 1
    },
    {
        question: "¿Cuál es el significado de HTML?",
        answers: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "None of these"],
        correct: 0
    },
    {
        question: "¿Qué es el DOM en JavaScript?",
        answers: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Data Orientation Model"],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes es una herramienta de control de versiones?",
        answers: ["Git", "Docker", "Composer", "Webpack"],
        correct: 0
    },
    {
        question: "¿Qué es AJAX?",
        answers: ["A JavaScript library", "An HTML extension", "A web development technique", "A programming language"],
        correct: 2
    },
    {
        question: "¿Cuál de las siguientes opciones es un preprocesador CSS?",
        answers: ["Sass", "Less", "Stylus", "Todas las anteriores"],
        correct: 3
    },
    {
        question: "¿Qué es Node.js?",
        answers: ["Un framework frontend", "Un entorno de ejecución de JavaScript", "Una base de datos", "Un servidor web"],
        correct: 1
    },
    {
        question: "¿Qué significa JSON?",
        answers: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Object Native", "Java Source Object Native"],
        correct: 0
    },
    {
        question: "¿Qué es una SPA (Single Page Application)?",
        answers: ["Una aplicación que se ejecuta en una sola página web", "Una aplicación móvil", "Un framework de backend", "Un servidor web"],
        correct: 0
    },
    {
        question: "¿Qué es un ORM en el contexto del desarrollo web?",
        answers: ["Object Relational Mapping", "Object Real Model", "Order Relational Model", "Object Router Mapping"],
        correct: 0
    },
    {
        question: "¿Qué lenguaje se utiliza para definir la estructura de una página web?",
        answers: ["JavaScript", "CSS", "HTML", "Python"],
        correct: 2
    },
    {
        question: "¿Qué herramienta se utiliza para la gestión de dependencias en un proyecto JavaScript?",
        answers: ["npm", "pip", "composer", "gem"],
        correct: 0
    },
    {
        question: "¿Qué es TypeScript?",
        answers: ["Un lenguaje de programación basado en JavaScript", "Una biblioteca de CSS", "Un framework de Python", "Un servidor web"],
        correct: 0
    },
    {
        question: "¿Qué significa SEO en el contexto de desarrollo web?",
        answers: ["Search Engine Optimization", "Search Engine Operation", "Simple Engine Optimization", "Search Easy Optimization"],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes opciones es un servidor web?",
        answers: ["Apache", "MongoDB", "Express", "Node.js"],
        correct: 0
    },
    {
        question: "¿Qué significa REST?",
        answers: ["Representational State Transfer", "Resource State Transfer", "Resource Stat Transfer", "Representational State Transition"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const examenContainer = document.getElementById('examen');
const resultadoContainer = document.getElementById('resultado');

function iniciarExamen() {
    document.querySelector('.botominicial').style.display = 'none';
    document.querySelector('.cuadrodeinformacion').style.display = 'none';
    document.querySelector('.lista').style.display = 'none';
    document.querySelector('.botones').style.display = 'none';
    examenContainer.style.display = 'block';
    startQuiz();
}

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div>${question.question}</div>
        <div>
            ${question.answers.map((answer, index) => `
                <button onclick="selectAnswer(${index})">${answer}</button>
            `).join('')}
        </div>
        <div id="timer">${timeLeft} segundos restantes</div>
    `;
}

function selectAnswer(index) {
    clearInterval(timer);
    const question = questions[currentQuestionIndex];
    const buttons = quizContainer.querySelectorAll('button');
    if (index === question.correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        if (index !== -1) { // si no es debido a la cuenta regresiva
            buttons[index].classList.add('incorrect');
        }
        buttons[question.correct].classList.add('correct');
    }
    buttons.forEach(button => button.disabled = true);
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        timeLeft = 15;
        nextBtn.style.display = 'none';
        startTimer();
        showQuestion();
    } else {
        showResult();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `${timeLeft} segundos restantes`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1);  // -1 indica que el tiempo se agotó
        }
    }, 1000);
}

function showResult() {
    examenContainer.style.display = 'none';
    let message;
    if (score >= 8) {
        message = `Felicitaciones 🎉, conseguiste ${score} de 10 aciertos.`;
    } else if (score >= 5) {
        message = `¡Que bien 😎, conseguiste ${score} de 10 aciertos!`;
    } else if (score >= 1) {
        message = `Hay que estudiar 😅. Conseguiste ${score} de 10 aciertos.`;
    } else {
        message = `Lo siento 😔, conseguiste ${score} de 10 aciertos.`;
    }
    resultContainer.innerHTML = message;
    resultadoContainer.style.display = 'block';
}
