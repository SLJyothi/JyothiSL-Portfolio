import"./ToggleDarkBtn.astro_astro_type_script_index_0_lang.DAnGLcmk.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./Header.astro_astro_type_script_index_0_lang.CD8oHzLf.js";const r=[{imgSrc:"../img/portfolio_img/srock-paper-scissors.jpg",titulo:"rock paper scissors",skills:["JavaScript","CSS"],descripcion:"Rules If the player wins, they gain 1 point. If the computer wins, the player loses one point.",demoURL:"https://rock-paper-scissors-jyothisl.netlify.app/",repoURL:"https://github.com/SLJyothi/rock-paper-scissors",anim:"fade-right"},{imgSrc:"../img/portfolio_img/character maker.png",titulo:"Character Maker",skills:["React","JavaScript","CSS"],descripcion:" Create with love.",demoURL:"https://character-maker-fun.netlify.app",repoURL:"https://github.com/SLJyothi/Character-maker",anim:"fade-up"},{imgSrc:"../img/portfolio_img//My Portfolio.png",titulo:"My Portfolio",skills:["React","CSS"],descripcion:"My Portfolio.",demoURL:"https://sljyothi.github.io/JyothiSL-Portfolio/",repoURL:"https://github.com/SLJyothi/JyothiSL-Portfolio",anim:"fade-left"},{imgSrc:"../img/portfolio_img//Chun Data Analysis .png",titulo:"Chun Data Analysis",skills:["Astro","React","JavaScript"],descripcion:"Just the repository of my portfolio on GitHub.",repoURL:"https://github.com/SLJyothi/Churn-Data-Analysis",anim:"fade-right"}],s={JavaScript:"skill-icons:javascript",React:"skill-icons:react-dark",Astro:"skill-icons:astro",CSS:"skill-icons:css",Sass:"skill-icons:sass",StyledComponents:"skill-icons:styledcomponents",Bootstrap:"devicon:bootstrap"},p=document.querySelectorAll("[data-skill]"),l=document.querySelector(".cards__container"),_=document.querySelector("[data-All]");function e(){const t=r.map(o=>`
        <div class="portafolio__tarjeta" >
            <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                <div class="img__container">
                    <img
                        class="portafolio__img"
                        src="${o.imgSrc}"
                        alt="${o.titulo}"
                    />
                </div>
                <div class="container__info">
                    <h3 class="portafolio__subtitulo titulo__dark">
                        ${o.titulo}
                    </h3>
                    <div class="skills__used">
                        ${o.skills.map(a=>`
                            <div class="tecnology" >
                                <iconify-icon
                                    icon="${s[a]||""}"
                                    width="22"
                                />
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            <div class="portafolio__cara faceB  caja__dark__portafolio">
                <p class="portafolio__descripcion titulo__dark">
                    ${o.descripcion}
                </p>
                <div class="portafolio__botobnes">
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.demoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="demo">
                            View Demo
                        </span>
                    </a>
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.repoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="repo">
                            View Repo
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `).join("");l.innerHTML=t}e();p.forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-skill"),c=r.filter(i=>i.skills.includes(o)).map(i=>`
          <div class="portafolio__tarjeta" >
              <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                  <div class="img__container">
                      <img
                          class="portafolio__img"
                          src="${i.imgSrc}"
                          alt="${i.titulo}"
                      />
                  </div>
                  <div class="container__info">
                      <h3 class="portafolio__subtitulo titulo__dark">
                          ${i.titulo}
                      </h3>
                      <div class="skills__used">
                          ${i.skills.map(n=>`
                              <div class="tecnology" >
                                  <iconify-icon
                                      icon="${s[n]||""}"
                                      width="22"
                                  />
                              </div>
                          `).join("")}
                      </div>
                  </div>
              </div>
              <div class="portafolio__cara faceB  caja__dark__portafolio">
                  <p class="portafolio__descripcion titulo__dark">
                      ${i.descripcion}
                  </p>
                  <div class="portafolio__botobnes">
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.demoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="demo">
                              View Demo
                          </span>
                      </a>
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.repoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="repo">
                              View Repo
                          </span>
                      </a>
                  </div>
              </div>
          </div>
      `).join("");l.innerHTML=c})});_.addEventListener("click",()=>{e()});
