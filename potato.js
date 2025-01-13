window.onload = function() {
    const menu2 = document.getElementById("menu2");
    const liArrays = menu2.getElementsByTagName("li");
    for(var i = 0; i < liArrays.length; i++){
        var li = liArrays[i];
        li.style.color = "blue";
    }
}