let submitbtn = document.querySelector('.submitbtn');
let input = document.querySelector('input');
let list = document.querySelector('ul');
submitbtn.addEventListener('click' , () => {
    let formValue = input.value;
    if(formValue.length !==0){
       // create a new list item.
       // put the value of li same as input value.
       // add that new li to list of items.
       let newLi = document.createElement('li');
       newLi.textContent = formValue;
       list.appendChild(newLi); 

    }
});