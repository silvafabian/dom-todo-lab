const inpElement = document.getElementById('inp')
const ulElement  = document.getElementById('todo-list')
const btnElement = document.getElementById('submit-button')
const rstElement = document.getElementById('reset-button')

btnElement.addEventListener('click', function(evt){
  if (inpElement.value !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = inpElement.value;
    document.querySelector('ul').appendChild(newLi);
    inpElement.value = ''
    inpElement.focus()
  } 
});

// rstElement.addEventListener('click', function(evt){

// })

ulElement.addEventListener('click', function(evt){
  evt.target.parentNode.removeChild(evt.target)
})