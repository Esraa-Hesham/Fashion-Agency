//select landing page
let landingPage = document.querySelector(".landingpage");
//get array of images 
let imgsArray= ["header1.jpg,header2.jpg,header3.jpg,header4.jpg,header5.jpg"];


//cahange background image url
setInterval(() => {
let randomNumber = Math.floor(Math.random() * imgsArray.length);
landingPage.style.backgroundImage = 'url ("imgs/'+ imgsArray[randomNumber] + '")';
    
}, 2);


