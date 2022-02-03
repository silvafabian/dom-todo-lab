const inpElement = document.getElementById('inp')
const ulElement = document.getElementById('todo-list')
const btnElement = document.getElementById('submit-button')

btnElement.addEventListener('click', function(evt){
  
    if (inpElement.value !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = inpElement.value;
    document.querySelector('ul').appendChild(newLi);
    inpElement.value = ''
    inpElement.focus()
  } 
})