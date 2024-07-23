const d = document;
export default function generarCards() {
// Definir un objeto con los datos de las cards
const cardsData = [
    {
        imgSrc: "./assets/svg/file-type-html.svg",
        imgAlt: "HTML icon",
        title: "HTML<br>✅",
        class: "html"
    },
    {
        imgSrc: "./assets/svg/css-color.svg",
        imgAlt: "CSS icon",
        title: "CSS<br>✅",
        class: "css"
    },
    {
        imgSrc: "./assets/svg/sass.svg",
        imgAlt: "Sas icon",
        title: "Sas<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/styledcomponents.svg",
        imgAlt: "Styled components icon",
        title: "Styled<br>Components<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/javascript-fill.svg",
        imgAlt: "Javascript icon",
        title: "Javascript<br>✅",
        class: "javascript"
    },
    {
        imgSrc: "./assets/svg/Python.svg,
        imgAlt: "Python icon",
        title: "python<br>✅",
        class: "Python"
    },
    {
        imgSrc: "./assets/svg/NumPy.svg",
        imgAlt: "NumPy icon",
        title: "NumPy<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/Pandas.svg",
        imgAlt: "Pandas icon",
        title: "Pandas<br>✅",
        class: "Pandas"
    },
    {
        imgSrc: "./assets/svg/Microsoft_Excel.svg",
        imgAlt: "Microsoft Excel icon",
        title: "Microsoft Excel.js<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/power-bi-logo.svg",
        imgAlt: "Power bi icon",
        title: "Power bi<br>✅",
        class: "Power bi"
    },
    {
        imgSrc: "./assets/svg/seaborn-seeklogo.svg",
        imgAlt: "Seaborn icon",
        title: "Seaborn<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/mysql.svg",
        imgAlt: "MySql icon",
        title: "MySql<br> Server<br>✅",
        class: ""
    },
    
];

// Obtener el contenedor de las cards
const cardsContainer = d.querySelector('.skills__cajas');

// Crear las cards dinámicamente utilizando template strings
for (const data of cardsData) {
    const cardHTML = `
        <div class="skills__caja caja__dark">
            <div class="img">
                <img class="skills__icono skills__icono__dark
                ${data.class}"
                src="${data.imgSrc}"
                alt="${data.imgAlt}">
            </div>
            <div class="skills__texto">
                <p class="text head titulo__dark">
                    ${data.title}
                </p>
            </div>
        </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
}
}


generarCards();
