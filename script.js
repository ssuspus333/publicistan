// Publicistan landing page JS
document.addEventListener('DOMContentLoaded', function(){
  // Current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    })
  })

  // Optional: subtle button click animation
  document.querySelectorAll('.btn-primary').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.animate([
        {transform:'scale(1)'},
        {transform:'scale(.98)'},
        {transform:'scale(1)'}
      ],{duration:200,easing:'ease'})
    })
  })
});
