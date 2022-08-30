/* ============================ Typing Animation ============================ */

var typed = new Typed(".typing", {
    strings:["", "Diseñador web", "Desarrollador Front-End", "Desarrollador web"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ============================ Aside ============================ */

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

      for(let i=0; i < totalNavList; i++){
        
        const a = navList[i].querySelector("a");
        a.addEventListener("click", () => {

            removeBackSection();

            for(let i=0; i < totalSection; i++){
                allSection[i].classList.remove("back-section");
            }

            for(let j=0; j < totalNavList; j++){

                if(navList[j].querySelector("a").classList.contains("active")){

                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            a.classList.add("active");
            showSection(a);

            if(window.innerWidth < 1200){
                asideSectionToggleBtn();
            }
        })
      }

      function removeBackSection(){

        for(let i=0; i < totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
      }

      function addBackSection(num){

        allSection[num].classList.add("back-section");
      }

      function showSection(element){

        for(let i=0; i < totalSection; i++){
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
      }

      function updateNav(element){

        for(let i=0; i < totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];

            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
      } 

      document.querySelector(".hire-me").addEventListener("click", () => {
        const sectionIndex = document.querySelector(".hire-me").getAttribute("data-section-index");
        showSection(document.querySelector(".hire-me"));
        updateNav(document.querySelector(".hire-me"));
        removeBackSection();
        addBackSection(sectionIndex);
      });
      
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");

            navTogglerBtn.addEventListener("click", () => {

                asideSectionToggleBtn();
            });

            function asideSectionToggleBtn(){

                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");

                for(let i=0; i < totalSection; i++){
                    allSection[i].classList.toggle("open");
                }
            }