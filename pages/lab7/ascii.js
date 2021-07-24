window.onload = ()=>{

    let intervaltime=250
    let timer=0
    let frameNum
    let arr=[]
    let countframe=0;
    let draw;
    const animationTextChange = document.querySelector("#animation");
    animationTextChange.onchange = onTextChane;

    function onTextChane(){
        let optionSelected = animationTextChange.value;
        document.querySelector("#text-area").value = ANIMATIONS[optionSelected];
    }

    const start = document.querySelector("#start");
    start.onclick = ()=>{
        document.getElementById("animation").disabled= true;
        document.getElementById("start").disabled= true;
        document.getElementById("stop").disabled= false;

        countframe=0;
        timer=0
        let value = document.querySelector("#text-area").value;
        let isTurbo=document.getElementById("turbo").checked
        arr = value.split("=====");
        frameNum = arr.length;
        if(isTurbo){
            intervaltime=50;
        }
        draw = setInterval(drawAnimation,intervaltime);
    }

    const drawAnimation =()=>{
        countframe = countframe%frameNum;
        document.querySelector("#text-area").value =arr[countframe++];
    }; 

    const stop = document.querySelector("#stop");
    stop.onclick=()=>{
        document.getElementById("animation").disabled = false;
        document.getElementById("stop").disabled= true;
        document.getElementById("start").disabled= false;
        onTextChane();
        clearInterval(draw);
    }

    const fontSizeChange = document.querySelector("#fontsize");
    fontSizeChange.onchange = ()=>{
         let optionSelected = fontSizeChange.value;
         document.querySelector("#text-area").style.fontSize =optionSelected; 
    }

    const turbo = document.querySelector("#turbo");
    turbo.onchange=()=>{
        if(turbo.checked){
            clearInterval(draw)
            draw = setInterval(drawAnimation,50);
        }
        else{
            clearInterval(draw)
            draw = setInterval(drawAnimation,250);
        }
    }
}
