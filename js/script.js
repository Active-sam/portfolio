const barBtn = document.querySelector('.bar');
const menu = document.querySelector('.main-ul');
const cancelBarBtn = document.querySelector('.cancel');
const resume = document.querySelectorAll('.resumeBtn');


if (barBtn) {
  barBtn.addEventListener('click', () => {
    // alert('clicked');
    menu.classList.add('active');
  })
} 

if (cancelBarBtn) {
  cancelBarBtn.addEventListener('click', () => {
    // alert('clicked');
    menu.classList.remove('active');
  })
}

resume.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('Resume not Available yet!');
  })
})
