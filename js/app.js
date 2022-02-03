const inpElement = document.getElementById('inp')
const ulElement  = document.getElementById('todo-list')
const btnElement = document.getElementById('submit-button')
const rstElement = document.getElementById('reset-button')

let lisArr = []

btnElement.addEventListener('click', function(evt){
  if (inpElement.value !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = inpElement.value;
    lisArr.push(newLi)
    document.querySelector('ul').appendChild(newLi);
    inpElement.value = ''
    inpElement.focus()
  } 
});

rstElement.addEventListener('click', function(evt){
  lisArr.forEach(element => element.remove());
  inpElement.value = ''
  inpElement.focus()
})

ulElement.addEventListener('click', function(evt){
  evt.target.parentNode.removeChild(evt.target)
  let idx = lisArr.indexOf(evt.target)
  lisArr.splice(idx, 1)
  // console.log('whatver', lisArr), testing new array
})

