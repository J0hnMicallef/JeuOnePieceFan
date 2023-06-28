const cube1 = document.querySelector(".cube1");
const cube2 = document.querySelector(".cube2");
const cube3 = document.querySelector(".cube3");
const cube4 = document.querySelector(".cube4");
const cube5 = document.querySelector(".cube5");
const cube6 = document.querySelector(".cube6");
const plateau = document.querySelector(".plateau");
const pageAccueil = document.querySelector(".pageAccueil");
const sunny = document.querySelector("#sunny");
const pageDé = document.querySelector(".pageDé");
const indicationReculer2 = document.querySelector(".indicationReculer2");
const indicationAvancer5 = document.querySelector(".indicationAvancer5");
const indicationReculer3 = document.querySelector(".indicationReculer3");
const indicationAttendre10s = document.querySelector(".indicationAttendre10s");
const indicationViep1 = document.querySelector(".indicationViep1");
const indicationAvancer3 = document.querySelector(".indicationAvancer3");
const indicationReculer5 = document.querySelector(".indicationReculer5");
const indicationAttendre5s = document.querySelector(".indicationAttendre5s");
const indicationViem1 = document.querySelector(".indicationViem1");
const indicationRien = document.querySelector(".indicationRien");
const pageVictoire = document.querySelector(".pageVictoire");
const pageDefaite = document.querySelector(".pageDefaite");

function fctCommencer() {
    plateau.style.visibility="visible";
    pageAccueil.style.visibility="hidden";
    setTimeout(()=>{
        pageDé.style.visibility="visible"
    },1000);

    var verificationVie = setInterval(function(){
        if(vie === 2){
            coeur3.style.visibility="hidden"
        } 
        if(vie === 1){
            coeur2.style.visibility="hidden"
        } 
        if(vie === 0){
            coeur1.style.visibility="hidden";
            pageDefaite.style.visibility="visible";
        } 
    },1000)
}

var finTour = 0;


var min = 1;
var max = 6;
var dé = 0


function getRandomIntInclusive(min, max) 
{
    pageDé.style.visibility="hidden";
    min = Math.ceil(min);
    max = Math.floor(max);
    dé = (Math.floor(Math.random() * (max - min +1)) + min)
    var sunnyTop = parseInt(window.getComputedStyle(sunny).getPropertyValue("top"));
    var sunnyLeft = parseInt(window.getComputedStyle(sunny).getPropertyValue("left"));
    if (dé === 1) 
    {
        cube1.classList.add("animationDé");
        setTimeout(() => {
            cube1.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    sunny.style.left="0px";
                    indicationReculer2.style.visibility="visible"
                    setTimeout(()=>{
                        indicationReculer2.style.visibility="hidden"
                        var min=1; 
                        var max=4;  
                        var questionile1 = Math.floor(Math.random() * (max - min)) + min;
                        if (questionile1 === 1) 
                        {
                            question1ile1.style.visibility="visible"
                        }
                        if (questionile1 === 2) 
                        {
                            question2ile1.style.visibility="visible"
                        } 
                        if (questionile1 === 3) 
                        {
                            question3ile1.style.visibility="visible"
                        }
                        if (questionile1 === 4) 
                        {
                            question4ile1.style.visibility="visible"
                        }            
                    },2000)
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile2 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile2 === 1) 
                    {
                        question1ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 2) 
                    {
                        question2ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 3) 
                    {
                        question3ile2.style.visibility="visible"
                    }
                    if (questionile2 === 4) 
                    {
                        question4ile2.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.top="85px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.top="155px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.top="225px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.top="405px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.top="475px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.top="545px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.top="715px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.top="785px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.top="855px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.left= "150px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.top="1025px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.top="1095px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.top="1165px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.top="1335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.top="1405px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.top="1475px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.top="1645px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.top="1715px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.top="1785px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.top="1955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.top="2025px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.top="2095px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.top="2265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.top="2335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.top="2405px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.top="2575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.top="2645px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.top="2715px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
    if (dé === 2) 
    {
        cube2.classList.add("animationDé");
        setTimeout(() => {
            cube2.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                setTimeout(()=>{
                    sunny.style.left="0px";
                    indicationReculer2.style.visibility="visible";
                    setTimeout(()=>{
                        indicationReculer2.style.visibility="hidden"
                        var min=1; 
                        var max=4;  
                        var questionile1 = Math.floor(Math.random() * (max - min)) + min;
                        if (questionile1 === 1) 
                        {
                            question1ile1.style.visibility="visible"
                        } 
                        if (questionile1 === 2) 
                        {
                            question2ile1.style.visibility="visible"
                        } 
                        if (questionile1 === 3) 
                        {
                            question3ile1.style.visibility="visible"
                        }
                        if (questionile1 === 4) 
                        {
                            question4ile1.style.visibility="visible"
                        }      
                    },2000)
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile2 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile2 === 1) 
                    {
                        question1ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 2) 
                    {
                        question2ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 3) 
                    {
                        question3ile2.style.visibility="visible"
                    }
                    if (questionile2 === 4) 
                    {
                        question4ile2.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.top="85px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.top="155px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.top="225px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.left="80px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.top="405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.top="475px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.top="545px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.left="220px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.left="330px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.top="715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.top="785px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.top="855px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.top="955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.left= "150px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.left="80px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.top="1025px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.top="1095px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.top="1165px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.top="1265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.left="220px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.left="330px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.top="1335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.top="1405px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.top="1475px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.top="1575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.left="80px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.top="1645px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.top="1715px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.top="1785px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.top="1885px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
                
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.left="220px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.left="330px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.top="1955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.top="2025px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.top="2095px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.top="2195px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.left="80px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.top="2265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.top="2335px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.top="2405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.top="2505px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.left="220px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.left="330px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.top="2575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.top="2645px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.top="2715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.top="2815px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="80px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
    if (dé === 3) 
    {
        cube3.classList.add("animationDé");
        setTimeout(() => {
            cube3.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile2 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile2 === 1) 
                    {
                        question1ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 2) 
                    {
                        question2ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 3) 
                    {
                        question3ile2.style.visibility="visible"
                    }
                    if (questionile2 === 4) 
                    {
                        question4ile2.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.top="85px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.top="155px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.top="225px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.top="405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.top="475px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.top="545px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.top="715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.top="785px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.top="855px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.top="955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.left= "150px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.top="1025px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.top="1095px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.top="1165px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.top="1265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.top="1335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.top="1405px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.top="1475px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.top="1575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)

            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.top="1645px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.top="1715px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.top="1785px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.top="1885px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.top="1955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.top="2025px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.top="2095px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.top="2195px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.top="2265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.top="2335px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.top="2405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.top="2505px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.top="2575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.top="2645px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.top="2715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.top="2815px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
    if (dé === 4) 
    {
        cube4.classList.add("animationDé");
        setTimeout(() => {
            cube4.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile2 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile2 === 1) 
                    {
                        question1ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 2) 
                    {
                        question2ile2.style.visibility="visible"
                    } 
                    if (questionile2 === 3) 
                    {
                        question3ile2.style.visibility="visible"
                    }
                    if (questionile2 === 4) 
                    {
                        question4ile2.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="85px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.top="155px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.top="225px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.top="405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.top="475px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.top="545px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };  
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.top="715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.top="785px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.top="855px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.top="955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.left= "150px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.top="1025px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.top="1095px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.top="1165px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.top="1265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.top="1335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.top="1405px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.top="1475px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.top="1575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.top="1645px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.top="1715px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.top="1785px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.top="1885px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.top="1955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.top="2025px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.top="2095px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.top="2195px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.top="2265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.top="2335px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.top="2405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.top="2505px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.top="2575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.top="2645px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.top="2715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.top="2815px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
    if (dé === 5) 
    {
        cube5.classList.add("animationDé");
        setTimeout(() => {
            cube5.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="85px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="155px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.top="225px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.top="335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.top="335px";
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.top="405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.top="475px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.top="545px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.top="615px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };  
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.top="615px";
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };  
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.top="715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.top="785px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.top="855px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.top="955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.left= "150px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.top="1025px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.top="1095px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.top="1165px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.top="1265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.top="1335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.top="1405px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.top="1475px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.top="1575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.top="1645px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.top="1715px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.top="1785px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.top="1885px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.top="1955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.top="2025px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.top="2095px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.top="2195px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.top="2265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.top="2335px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.top="2405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.top="2505px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.left="80px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.top="2575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.top="2645px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.top="2715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.top="2815px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.left="220px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
    if (dé === 6) 
    {
        cube6.classList.add("animationDé");
        setTimeout(() => {
            cube6.classList.remove("animationDé");
            if (sunnyTop === 15 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="155px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 80 ){
                sunny.style.left="330px";
                sunny.style.top="225px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 150 ){
                sunny.style.top="335px";
                sunny.style.left="330px"
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile3 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile3 === 1) 
                    {
                        question1ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 2) 
                    {
                        question2ile3.style.visibility="visible"
                    } 
                    if (questionile3 === 3) 
                    {
                        question3ile3.style.visibility="visible"
                    }
                    if (questionile3 === 4) 
                    {
                        question4ile3.style.visibility="visible"
                    }      
                },2000);
            };
            if (sunnyTop === 15 && sunnyLeft === 220 ){
                sunny.style.top="335px";
                sunny.style.left="220px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 15 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    indicationAttendre10s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre10s.style.visibility="hidden"
                    },10000)
                },1000)
            };
            if (sunnyTop === 85 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 155 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="335px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile4 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile4 === 1) 
                    {
                        question1ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 2) 
                    {
                        question2ile4.style.visibility="visible"
                    } 
                    if (questionile4 === 3) 
                    {
                        question3ile4.style.visibility="visible"
                    }
                    if (questionile4 === 4) 
                    {
                        question4ile4.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 225 && sunnyLeft === 330 ){
                sunny.style.top="405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 330 ){
                sunny.style.top="475px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 220 ){
                sunny.style.top="545px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 335 && sunnyLeft === 150 ){
                sunny.style.top="615px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile5 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile5 === 1) 
                    {
                        question1ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 2) 
                    {
                        question2ile5.style.visibility="visible"
                    } 
                    if (questionile5 === 3) 
                    {
                        question3ile5.style.visibility="visible"
                    }
                    if (questionile5 === 4) 
                    {
                        question4ile5.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 335 && sunnyLeft === 80 ){
                sunny.style.top="615px";
                sunny.style.left="80px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };  
            if (sunnyTop === 335 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer5.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationAvancer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };  
            if (sunnyTop === 405 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 475 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="615px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile6 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile6 === 1) 
                    {
                        question1ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 2) 
                    {
                        question2ile6.style.visibility="visible"
                    } 
                    if (questionile6 === 3) 
                    {
                        question3ile6.style.visibility="visible"
                    }
                    if (questionile6 === 4) 
                    {
                        question4ile6.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 545 && sunnyLeft === 0 ){
                sunny.style.top="715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 0 ){
                sunny.style.top="785px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 80 ){
                sunny.style.top="855px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            }; 
            if (sunnyTop === 615 && sunnyLeft === 150 ){
                sunny.style.top="955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile7 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile7 === 1) 
                    {
                        question1ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 2) 
                    {
                        question2ile7.style.visibility="visible"
                    } 
                    if (questionile7 === 3) 
                    {
                        question3ile7.style.visibility="visible"
                    }
                    if (questionile7 === 4) 
                    {
                        question4ile7.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 615 && sunnyLeft === 220 ){
                sunny.style.left="220px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 615 && sunnyLeft === 330 ){
                sunny.style.left= "150px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer3.style.visibility="visible"
                    sunny.style.top="855px";
                    setTimeout(()=>{
                        indicationReculer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 715 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 785 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="955px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile8 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile8 === 1) 
                    {
                        question1ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 2) 
                    {
                        question2ile8.style.visibility="visible"
                    } 
                    if (questionile8 === 3) 
                    {
                        question3ile8.style.visibility="visible"
                    }
                    if (questionile8 === 4) 
                    {
                        question4ile8.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 855 && sunnyLeft === 330 ){
                sunny.style.top="1025px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 330 ){
                sunny.style.top="1095px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 220 ){
                sunny.style.top="1165px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };    
            if (sunnyTop === 955 && sunnyLeft === 150 ){
                sunny.style.top="1265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile9 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile9 === 1) 
                    {
                        question1ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 2) 
                    {
                        question2ile9.style.visibility="visible"
                    } 
                    if (questionile9 === 3) 
                    {
                        question3ile9.style.visibility="visible"
                    }
                    if (questionile9 === 4) 
                    {
                        question4ile9.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 955 && sunnyLeft === 80 ){
                sunny.style.left="80px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 955 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    indicationViep1.style.visibility="visible";
                    if(vie === 2){
                        vie = 3;
                        coeur3.style.visibility="visible"
                    } 
                    if(vie === 1){
                        vie = 2
                        coeur2.style.visibility="visible"
                    } 
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViep1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 1025 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1095 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1265px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile10 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile10 === 1) 
                    {
                        question1ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 2) 
                    {
                        question2ile10.style.visibility="visible"
                    } 
                    if (questionile10 === 3) 
                    {
                        question3ile10.style.visibility="visible"
                    }
                    if (questionile10 === 4) 
                    {
                        question4ile10.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1165 && sunnyLeft === 0 ){
                sunny.style.top="1335px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 0 ){
                sunny.style.top="1405px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 80 ){
                sunny.style.top="1475px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 150 ){
                sunny.style.top="1575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile11 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile11 === 1) 
                    {
                        question1ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 2) 
                    {
                        question2ile11.style.visibility="visible"
                    } 
                    if (questionile11 === 3) 
                    {
                        question3ile11.style.visibility="visible"
                    }
                    if (questionile11 === 4) 
                    {
                        question4ile11.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 220 ){
                sunny.style.left="220px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1265 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationReculer5.style.visibility="visible"
                    sunny.style.top="1335px";
                    setTimeout(()=>{
                        indicationReculer5.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1335 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1405 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="1575px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile12 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile12 === 1) 
                    {
                        question1ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 2) 
                    {
                        question2ile12.style.visibility="visible"
                    } 
                    if (questionile12 === 3) 
                    {
                        question3ile12.style.visibility="visible"
                    }
                    if (questionile12 === 4) 
                    {
                        question4ile12.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1475 && sunnyLeft === 330 ){
                sunny.style.top="1645px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 330 ){
                sunny.style.top="1715px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 220 ){
                sunny.style.top="1785px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 150 ){
                sunny.style.top="1885px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile13 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile13 === 1) 
                    {
                        question1ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 2) 
                    {
                        question2ile13.style.visibility="visible"
                    } 
                    if (questionile13 === 3) 
                    {
                        question3ile13.style.visibility="visible"
                    }
                    if (questionile13 === 4) 
                    {
                        question4ile13.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 80 ){
                sunny.style.left="80px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1575 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    sunny.style.left="330px";
                    indicationAvancer3.style.visibility="visible"
                    sunny.style.top="1955px";
                    setTimeout(()=>{
                        indicationAvancer3.style.visibility="hidden"
                        finTour = 1;            
                    },2000)
                },1000)
            };
            if (sunnyTop === 1645 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1715 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="1885px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile14 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile14 === 1) 
                    {
                        question1ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 2) 
                    {
                        question2ile14.style.visibility="visible"
                    } 
                    if (questionile14 === 3) 
                    {
                        question3ile14.style.visibility="visible"
                    }
                    if (questionile14 === 4) 
                    {
                        question4ile14.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1785 && sunnyLeft === 0 ){
                sunny.style.top="1955px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 0 ){
                sunny.style.top="2025px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 80 ){
                sunny.style.top="2095px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 150 ){
                sunny.style.top="2195px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile15 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile15 === 1) 
                    {
                        question1ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 2) 
                    {
                        question2ile15.style.visibility="visible"
                    } 
                    if (questionile15 === 3) 
                    {
                        question3ile15.style.visibility="visible"
                    }
                    if (questionile15 === 4) 
                    {
                        question4ile15.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 220 ){
                sunny.style.left="220px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 1885 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    indicationAttendre5s.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationAttendre5s.style.visibility="hidden"
                    },5000)
                },1000)
            };
            if (sunnyTop === 1955 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2025 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2195px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile16 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile16 === 1) 
                    {
                        question1ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 2) 
                    {
                        question2ile16.style.visibility="visible"
                    } 
                    if (questionile16 === 3) 
                    {
                        question3ile16.style.visibility="visible"
                    }
                    if (questionile16 === 4) 
                    {
                        question4ile16.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2095 && sunnyLeft === 330 ){
                sunny.style.top="2265px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 330 ){
                sunny.style.top="2335px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 220 ){
                sunny.style.top="2405px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 150 ){
                sunny.style.top="2505px";
                sunny.style.left="0px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile17 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile17 === 1) 
                    {
                        question1ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 2) 
                    {
                        question2ile17.style.visibility="visible"
                    } 
                    if (questionile17 === 3) 
                    {
                        question3ile17.style.visibility="visible"
                    }
                    if (questionile17 === 4) 
                    {
                        question4ile17.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 80 ){
                sunny.style.left="80px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2195 && sunnyLeft === 0 ){
                sunny.style.left="150px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    indicationRien.style.visibility="visible";
                    setTimeout(()=>{
                        finTour = 1;
                        indicationRien.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2265 && sunnyLeft === 0 ){
                sunny.style.left="220px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2335 && sunnyLeft === 0 ){
                sunny.style.left="330px";
                sunny.style.top="2505px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile18 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile18 === 1) 
                    {
                        question1ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 2) 
                    {
                        question2ile18.style.visibility="visible"
                    } 
                    if (questionile18 === 3) 
                    {
                        question3ile18.style.visibility="visible"
                    }
                    if (questionile18 === 4) 
                    {
                        question4ile18.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2405 && sunnyLeft === 0 ){
                sunny.style.top="2575px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 0 ){
                sunny.style.top="2645px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 80 ){
                sunny.style.top="2715px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 150 ){
                sunny.style.top="2815px";
                sunny.style.left="330px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile19 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile19 === 1) 
                    {
                        question1ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 2) 
                    {
                        question2ile19.style.visibility="visible"
                    } 
                    if (questionile19 === 3) 
                    {
                        question3ile19.style.visibility="visible"
                    }
                    if (questionile19 === 4) 
                    {
                        question4ile19.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 220 ){
                sunny.style.left="220px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2505 && sunnyLeft === 330 ){
                sunny.style.left="150px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    indicationViem1.style.visibility="visible";
                    vie = vie-1;
                    setTimeout(()=>{
                        finTour = 1;
                        indicationViem1.style.visibility="hidden"
                    },2000)
                },1000)
            };
            if (sunnyTop === 2575 && sunnyLeft === 330 ){
                sunny.style.left="80px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    finTour = 1;
                },1000)
            };
            if (sunnyTop === 2645 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2715 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 330 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 220 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 150 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
            if (sunnyTop === 2815 && sunnyLeft === 80 ){
                sunny.style.left="0px";
                sunny.style.top="2815px";
                setTimeout(()=>{
                    var min=1; 
                    var max=4;  
                    var questionile20 = Math.floor(Math.random() * (max - min)) + min;
                    if (questionile20 === 1) 
                    {
                        question1ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 2) 
                    {
                        question2ile20.style.visibility="visible"
                    } 
                    if (questionile20 === 3) 
                    {
                        question3ile20.style.visibility="visible"
                    }
                    if (questionile20 === 4) 
                    {
                        question4ile20.style.visibility="visible"
                    }      
                },2000)
            };
        },5000);
    }
}

var verification1 = setInterval(function(){
    if(finTour === 1){
        finTour = 0;
        pageDé.style.visibility="visible"
    } 
},1000)

const question1ile1 = document.querySelector(".question1ile1");
const question2ile1 = document.querySelector(".question2ile1");
const question3ile1 = document.querySelector(".question3ile1");
const question4ile1 = document.querySelector(".question4ile1");
const question1ile2 = document.querySelector(".question1ile2");
const question2ile2 = document.querySelector(".question2ile2");
const question3ile2 = document.querySelector(".question3ile2");
const question4ile2 = document.querySelector(".question4ile2");
const question1ile3 = document.querySelector(".question1ile3");
const question2ile3 = document.querySelector(".question2ile3");
const question3ile3 = document.querySelector(".question3ile3");
const question4ile3 = document.querySelector(".question4ile3");
const question1ile4 = document.querySelector(".question1ile4");
const question2ile4 = document.querySelector(".question2ile4");
const question3ile4 = document.querySelector(".question3ile4");
const question4ile4 = document.querySelector(".question4ile4");
const question1ile5 = document.querySelector(".question1ile5");
const question2ile5 = document.querySelector(".question2ile5");
const question3ile5 = document.querySelector(".question3ile5");
const question4ile5 = document.querySelector(".question4ile5");
const question1ile6 = document.querySelector(".question1ile6");
const question2ile6 = document.querySelector(".question2ile6");
const question3ile6 = document.querySelector(".question3ile6");
const question4ile6 = document.querySelector(".question4ile6");
const question1ile7 = document.querySelector(".question1ile7");
const question2ile7 = document.querySelector(".question2ile7");
const question3ile7 = document.querySelector(".question3ile7");
const question4ile7 = document.querySelector(".question4ile7");
const question1ile8 = document.querySelector(".question1ile8");
const question2ile8 = document.querySelector(".question2ile8");
const question3ile8 = document.querySelector(".question3ile8");
const question4ile8 = document.querySelector(".question4ile8");
const question1ile9 = document.querySelector(".question1ile9");
const question2ile9 = document.querySelector(".question2ile9");
const question3ile9 = document.querySelector(".question3ile9");
const question4ile9 = document.querySelector(".question4ile9");
const question1ile10 = document.querySelector(".question1ile10");
const question2ile10 = document.querySelector(".question2ile10");
const question3ile10 = document.querySelector(".question3ile10");
const question4ile10 = document.querySelector(".question4ile10");
const question1ile11 = document.querySelector(".question1ile11");
const question2ile11 = document.querySelector(".question2ile11");
const question3ile11 = document.querySelector(".question3ile11");
const question4ile11 = document.querySelector(".question4ile11");
const question1ile12 = document.querySelector(".question1ile12");
const question2ile12 = document.querySelector(".question2ile12");
const question3ile12 = document.querySelector(".question3ile12");
const question4ile12 = document.querySelector(".question4ile12");
const question1ile13 = document.querySelector(".question1ile13");
const question2ile13 = document.querySelector(".question2ile13");
const question3ile13 = document.querySelector(".question3ile13");
const question4ile13 = document.querySelector(".question4ile13");
const question1ile14 = document.querySelector(".question1ile14");
const question2ile14 = document.querySelector(".question2ile14");
const question3ile14 = document.querySelector(".question3ile14");
const question4ile14 = document.querySelector(".question4ile14");
const question1ile15 = document.querySelector(".question1ile15");
const question2ile15 = document.querySelector(".question2ile15");
const question3ile15 = document.querySelector(".question3ile15");
const question4ile15 = document.querySelector(".question4ile15");
const question1ile16 = document.querySelector(".question1ile16");
const question2ile16 = document.querySelector(".question2ile16");
const question3ile16 = document.querySelector(".question3ile16");
const question4ile16 = document.querySelector(".question4ile16");
const question1ile17 = document.querySelector(".question1ile17");
const question2ile17 = document.querySelector(".question2ile17");
const question3ile17 = document.querySelector(".question3ile17");
const question4ile17 = document.querySelector(".question4ile17");
const question1ile18 = document.querySelector(".question1ile18");
const question2ile18 = document.querySelector(".question2ile18");
const question3ile18 = document.querySelector(".question3ile18");
const question4ile18 = document.querySelector(".question4ile18");
const question1ile19 = document.querySelector(".question1ile19");
const question2ile19 = document.querySelector(".question2ile19");
const question3ile19 = document.querySelector(".question3ile19");
const question4ile19 = document.querySelector(".question4ile19");
const question1ile20 = document.querySelector(".question1ile20");
const question2ile20 = document.querySelector(".question2ile20");
const question3ile20 = document.querySelector(".question3ile20");
const question4ile20 = document.querySelector(".question4ile20");
const coeur1 = document.querySelector("#coeur1");
const coeur2 = document.querySelector("#coeur2");
const coeur3 = document.querySelector("#coeur3");
var vie = 3;

function réponseQ1I1fausse()
{
    question1ile1.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile1.style.visibility="hidden";
        question1ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I1vrai()
{
    question1ile1.style.background="green";
    setTimeout(()=>{
        question1ile1.style.visibility="hidden";
        question1ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I1fausse()
{
    question2ile1.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile1.style.visibility="hidden";
        question2ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I1vrai()
{
    question2ile1.style.background="green";
    setTimeout(()=>{
        question2ile1.style.visibility="hidden";
        question2ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I1fausse()
{
    question3ile1.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile1.style.visibility="hidden";
        question3ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I1vrai()
{
    question3ile1.style.background="green";
    setTimeout(()=>{
        question3ile1.style.visibility="hidden";
        question3ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I1fausse()
{
    question4ile1.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile1.style.visibility="hidden";
        question4ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I1vrai()
{
    question4ile1.style.background="green";
    setTimeout(()=>{
        question4ile1.style.visibility="hidden";
        question4ile1.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I2fausse()
{
    question1ile2.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile2.style.visibility="hidden";
        question1ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I2vrai()
{
    question1ile2.style.background="green";
    setTimeout(()=>{
        question1ile2.style.visibility="hidden";
        question1ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I2fausse()
{
    question2ile2.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile2.style.visibility="hidden";
        question2ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I2vrai()
{
    question2ile2.style.background="green";
    setTimeout(()=>{
        question2ile2.style.visibility="hidden";
        question2ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I2fausse()
{
    question3ile2.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile2.style.visibility="hidden";
        question3ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I2vrai()
{
    question3ile2.style.background="green";
    setTimeout(()=>{
        question3ile2.style.visibility="hidden";
        question3ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I2fausse()
{
    question4ile2.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile2.style.visibility="hidden";
        question4ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I2vrai()
{
    question4ile2.style.background="green";
    setTimeout(()=>{
        question4ile2.style.visibility="hidden";
        question4ile2.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I3fausse()
{
    question1ile3.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile3.style.visibility="hidden";
        question1ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I3vrai()
{
    question1ile3.style.background="green";
    setTimeout(()=>{
        question1ile3.style.visibility="hidden";
        question1ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I3fausse()
{
    question2ile3.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile3.style.visibility="hidden";
        question2ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I3vrai()
{
    question2ile3.style.background="green";
    setTimeout(()=>{
        question2ile3.style.visibility="hidden";
        question2ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I3fausse()
{
    question3ile3.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile3.style.visibility="hidden";
        question3ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I3vrai()
{
    question3ile3.style.background="green";
    setTimeout(()=>{
        question3ile3.style.visibility="hidden";
        question3ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I3fausse()
{
    question4ile3.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile3.style.visibility="hidden";
        question4ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I3vrai()
{
    question4ile3.style.background="green";
    setTimeout(()=>{
        question4ile3.style.visibility="hidden";
        question4ile3.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I4fausse()
{
    question1ile4.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile4.style.visibility="hidden";
        question1ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I4vrai()
{
    question1ile4.style.background="green";
    setTimeout(()=>{
        question1ile4.style.visibility="hidden";
        question1ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I4fausse()
{
    question2ile4.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile4.style.visibility="hidden";
        question2ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I4vrai()
{
    question2ile4.style.background="green";
    setTimeout(()=>{
        question2ile4.style.visibility="hidden";
        question2ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I4fausse()
{
    question3ile4.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile4.style.visibility="hidden";
        question3ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I4vrai()
{
    question3ile4.style.background="green";
    setTimeout(()=>{
        question3ile4.style.visibility="hidden";
        question3ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I4fausse()
{
    question4ile4.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile4.style.visibility="hidden";
        question4ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I4vrai()
{
    question4ile4.style.background="green";
    setTimeout(()=>{
        question4ile4.style.visibility="hidden";
        question4ile4.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I5fausse()
{
    question1ile5.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile5.style.visibility="hidden";
        question1ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I5vrai()
{
    question1ile5.style.background="green";
    setTimeout(()=>{
        question1ile5.style.visibility="hidden";
        question1ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I5fausse()
{
    question2ile5.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile5.style.visibility="hidden";
        question2ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I5vrai()
{
    question2ile5.style.background="green";
    setTimeout(()=>{
        question2ile5.style.visibility="hidden";
        question2ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I5fausse()
{
    question3ile5.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile5.style.visibility="hidden";
        question3ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I5vrai()
{
    question3ile5.style.background="green";
    setTimeout(()=>{
        question3ile5.style.visibility="hidden";
        question3ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I5fausse()
{
    question4ile5.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile5.style.visibility="hidden";
        question4ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I5vrai()
{
    question4ile5.style.background="green";
    setTimeout(()=>{
        question4ile5.style.visibility="hidden";
        question4ile5.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I6fausse()
{
    question1ile6.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile6.style.visibility="hidden";
        question1ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I6vrai()
{
    question1ile6.style.background="green";
    setTimeout(()=>{
        question1ile6.style.visibility="hidden";
        question1ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I6fausse()
{
    question2ile6.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile6.style.visibility="hidden";
        question2ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I6vrai()
{
    question2ile6.style.background="green";
    setTimeout(()=>{
        question2ile6.style.visibility="hidden";
        question2ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I6fausse()
{
    question3ile6.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile6.style.visibility="hidden";
        question3ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I6vrai()
{
    question3ile6.style.background="green";
    setTimeout(()=>{
        question3ile6.style.visibility="hidden";
        question3ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I6fausse()
{
    question4ile6.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile6.style.visibility="hidden";
        question4ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I6vrai()
{
    question4ile6.style.background="green";
    setTimeout(()=>{
        question4ile6.style.visibility="hidden";
        question4ile6.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I7fausse()
{
    question1ile7.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile7.style.visibility="hidden";
        question1ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I7vrai()
{
    question1ile7.style.background="green";
    setTimeout(()=>{
        question1ile7.style.visibility="hidden";
        question1ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I7fausse()
{
    question2ile7.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile7.style.visibility="hidden";
        question2ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I7vrai()
{
    question2ile7.style.background="green";
    setTimeout(()=>{
        question2ile7.style.visibility="hidden";
        question2ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I7fausse()
{
    question3ile7.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile7.style.visibility="hidden";
        question3ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I7vrai()
{
    question3ile7.style.background="green";
    setTimeout(()=>{
        question3ile7.style.visibility="hidden";
        question3ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I7fausse()
{
    question4ile7.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile7.style.visibility="hidden";
        question4ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I7vrai()
{
    question4ile7.style.background="green";
    setTimeout(()=>{
        question4ile7.style.visibility="hidden";
        question4ile7.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I8fausse()
{
    question1ile8.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile8.style.visibility="hidden";
        question1ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I8vrai()
{
    question1ile8.style.background="green";
    setTimeout(()=>{
        question1ile8.style.visibility="hidden";
        question1ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I8fausse()
{
    question2ile8.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile8.style.visibility="hidden";
        question2ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I8vrai()
{
    question2ile8.style.background="green";
    setTimeout(()=>{
        question2ile8.style.visibility="hidden";
        question2ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I8fausse()
{
    question3ile8.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile8.style.visibility="hidden";
        question3ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I8vrai()
{
    question3ile8.style.background="green";
    setTimeout(()=>{
        question3ile8.style.visibility="hidden";
        question3ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I8fausse()
{
    question4ile8.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile8.style.visibility="hidden";
        question4ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I8vrai()
{
    question4ile8.style.background="green";
    setTimeout(()=>{
        question4ile8.style.visibility="hidden";
        question4ile8.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I9fausse()
{
    question1ile9.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile9.style.visibility="hidden";
        question1ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I9vrai()
{
    question1ile9.style.background="green";
    setTimeout(()=>{
        question1ile9.style.visibility="hidden";
        question1ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I9fausse()
{
    question2ile9.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile9.style.visibility="hidden";
        question2ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I9vrai()
{
    question2ile9.style.background="green";
    setTimeout(()=>{
        question2ile9.style.visibility="hidden";
        question2ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I9fausse()
{
    question3ile9.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile9.style.visibility="hidden";
        question3ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I9vrai()
{
    question3ile9.style.background="green";
    setTimeout(()=>{
        question3ile9.style.visibility="hidden";
        question3ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I9fausse()
{
    question4ile9.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile9.style.visibility="hidden";
        question4ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I9vrai()
{
    question4ile9.style.background="green";
    setTimeout(()=>{
        question4ile9.style.visibility="hidden";
        question4ile9.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I10fausse()
{
    question1ile10.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile10.style.visibility="hidden";
        question1ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I10vrai()
{
    question1ile10.style.background="green";
    setTimeout(()=>{
        question1ile10.style.visibility="hidden";
        question1ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I10fausse()
{
    question2ile10.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile10.style.visibility="hidden";
        question2ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I10vrai()
{
    question2ile10.style.background="green";
    setTimeout(()=>{
        question2ile10.style.visibility="hidden";
        question2ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I10fausse()
{
    question3ile10.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile10.style.visibility="hidden";
        question3ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I10vrai()
{
    question3ile10.style.background="green";
    setTimeout(()=>{
        question3ile10.style.visibility="hidden";
        question3ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I10fausse()
{
    question4ile10.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile10.style.visibility="hidden";
        question4ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I10vrai()
{
    question4ile10.style.background="green";
    setTimeout(()=>{
        question4ile10.style.visibility="hidden";
        question4ile10.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I11fausse()
{
    question1ile11.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile11.style.visibility="hidden";
        question1ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I11vrai()
{
    question1ile11.style.background="green";
    setTimeout(()=>{
        question1ile11.style.visibility="hidden";
        question1ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I11fausse()
{
    question2ile11.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile11.style.visibility="hidden";
        question2ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I11vrai()
{
    question2ile11.style.background="green";
    setTimeout(()=>{
        question2ile11.style.visibility="hidden";
        question2ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I11fausse()
{
    question3ile11.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile11.style.visibility="hidden";
        question3ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I11vrai()
{
    question3ile11.style.background="green";
    setTimeout(()=>{
        question3ile11.style.visibility="hidden";
        question3ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I11fausse()
{
    question4ile11.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile11.style.visibility="hidden";
        question4ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I11vrai()
{
    question4ile11.style.background="green";
    setTimeout(()=>{
        question4ile11.style.visibility="hidden";
        question4ile11.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I12fausse()
{
    question1ile12.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile12.style.visibility="hidden";
        question1ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I12vrai()
{
    question1ile12.style.background="green";
    setTimeout(()=>{
        question1ile12.style.visibility="hidden";
        question1ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I12fausse()
{
    question2ile12.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile12.style.visibility="hidden";
        question2ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I12vrai()
{
    question2ile12.style.background="green";
    setTimeout(()=>{
        question2ile12.style.visibility="hidden";
        question2ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I12fausse()
{
    question3ile12.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile12.style.visibility="hidden";
        question3ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I12vrai()
{
    question3ile12.style.background="green";
    setTimeout(()=>{
        question3ile12.style.visibility="hidden";
        question3ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I12fausse()
{
    question4ile12.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile12.style.visibility="hidden";
        question4ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I12vrai()
{
    question4ile12.style.background="green";
    setTimeout(()=>{
        question4ile12.style.visibility="hidden";
        question4ile12.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I13fausse()
{
    question1ile13.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile13.style.visibility="hidden";
        question1ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I13vrai()
{
    question1ile13.style.background="green";
    setTimeout(()=>{
        question1ile13.style.visibility="hidden";
        question1ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I13fausse()
{
    question2ile13.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile13.style.visibility="hidden";
        question2ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I13vrai()
{
    question2ile13.style.background="green";
    setTimeout(()=>{
        question2ile13.style.visibility="hidden";
        question2ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I13fausse()
{
    question3ile13.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile13.style.visibility="hidden";
        question3ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I13vrai()
{
    question3ile13.style.background="green";
    setTimeout(()=>{
        question3ile13.style.visibility="hidden";
        question3ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I13fausse()
{
    question4ile13.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile13.style.visibility="hidden";
        question4ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I13vrai()
{
    question4ile13.style.background="green";
    setTimeout(()=>{
        question4ile13.style.visibility="hidden";
        question4ile13.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I14fausse()
{
    question1ile14.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile14.style.visibility="hidden";
        question1ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I14vrai()
{
    question1ile14.style.background="green";
    setTimeout(()=>{
        question1ile14.style.visibility="hidden";
        question1ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I14fausse()
{
    question2ile14.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile14.style.visibility="hidden";
        question2ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I14vrai()
{
    question2ile14.style.background="green";
    setTimeout(()=>{
        question2ile14.style.visibility="hidden";
        question2ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I14fausse()
{
    question3ile14.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile14.style.visibility="hidden";
        question3ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I14vrai()
{
    question3ile14.style.background="green";
    setTimeout(()=>{
        question3ile14.style.visibility="hidden";
        question3ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I14fausse()
{
    question4ile14.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile14.style.visibility="hidden";
        question4ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I14vrai()
{
    question4ile14.style.background="green";
    setTimeout(()=>{
        question4ile14.style.visibility="hidden";
        question4ile14.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I15fausse()
{
    question1ile15.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile15.style.visibility="hidden";
        question1ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I15vrai()
{
    question1ile15.style.background="green";
    setTimeout(()=>{
        question1ile15.style.visibility="hidden";
        question1ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I15fausse()
{
    question2ile15.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile15.style.visibility="hidden";
        question2ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I15vrai()
{
    question2ile15.style.background="green";
    setTimeout(()=>{
        question2ile15.style.visibility="hidden";
        question2ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I15fausse()
{
    question3ile15.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile15.style.visibility="hidden";
        question3ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I15vrai()
{
    question3ile15.style.background="green";
    setTimeout(()=>{
        question3ile15.style.visibility="hidden";
        question3ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I15fausse()
{
    question4ile15.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile15.style.visibility="hidden";
        question4ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I15vrai()
{
    question4ile15.style.background="green";
    setTimeout(()=>{
        question4ile15.style.visibility="hidden";
        question4ile15.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I16fausse()
{
    question1ile16.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile16.style.visibility="hidden";
        question1ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I16vrai()
{
    question1ile16.style.background="green";
    setTimeout(()=>{
        question1ile16.style.visibility="hidden";
        question1ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I16fausse()
{
    question2ile16.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile16.style.visibility="hidden";
        question2ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I16vrai()
{
    question2ile16.style.background="green";
    setTimeout(()=>{
        question2ile16.style.visibility="hidden";
        question2ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I16fausse()
{
    question3ile16.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile16.style.visibility="hidden";
        question3ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I16vrai()
{
    question3ile16.style.background="green";
    setTimeout(()=>{
        question3ile16.style.visibility="hidden";
        question3ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I16fausse()
{
    question4ile16.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile16.style.visibility="hidden";
        question4ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I16vrai()
{
    question4ile16.style.background="green";
    setTimeout(()=>{
        question4ile16.style.visibility="hidden";
        question4ile16.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I17fausse()
{
    question1ile17.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile17.style.visibility="hidden";
        question1ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I17vrai()
{
    question1ile17.style.background="green";
    setTimeout(()=>{
        question1ile17.style.visibility="hidden";
        question1ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I17fausse()
{
    question2ile17.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile17.style.visibility="hidden";
        question2ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I17vrai()
{
    question2ile17.style.background="green";
    setTimeout(()=>{
        question2ile17.style.visibility="hidden";
        question2ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I17fausse()
{
    question3ile17.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile17.style.visibility="hidden";
        question3ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I17vrai()
{
    question3ile17.style.background="green";
    setTimeout(()=>{
        question3ile17.style.visibility="hidden";
        question3ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I17fausse()
{
    question4ile17.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile17.style.visibility="hidden";
        question4ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I17vrai()
{
    question4ile17.style.background="green";
    setTimeout(()=>{
        question4ile17.style.visibility="hidden";
        question4ile17.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I18fausse()
{
    question1ile18.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile18.style.visibility="hidden";
        question1ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I18vrai()
{
    question1ile18.style.background="green";
    setTimeout(()=>{
        question1ile18.style.visibility="hidden";
        question1ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I18fausse()
{
    question2ile18.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile18.style.visibility="hidden";
        question2ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I18vrai()
{
    question2ile18.style.background="green";
    setTimeout(()=>{
        question2ile18.style.visibility="hidden";
        question2ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I18fausse()
{
    question3ile18.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile18.style.visibility="hidden";
        question3ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I18vrai()
{
    question3ile18.style.background="green";
    setTimeout(()=>{
        question3ile18.style.visibility="hidden";
        question3ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I18fausse()
{
    question4ile18.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile18.style.visibility="hidden";
        question4ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I18vrai()
{
    question4ile18.style.background="green";
    setTimeout(()=>{
        question4ile18.style.visibility="hidden";
        question4ile18.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I19fausse()
{
    question1ile19.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile19.style.visibility="hidden";
        question1ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I19vrai()
{
    question1ile19.style.background="green";
    setTimeout(()=>{
        question1ile19.style.visibility="hidden";
        question1ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I19fausse()
{
    question2ile19.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile19.style.visibility="hidden";
        question2ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ2I19vrai()
{
    question2ile19.style.background="green";
    setTimeout(()=>{
        question2ile19.style.visibility="hidden";
        question2ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I19fausse()
{
    question3ile19.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile19.style.visibility="hidden";
        question3ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ3I19vrai()
{
    question3ile19.style.background="green";
    setTimeout(()=>{
        question3ile19.style.visibility="hidden";
        question3ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I19fausse()
{
    question4ile19.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile19.style.visibility="hidden";
        question4ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ4I19vrai()
{
    question4ile19.style.background="green";
    setTimeout(()=>{
        question4ile19.style.visibility="hidden";
        question4ile19.style.background="rgb(56, 32, 5)";
        finTour = 1;
    },1000)
}

function réponseQ1I20fausse()
{
    question1ile20.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question1ile20.style.visibility="hidden";
        question1ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ1I20vrai()
{
    question1ile20.style.background="green";
    setTimeout(()=>{
        question1ile20.style.visibility="hidden";
        question1ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ2I20fausse()
{
    question2ile20.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question2ile20.style.visibility="hidden";
        question2ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ2I20vrai()
{
    question2ile20.style.background="green";
    setTimeout(()=>{
        question2ile20.style.visibility="hidden";
        question2ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ3I20fausse()
{
    question3ile20.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question3ile20.style.visibility="hidden";
        question3ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ3I20vrai()
{
    question3ile20.style.background="green";
    setTimeout(()=>{
        question3ile20.style.visibility="hidden";
        question3ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ4I20fausse()
{
    question4ile20.style.background="red";
    vie = vie-1
    setTimeout(()=>{
        question4ile20.style.visibility="hidden";
        question4ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function réponseQ4I20vrai()
{
    question4ile20.style.background="green";
    setTimeout(()=>{
        question4ile20.style.visibility="hidden";
        question4ile20.style.background="rgb(56, 32, 5)";
        pageVictoire.style.visibility="visible"
    },1000)
}

function recommencer() {
    window.top.window.scrollTo(0,0);
    window.location.reload();
}