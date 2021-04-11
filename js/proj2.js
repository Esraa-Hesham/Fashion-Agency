//Random Background Option
let backgroundOption = true;
//varibale to control  the background interval
let backgroundinterval;
//toglle spin class on icon
document.querySelector(".toggle-setting .fa-cog").onclick = function () {
    this.classList.toggle("fa-spin");
    //
    listSetting = document.querySelector(".setting-box");
    listSetting.classList.toggle("open");
}
//switch variables
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set color on local storge
        localStorage.setItem("color-option", e.target.dataset.color);
        handelActive(e);
    });


});
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);


    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        }

    });
}
//switch background option
const colorback = document.querySelectorAll(".randombackground span");
colorback.forEach(span => {
    span.addEventListener("click", (e) => {

        handelActive(e);
        if (e.target.dataset.background === 'yes') {
            console.log(e.target.dataset.background)
            backgroundOption = true;
            randomize();
        } else {
            backgroundOption = false;
            clearInterval(backgroundinterval);

        }
    });

});
// When the user scrolls the page, execute myFunction
function myFunction() {
    // Get the header
    let header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    let sticky = header.offsetHeight;

    //window scroll Top
    let windowScrollTop = this.pageYOffset;
    console.log(sticky, windowScrollTop);
    if (windowScrollTop > sticky) {
        header.classList.add("sticky");
        console.log(sticky);
    }
    else {
        header.classList.remove("sticky");
    }
    console.log("sticky");
}

//select landing page
let landingPage = document.querySelector(".landingpage");
//get array of images 
let imgsArray = ["header1.jpg", "header2.jpg", "header3.jpg", "header4.jpg", "header5.jpg"];


//Function To Randomize Imgs
function randomize() {
    if (backgroundOption === true) {
        console.log(backgroundOption)
        //cahange background image url
        backgroundinterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
        }, 2000);
    } else {

    }
}

randomize();

//Select skills selector 
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    //skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    //skills outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    //window Height
    let windowHeight = this.outerHeight;
    //window scroll Top
    let windowScrollTop = this.pageYOffset;

    //console.log(skillsOffsetTop, skillsOuterHeight, windowHeight, windowScrollTop)

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allOurSkills = document.querySelectorAll(".skills-box .skill-progress span");
        allOurSkills.forEach(skills => {
            skills.style.width = skills.dataset.progress;
            //console.log("allOurSkills");

        });

    };
    myFunction();
};
//Create the popup Withe the image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        //create overlay element
        let overlay = document.createElement("div");
        //add class to overlay
        overlay.className = "pop-overlay";
        //append overlay to the body
        document.body.appendChild(overlay);

        //CREATE The popupbox
        let popbox = document.createElement("div");
        //add class to the popup
        popbox.className = "popup-box";
        //create the img
        let thepopupImage = document.createElement("img");
        //SET IMG Src
        thepopupImage.src = img.src;
        // add image  to popupbox
        popbox.appendChild(thepopupImage);
        //append the popupbox to body
        document.body.appendChild(popbox);

    });

});
//select all buallets
const allbullets = document.querySelectorAll(".nav-bullets .bullets");

//select all Links
const links = document.querySelectorAll(".links a");

function scrollToSomeWhare(element) {

    element.forEach(ele => {

        console.log("hellobullestagian");

        ele.addEventListener("click", (e) => {
            /*if(element.contains.classList(".bullets")){
                console.log("hello bullets");
            }*/
            //ele.querySelector(".bullets").add.style.background= "red";
            
            
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
                
            });

        });
    });
}
scrollToSomeWhare(allbullets);
scrollToSomeWhare(links);
//REMOVE Active Class From all 
function handelActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });
    ev.target.classList.add("active");
}

//seting show bullets
let showBullets = document.querySelectorAll(".showbullets span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalStorage = localStorage.getItem("bullets-option");//al vairble da a7na al bnsmeh hwa m4 mogod

if (bulletLocalStorage !== null) {
    showBullets.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletLocalStorage === "block") {
        document.querySelector(".bullets-option .yes").classList.add("active");
        

    } else {
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}
showBullets.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("bulletLocalStorage", "block");
        } else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("bulletLocalStorage", "none");
        }
        handelActive(e);
    });

});


//reset button
document.querySelector(".reset-options").onclick = function () {
    localStorage.clear();
    window.location.reload();

};
//toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");
toggleBtn.onclick = function (e) {
    e.stopPropagation();

    //toggle class menu active on button

    toggleBtn.classList.toggle("menu-active");
    //toggle class open  on links

    tlinks.classList.toggle("open");

};
//click anywahere outside button to closs it
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tlinks) {
        if (tlinks.classList.contains("open")) {
            //toggle class menu active on button
           
            tlinks.classList.toggle("menu-active");
            //toggle class open  on links

            tlinks.classList.toggle("open");

        }
    }
});
//stop propagation on menu
tlinks.onclick = function (e) {e.stopPropagation(); }



/*Add Click bullets 
let clickbullets = document.querySelector(".bullets");

clickbullets.addEventListener("click" , (e) =>{
    clickbullets.style.background=('red');
});*/