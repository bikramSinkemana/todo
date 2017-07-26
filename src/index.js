
import * as httpUtil from './httpUtil';
import Form from './Form';


const BASE_URL = 'https://todo-simple-api.herokuapp.com';

const TODO_URL = `${BASE_URL}/todos`;

const toUrl= `${BASE_URL}/todos`;

let wrapper=document.createElement('div');
wrapper.setAttribute('id','wrapper');
 // document.getElementsByTagName('body')[0].appendChild(wrapper);

let form=new Form();
form.create();

httpUtil.get(TODO_URL).then(response => {
  
	let i=0;
  response.data.data.forEach((todo) => {
  // httpUtil.post(TODO_URL,todo);
  


  let div=document.createElement('div');
	div.setAttribute('id',`main-div${todo.id}`);
  div.style.clear='both';
   // div.id = todo.id;

  let div1 = document.createElement('div');
  div1.innerHTML = todo.id;
  div1.style.float='left';
  div1.style.width=50+'px';
  div1.setAttribute('id',`id${todo.id}`);
 
  let div2=document.createElement('div');


    // div.setAttribute('class','main-div');
    
  div2.innerHTML=todo.description;
  div2.setAttribute('id',`description${todo.id}`);
  div2.style.float='left';
  div2.style.width=100+'px';
  let div3=document.createElement('div');

  div3.style.width=400+'px';
  div3.innerHTML=todo.title;
  div3.setAttribute('id',`title${todo.id}`);
  div3.style.float='left';

  let crossButton=document.createElement('button');
  crossButton.innerHTML='X';

  crossButton.addEventListener('click',(e)=>{
    deleteDate(e,todo.id,div.id)
  })

   let updateBtn=document.createElement('button');

  updateBtn.innerHTML='Update';

  updateBtn.addEventListener('click',(e)=>{
    updateButton(e,todo)
  })
     

  document.getElementsByTagName('body')[0].appendChild(wrapper);

  document.getElementById(wrapper.id).appendChild(div);

  document.getElementById(div.id).appendChild(div1);
  document.getElementById(div.id).appendChild(div3);
  document.getElementById(div.id).appendChild(div2);
  document.getElementById(div.id).appendChild(crossButton);
  document.getElementById(div.id).appendChild(updateBtn);
    i++;
  })
})

function deleteDate(e,value,id) {
  httpUtil.remove(TODO_URL,value).then(response=>{
   document.getElementById('wrapper').removeChild(document.getElementById(id));

  })
  // body...
}
function updateButton(e,todo){
  form.element1.value=todo.title;
  form.element3.value=todo.description;
  form.element2.style.display='none';
  form.element5.style.display='inline';
  form.element6.value=todo.id;
 
}

wrapper.appendChild(form.form);



