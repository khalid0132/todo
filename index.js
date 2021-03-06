

// First of all selecting the elements item
let input = document.querySelector('input');
let btn = document.querySelector('.btn1');

//adding click/mouseover/ mouseout by useing addEventListener and creating a annonymous function
btn.addEventListener('click', addList)

function addList() {
   let notCompleted = document.querySelector('.notCompleted'); // selecting notCompleted item
   let completed = document.querySelector('.completed'); // selecting Completed item

   // Now we gonna create new list, input and button 
   let newLi = document.createElement('li');
  
   let newInput = document.createElement('input');
   // newInput.innerText = 'Din syssla1';
  
   let changeBtn = document.createElement('button');
   changeBtn.innerHTML = 'Change';
  
   let checkBtn = document.createElement('button');
   checkBtn.innerHTML = 'Complete';
  
   let delBtn = document.createElement('button');
   delBtn.innerHTML = 'Delete';

   
   if(input.value !== ''){
      newLi.textContent = input.value;
      newLi.value = 'newInput';
      // newLi.appendChild(newInput);
      notCompleted.appendChild(newLi).value;
      // notCompleted.appendChild(newInput).value;
      
      // create child inside newLi by using newLi.appendChild();
      // newLi.appendChild(newInput);
      newLi.appendChild(changeBtn);
      newLi.appendChild(checkBtn);
      newLi.appendChild(delBtn);
   }
  
   // Now what will happen after clicking button (change)


   changeBtn.addEventListener('click', function () {
      let parent = this.parentNode;
      // parent.change();
      // parent.check();
      // parent.remove();
      // completed.appendChild(parent);
      changeBtn.style.display = 'newLi.textContent';
     
   })

   // Now clicking check button, jumping to complete button with remove and change button
   checkBtn.addEventListener('click', function () {
      let parent = this.parentNode;
      // parent.change();
      parent.remove();
      completed.appendChild(parent);
      checkBtn.style.display = 'none';
   })

   // Now clicking remove button, then will remove whole item 
   delBtn.addEventListener('click', function () {
      let parent = this.parentNode;
      parent.remove();
   })

}
