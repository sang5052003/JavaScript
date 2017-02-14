var book1 = {
    제목 : "HeadFirst Java",
    출판사 : "한빛미디어",
    저자 : "케이시 시에라,버트 베이츠 공저",
    이미지 : "http://image.yes24.com/goods/1809610/95x0"
}

var book2 = {
    제목 : "이것이 자바다",
    출판사 : "한빛미디어",
    저자 : "신용권",
    이미지 : "http://image.yes24.com/goods/15651484/95x0"
}

var book3 = {
    제목 : "자바의 신",
    출판사 : "로드북",
    저자 : "이상민 저",
    이미지 : "http://image.yes24.com/goods/8533700/95x0"
}

var bookArr = [];
bookArr.push(book1);
bookArr.push(book2);
bookArr.push(book3);

//window.onload = function(){
//    
//    //document.getElementById("bookList").onclick = selBook();
//    
//}

function selBook(){
    
    var elements = document.getElementById("bookList");
    var idx = elements.selectedIndex - 1;
    if(idx < 0){
        idx = 0;
    }
    
    document.getElementById("title").value = bookArr[idx].제목;
    document.getElementById("publisher").value = bookArr[idx].출판사;
    document.getElementById("author").value = bookArr[idx].저자;
    document.getElementById("bookImg").src = bookArr[idx].이미지;
}
