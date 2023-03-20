const login=document.querySelector('.login-section');
const loginLink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');

registerlink.addEventListener('click', ()=> {
    login.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    login.classList.remove('active');
})




