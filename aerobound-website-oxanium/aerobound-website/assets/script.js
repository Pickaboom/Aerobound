
document.querySelectorAll('.faq-q').forEach(button=>{
  button.addEventListener('click',()=>{
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});
document.getElementById('year')?.append(new Date().getFullYear());
