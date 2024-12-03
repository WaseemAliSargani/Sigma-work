console.log("hello world");

function card(title,cname, views, month, duration, thumbnail){
    var title = document.createElement("div")
    title.innerHTML = "introduction backend ";
    title.setAttribute ("class","title")
    document.querySelector(".container").append(title)

    var cname = document.createElement("div")
    var views = document.createElement("div")
    var month = document.createElement("div")
    var duration = document.createElement("div")
    var thumbnail = document.createElement("img")

    let cont = document.querySelectorAll(".container")
    
}
// card("introduction backend ", "codewithharry" , 580000, "2 month ago" ,"20:45", "pic.jpg"  )