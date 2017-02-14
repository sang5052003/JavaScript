window.onload = function(){
    initialization();
    addEvent();
}

var currentIndex = 0;
var imageList = [
    "./images/image01.jpg",
    "./images/image02.jpg",
    "./images/image03.jpg",
    "./images/image04.jpg",
    "./images/image05.jpg",
];

function initialization(){
    document.getElementById("photo").src = imageList[0];
    document.getElementById("btnBefore").style.display = "none"; //안보이게 하기
}

function addEvent(){
    var btnBefore = document.getElementById("btnBefore");
    var btnNext = document.getElementById("btnNext");
    
    btnBefore.onmouseover = function(){
        btnBefore.src = "./images/before_over.png";
    }
    
    btnBefore.onmouseout = function(){
        btnBefore.src = "./images/before.png";
    }
    
    btnNext.onmouseover = function(){
        btnNext.src = "./images/next_over.png";
    }
    
    btnNext.onmouseout = function(){
        btnNext.src = "./images/next.png";
    }
    
    btnBefore.onclick = function(){
        currentIndex--;
        document.getElementById("photo").src = imageList[currentIndex];
        if(currentIndex === 0){
            btnBefore.style.display = "none"; //그림이 안보이게
        }
        
        //동일결과
        btnNext.style.display = "inline"; //
        //btnNext.style.display = "block";
        
    }
    
    btnNext.onclick = function(){
        currentIndex++;
        document.getElementById("photo").src = imageList[currentIndex];
        if(currentIndex === imageList.length - 1){
            btnNext.style.display = "none";
        }
        
        btnBefore.style.display = "block";
        //btnBefore.style.display = "inline";
    }
}
