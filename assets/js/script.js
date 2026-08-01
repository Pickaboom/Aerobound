document.querySelectorAll('.faq-q').forEach(button=>{button.addEventListener('click',()=>button.closest('.faq-item').classList.toggle('open'))});
document.querySelectorAll('[data-menu]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
