let cbb=document.getElementById("cbb");
let submit=document.getElementById("submit");
let bar=document.getElementById("bar");
cbb.addEventListener("click" ,function(){
    alert("Download Succesfully")
})

submit.addEventListener("click" ,function(){
    let Email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(Email.value=="" && pass.value==""){
    alert("fill proper detail")
}
else{
    alert("logged in")
}
})
 let ul=document.querySelector("ul");
bar.addEventListener("click" ,function(){
    ul.classList.toggle("showData");
    if(ul.className=="showData"){
        bar.className="fa-solid fa-xmark"
    }else{
      bar.className= " fa-solid fa-bars"
    }
})
var typed=new Typed(".Multiple-text",{
    Strings:["Frontend Developer","Web Developer","FullStack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
})