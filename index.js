const img1=document.querySelector(".img1")
const img2=document.querySelector(".img2")
const img3=document.querySelector(".img3")
let img=document.querySelector("#img")
// console.log(img1,img2,img3,img)
img1.onclick=function(){
    img.setAttribute("src","/sekiller/images.jpeg")
}
img2.onclick=function(){
    // img.setAttribute("src","/sekiller/images (1).jpeg")
    img.setAttribute("src","/sekiller/images (1).jpeg")
}
img3.onclick=function(){
    img.setAttribute("src","/sekiller/images (2).jpeg")
}