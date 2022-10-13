window.onload = function(){
    let cartoon1 = document.getElementById("cartoon");
    let movies1 = document.getElementById("movies");
    let record1 = document.getElementById("record");

    let cartoon2 = document.querySelector(".cartoon");
    let movies2 = document.querySelector(".movies");
    let record2 = document.querySelector(".record");

    getNewContent("cartoon")

    cartoon1.addEventListener("click", function (){
        let pages = document.querySelector(".pages");
        pages.setAttribute("data-page", "0");

        cartoon2.style.display = "block";
        movies2.style.display = "None";
        record2.style.display = "None";
        getNewContent("cartoon")
    })

    movies1.addEventListener("click", function (){
        let pages = document.querySelector(".pages");
        pages.setAttribute("data-page", "0");

        cartoon2.style.display = "None";
        movies2.style.display = "block";
        record2.style.display = "None";
        getNewContent("movies")
    })

    record1.addEventListener("click", function (){
        let pages = document.querySelector(".pages");
        pages.setAttribute("data-page", "0");

        cartoon2.style.display = "None";
        movies2.style.display = "None";
        record2.style.display = "block";
        getNewContent("record")
    })

    // ajax更新数据
    function getNewContent(videoType, pages=0){
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
                    let data = request.responseText.split(",");
                    if (data.length < pages){
                        return;
                    }
                    let sliceData = data.slice(pages, pages+10);
                    console.log(sliceData)
                    let ul = document.getElementsByTagName("ul")[videoTypeObject[videoType]];
                    if (ul.children.length < 10){
                        console.log(1)
                        for (let i in sliceData){
                            let newNodeLi = document.createElement("li");
                            newNodeLi.innerHTML = "<p>" + sliceData[i] + "</p>";
                            ul.appendChild(newNodeLi);
                        }
                    }
                }
            }
            request.send(null)
        }
    }

    // 点击下一页的ajax显示
    let pages = document.querySelector(".pages");
    pages.onclick = function (){
        let dataPage = this.getAttribute("data-page");
        this.setAttribute("data-page", parseInt(dataPage)+10)
        let nowCount = this.getAttribute("data-page");
        console.log(nowCount)
        if (document.defaultView.getComputedStyle(cartoon2, null).display === "block"){
            let ul = document.querySelectorAll("ul")[0];
            ul.innerHTML = ""
            getNewContent("cartoon", parseInt(nowCount));
        }
        if (document.defaultView.getComputedStyle(movies2, null).display === "block"){
            console.log(2323)
            let ul = document.querySelectorAll("ul")[1];
            ul.innerHTML = ""
            getNewContent("movies", parseInt(nowCount));
        }
        if (document.defaultView.getComputedStyle(record2, null).display === "block"){
            let ul = document.querySelectorAll("ul")[2];
            ul.innerHTML = ""
            getNewContent("record", parseInt(nowCount));
        }
    }
}
