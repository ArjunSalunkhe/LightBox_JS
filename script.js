{/* <div class="main">
<img id="mainPopImg" src="img/img1.jpg" alt=""> 
<span id="left"> <= </span>
<span id="right"> =></span>
<span id="close">X</span>
</div> */}

// -------------------------------------------------------------------------------------------------------
// main Function Our Start Here......
let mainFun =()=>{
    let div = document.createElement("div");

    div.classList.add("main");

    let htmladd = `

    <img id="mainPopImg" src="" alt=""> 
    <span id="left"> <= </span>
    <span id="right"> =></span>
    <span id="close" ">X</span>

        `;

    div.innerHTML = htmladd;

    document.body.insertAdjacentElement("afterbegin",div)
// --------------------------------------------------------------------------------
// ----------------------------Delete Btn Code...................................
    let del = document.querySelector("#close");

    del.addEventListener("click",()=>{
        let mainClass = document.querySelector(".main");
        let imgPopUp = document.querySelector("#mainPopImg");
        mainClass.style.display = "none";
        imgPopUp.src = "";
    })

// ------------------------------------------------------------------------------------
// -------------------Left And Right Btn Code take Reff from AddEvent...............

        let left = document.querySelector("#left");

        left.addEventListener("click",()=>{
            leftFun();
            checkArrow();
        })
    
    
        let right = document.querySelector("#right");
        right.addEventListener("click",()=>{
            rightFun();
            checkArrow();
        })
    

}
// -------------Main Function End Here.....................
// ----------------------------------------------------------------------------


// --------------Image Reff and  AddEvenet-------------------------------------
let current;
let img = document.querySelectorAll(".img");

for(let i =0; i<img.length; i++){

    let getsrc = img[i].getAttribute("src");
    // console.log(getsrc);
    img[i].style.cursor = "pointer"

    img[i].addEventListener("click",()=>{
        mainFun();
                
        let mainClass = document.querySelector(".main");
        let imgPopUp = document.querySelector("#mainPopImg");
        imgPopUp.src = `${getsrc}`;
        imgPopUp.style.left = "10%";
        imgPopUp.style.top = "10%";
        mainClass.style.display = "block";
        
        cur = imgPopUp.getAttribute("src");
        getCurrImg(cur)   
        checkArrow()
    })
}

// --------------------------------------------------------------
// ------Left Key Btn Code-------------------------------------

function leftFun(){
    getCurrImg();
    current--;
    let incImg1 = img[current];
    let getImgSrc1 = incImg1.getAttribute("src");
    let imgPopUp = document.querySelector("#mainPopImg");
    imgPopUp.src = `${getImgSrc1}`;
    imgPopUp.style.left = "10%";
    imgPopUp.style.top = "10%";
   
}

// --------------------------------------------------------------
// ------right Key Btn Code-------------------------------------

function rightFun(){
    getCurrImg();
    current++;
    let incImg = img[current];
    let getImgSrc = incImg.getAttribute("src");
    let imgPopUp = document.querySelector("#mainPopImg");
    imgPopUp.src = `${getImgSrc}`;
    imgPopUp.style.left = "10%";
    imgPopUp.style.top = "10%";

}
// --------------------------------------------------------------------
// -----------------Getting Image Index Num Here Code.....................

function getCurrImg(val){
    for(let i = 0; i<img.length; i++){
        let imgsrc = img[i].getAttribute("src");
    if(imgsrc === val){
        current = i;
    }        
    }
}
// --------------------------------------------------------------------
// --------checkArow Left or Right code Here ..............................

function checkArrow(){
    getCurrImg();
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");
    if(current === 0){
        left.style.display = "none";
        right.style.display = "block";

    }else if(current ==  img.length-1){
        left.style.display = "block";
        right.style.display = "none";
    }
    else{
        left.style.display = "block";
        right.style.display = "block";
    }
}

// -----------------------------------------------------------------------------------------------------



// End--------------------------------------------------------