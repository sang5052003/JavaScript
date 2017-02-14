var memberInfo = {
    이름 : "",
    아이디 : "",
    비밀번호 : "",
    이메일이름 : "",
    도메인이름 : "",
    휴대폰번호1 : "",
    휴대폰번호2 : "",
    휴대폰번호3 : "",
    주소 : ""
}
var domainName = "";

window.onload = function(){
    
    //document.getElementById("selectEmail").onclick
}

 function onlyNumber(){
     
     if ((event.keyCode < 48) || (event.keyCode > 57)){
         
         event.returnValue = false;
     }       
}

function checkPasswordOutput(){
    
    if(document.getElementById("passwordCheck").value === ""){
        document.getElementById("passwordCheckString").value = "";
        return;
    }
    
    if(document.getElementById("password").value === document.getElementById("passwordCheck").value){
        document.getElementById("passwordCheckString").value = "비밀번호 일치";
    }
    else{
        document.getElementById("passwordCheckString").value = "비밀번호 불일치";
    }
    
}

function selDomain(){
    var elements = document.getElementById("selectDomain");
    var element = elements.options[elements.selectedIndex];
    
    domainName = element.value;
    
    if(element.value === "직접입력"){
        document.getElementById("domainName").style.display = "inline";
    }
    else{
        document.getElementById("domainName").style.display = "none";
    }
}

function inputDomainName(){
    domainName = document.getElementById("domainName").value;
}

function checkDomain(){
    if(domainName === "" || domainName === "직접입력" || domainName === "선택하세요"){
        return false;
    }
    
    return true;
}

function checkPassword(){
    
    if(document.getElementById("passwordCheckString").value === "비밀번호 불일치" ||
      document.getElementById("passwordCheckString").value === ""){
        return false;
    }
    return true;
}


function checkForm(){
    memberInfo.이름 = document.getElementById("name").value;
    
    //이름체크
    
    memberInfo.아이디 = document.getElementById("id").value;
    
    //id체크
    
    memberInfo.비밀번호 = document.getElementById("password").value;
    
    //비번체크
    var bContinue = checkPassword();
    if(!bContinue){
        alert("비밀번호가 일치 하지 않는다");
        return;
    }
    
    
    //도메인명 체크
    bContinue = checkDomain();
    if(!bContinue){
        alert("도메인 양식이 일치 하지 않는다");
        return;
    }
    
    memberInfo.이메일이름 = document.getElementById("emailName").value;
    memberInfo.도메인이름 = domainName;
    
    
    //이메일이름 체크
    
    var str = "";
    str += memberInfo.이름 + "\n";
    str += memberInfo.아이디 + "\n";
    str += memberInfo.비밀번호 + "\n";
    str += memberInfo.이메일이름 + "@" + memberInfo.도메인이름 + "\n";
    
    //폰번호 설정
    memberInfo.휴대폰번호1 = document.getElementById("phoneNumber1").value;
    memberInfo.휴대폰번호2 = document.getElementById("phoneNumber2").value;
    memberInfo.휴대폰번호3 = document.getElementById("phoneNumber3").value;
    
    str += memberInfo.휴대폰번호1 + " - ";
    str += memberInfo.휴대폰번호2 + " - ";
    str += memberInfo.휴대폰번호3 + "\n";
    
    //
    //console.log(memberInfo.length);
    
    var stringArr = [];
    var check = memberInfo["이름"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["아이디"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["비밀번호"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["이메일이름"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["도메인이름"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["휴대폰번호1"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["휴대폰번호2"] || "none";
    stringArr.push(check);
    console.log(check);
    
    check = memberInfo["휴대폰번호3"] || "none";
    stringArr.push(check);
    console.log(check);
    
    //
    for(var i = 0; i < stringArr.length; i++){
        if(stringArr[i] === "none"){
            alert("공란을 채워주세요");
            return;
        }
    }
    
    alert(str);
}
