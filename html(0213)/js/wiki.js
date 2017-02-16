//페이지 로드가 끝나면 함수를 실행하라
window.onload = function()
{
    // = search -> 함수자체를 집어넣는다(함수포인터?)
    // = search() -> 함수의 리턴값을 대입
    document.getElementById("serachButton").onclick = search;
}

function search()
{
    window.open("https://ko.wikipedia.org/wiki/" + document.getElementById("searchText").value)
}