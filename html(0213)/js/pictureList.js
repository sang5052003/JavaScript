var imgArr = new Array("./images/image01.jpg",
        "./images/image02.jpg",
        "./images/image03.jpg",
        "./images/image04.jpg");

var index = 0;

//페이지 로드가 끝나면 함수를 실행하라
window.onload = function()
{
    document.getElementById("left").onclick = toLeft;
    document.getElementById("right").onclick = toRight;
}

function toLeft()
{
    if(index > 0){
        index--;
    }
    document.getElementById("currentImg").src = imgArr[index]; 
}
//display mode inline block(화살표 모양)
function toRight()
{
    if(index < imgArr.length - 1){
        index++;
    }
    document.getElementById("currentImg").src = imgArr[index];
}