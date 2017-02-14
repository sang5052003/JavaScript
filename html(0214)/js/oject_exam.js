//리터럴 객체를 만들어놓고, 서버에서 여기로 날아오면
//json을 변환했다 라는 전제
var user = {
    id : "Nextree",
    name : "진강사",
    gender : "F",
    email : "sang5052003@naver.com",
    address : "서울시 관악구 신림동..."
}

window.onload = function(){
    inputInfos();
    
}

function inputInfos(){
    document.getElementById("txtId").value = user.id;
    document.getElementById("txtName").value = user.name;
    
    document.getElementById("txtEmail").value = user.email;
    document.getElementById("txtAddress").value = user.address;
    
    if(user.gender === "M"){
        document.getElementById("rdoGenderMale").checked = true;//"checked";    
    }
    else{
        document.getElementById("rdoGenderFemale").checked = true;
    }
    
    

}
            