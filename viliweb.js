window.onload = function(){
    let cartoon1 = document.getElementById("cartoon");
    let movies1 = document.getElementById("movies");
    let record1 = document.getElementById("record");

    let cartoon2 = document.querySelector(".cartoon");
    let movies2 = document.querySelector(".movies");
    let record2 = document.querySelector(".record");

    getNewContent("cartoon")

    cartoon1.addEventListener("click", function (){
        cartoon2.style.display = "block";
        movies2.style.display = "None";
        record2.style.display = "None";
        getNewContent("cartoon")
    })

    movies1.addEventListener("click", function (){
        cartoon2.style.display = "None";
        movies2.style.display = "block";
        record2.style.display = "None";
        getNewContent("movies")
    })

    record1.addEventListener("click", function (){
        cartoon2.style.display = "None";
        movies2.style.display = "None";
        record2.style.display = "block";
        getNewContent("record")
    })

    function getNewContent(videoType, pages=1){
        let videoTypeObject = {
            "cartoon": 0,
            "movies": 1,
            "record": 2,
        }
        let request = new XMLHttpRequest();
        if (request){
            request.open("GET", videoType+".txt", true);
            request.onreadystatechange = function (){
                if (request.readyState === 4){
                    let data = request.responseText.split(",")
                    let ul = document.getElementsByTagName("ul")[videoTypeObject[videoType]]
                    if (ul.children.length < 10){
                        for (let i in data){
                            let newNodeLi = document.createElement("li")
                            newNodeLi.innerHTML = "<p>" + data[i] + "</p>"
                            ul.appendChild(newNodeLi)
                        }
                    }
                    // 在这个地方生成相应的li节点
                }
            }
            request.send(null)
        }
    }
}
