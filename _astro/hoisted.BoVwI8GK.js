import"./ToggleDarkBtn.astro_astro_type_script_index_0_lang.DAnGLcmk.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./Header.astro_astro_type_script_index_0_lang.CD8oHzLf.js";import"./DarkBg.astro_astro_type_script_index_0_lang.Co4myl3N.js";const s=[{language:"javascript",src:"/svg/vscode-img/javascript.svg",icon:"skill-icons:javascript"},{language:"css",src:"/svg/vscode-img/css.svg",icon:"skill-icons:css"},{language:"cpp",src:"/svg/vscode-img/cpp.svg",icon:"skill-icons:cpp"},{language:"html",src:"/svg/vscode-img/html.svg",icon:"skill-icons:html"},{language:"go",src:"/svg/vscode-img/go.svg",icon:"devicon:go-wordmark"},{language:"java",src:"/svg/vscode-img//java.svg",icon:"skill-icons:java-dark"},{language:"python",src:"/svg/vscode-img/python.svg",icon:"logos:python"}],e=document.querySelector(".code__container"),a=document.querySelector(".caja_icon"),g=s.map(c=>`
        <div class="icon__container" data-language="${c.language}">
        <iconify-icon class="icon__lang" icon=${c.icon}></iconify-icon>
        </div>
    `).join("");a.innerHTML=g;i("javascript");const t=document.querySelectorAll(".icon__container");t.forEach(c=>{c.addEventListener("click",()=>{const n=c.dataset.language;i(n)})});function i(c){const n=s.find(o=>o.language===c);if(n){const o=`
            <div class="theme-preview">
                <img loading="eager" src="${n.src}" alt="${c}">
            </div>
        `;e.innerHTML=o}else console.error(`No se encontraron datos para el lenguaje ${c}`)}
