//페이지 로드가 끝나면 함수를 실행하라
var arr1 = new Array(8);// ['1\n', '2\n', '3\n', '4\n'];
var arr2 = new Array(8);// ['5\n', '6\n', '7\n', '8\n'];
window.onload = function()
{
    document.getElementById("leftBtn").onclick = toLeft;
    document.getElementById("rightBtn").onclick = toRight;
    
    arr1[0] = '1\n';
    arr1[1] = '2\n';
    arr1[2] = '3\n';
    arr1[3] = '4\n';
    
    arr2[0] = '5\n';
    arr2[1] = '6\n';
    arr2[2] = '7\n';
    arr2[3] = '8\n';
    
    //var arr1 = ['1', '2', '3', '4'];
    var element1 = document.getElementById("textArea01");
    for(var i = 0; i < arr1.length; i++)
    {
        if(arr1[i] !== undefined)
        {
            element1.value += arr1[i];        
        }
        
    }
    
    var element2 = document.getElementById("textArea02");
    for(var i = 0; i < arr2.length; i++)
    {
        if(arr2[i] !== undefined)
        {
            element2.value += arr2[i];        
        }
    }
}

function toLeft()
{
    var element1 = document.getElementById("textArea01");
    var element2 = document.getElementById("textArea02");
    
    var lastNum;
    for(var i = arr2.length - 1; i >= 0 ; i--){
        if(arr2[i] !== undefined){
            lastNum = arr2[i];
            arr2[i] = undefined;
            break;
        }
    }
    
    for(var i = 0; i < arr1.length ; i++){
        if(arr1[i] === undefined){
            arr1[i] = lastNum;
            break;
        }
    }
    
    element1.value = "";
    element2.value = "";
    
    for(var i = 0; i < arr1.length; i++)
    {
        if(arr1[i] !== undefined)
        {
            element1.value += arr1[i];        
        }
    }
    
    
    for(var i = 0; i < arr2.length; i++)
    {
        if(arr2[i] !== undefined)
        {
            element2.value += arr2[i];        
        }
    }
}

function toRight()
{
    var element1 = document.getElementById("textArea01");
    var element2 = document.getElementById("textArea02");
    
    var lastNum;
    for(var i = arr1.length - 1; i >= 0 ; i--){
        if(arr1[i] !== undefined){
            lastNum = arr1[i];
            arr1[i] = undefined;
            break;
        }
    }
    
    for(var i = 0; i < arr2.length ; i++){
        if(arr2[i] === undefined){
            arr2[i] = lastNum;
            break;
        }
    }
    
    element1.value = "";
    element2.value = "";
    
    for(var i = 0; i < arr1.length; i++)
    {
        if(arr1[i] !== undefined)
        {
            element1.value += arr1[i];        
        }
    }
    
    
    for(var i = 0; i < arr2.length; i++)
    {
        if(arr2[i] !== undefined)
        {
            element2.value += arr2[i];        
        }
    }
}