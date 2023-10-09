const btn = document.querySelector('[data-form-btn]')
const createTask=(evento)=>{
    evento.preventDefault();
    const input= document.querySelector('[data-form-input]');
    // console.log(input.value);
    const value=input.value
    const list = document.querySelector('[data-list]');
    const task =document.createElement('li');
    task.classList.add('card')
    input.value='';
    const taskContent = document.createElement('div')

};

btn.addEventListener('click',createTask);
console.log(btn);
