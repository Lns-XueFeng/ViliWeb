window.onload = function(){
    let cartoon1 = document.getElementById("cartoon");
    let movies1 = document.getElementById("movies");
    let record1 = document.getElementById("record");

    let cartoon2 = document.querySelector(".cartoon");
    let movies2 = document.querySelector(".movies");
    let record2 = document.querySelector(".record");

    cartoon1.addEventListener("click", function (){
        cartoon2.style.display = "block";
        movies2.style.display = "None";
        record2.style.display = "None";
    })

    movies1.addEventListener("click", function (){
        cartoon2.style.display = "None";
        movies2.style.display = "block";
        record2.style.display = "None";
    })

    record1.addEventListener("click", function (){
        cartoon2.style.display = "None";
        movies2.style.display = "None";
        record2.style.display = "block";
    })
}
