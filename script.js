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

  function toggleFaq(button) {
    const item = button.parentElement;
    
    // Toggle active class on the parent
    item.classList.toggle('active');
    
    // Optional: Close others when one is opened
    document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });
}
}

// Add this to your script.js if it doesn't already exist
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show the targeted page
    document.getElementById('page-' + pageId).classList.add('active');
}