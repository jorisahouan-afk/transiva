const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
if(menuButton&&navigation){
  menuButton.addEventListener("click",()=>{
    const open=navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
  });
  navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
document.querySelectorAll("[data-year]").forEach(item=>item.textContent=new Date().getFullYear());
