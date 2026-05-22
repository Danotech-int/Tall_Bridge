function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+id).classList.add("active");
  document.querySelectorAll(".nav-links a").forEach(a=>a.classList.remove("active"));
  var n=document.getElementById("nav-"+id);
  if(n) n.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function toggleCard(id){
  var card=document.getElementById("card-"+id);
  card.classList.toggle("open");
}
function toggleFaq(btn){
  btn.parentElement.classList.toggle("open");
}