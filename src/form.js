import * as httpUtil from './httpUtil';
class Form{
	constructor(){
    this.form = document.createElement('form');
    this.element1;
    this.element3;
    this.element2;
    this.element4;
    this.element5;
    this.element6;
	}
	create() {
	    // var form = document.createElement("form");
      this.element1 = document.createElement("input"); 
      this.element1.setAttribute('id','inputId');

	    this.element3 = document.createElement("input"); 
	    this.element3.setAttribute('id','description');


	    this.element2 = document.createElement("button");  
	    this.element2.innerHTML='submit';

      this.element5=document.createElement("button");
      this.element5.innerHTML='update';
      this.element5.style.display='none';

      this.element6=document.createElement('input');
      this.element6.setAttribute('id','hiddenId');
      this.element6.type='hidden';



	    this.form.method = "POST";
	    // form.action = "login.php";   

	   // this.element1.value="";
	    this.element1.name="userName";
	    this.form.appendChild(this.element1);  

	    //this.element3.value="";
	    this.element3.name="description";
	    this.form.appendChild(this.element3);  

	    this.element2.type='text';
	    this.element2.name="btnSubmit";
      this.element2.value = "Add New";
      this.element2.style.width = 100;
      this.element2.style.height = 30;
      this.element2.addEventListener('click',(e)=>{this.testFunction(e)});
      this.element5.addEventListener('click',(e)=>{this.putFunction(e)});
	    this.form.appendChild(this.element2);
      this.form.appendChild(this.element5);
      this.form.appendChild(this.element6);
	    // document.body.appendChild(form);

	    // this.form.submit();
	}
  testFunction(e){
  	debugger;
  	e.preventDefault();

 this.postForm();



  }
  putFunction(e){
  
    e.preventDefault();

 this.putForm();



  }

  postForm(){
  	debugger;
  let baseUrl = 'https://todo-simple-api.herokuapp.com';

  let postUrl = `${baseUrl}/todos`;
  	let name=document.getElementById('inputId').value;
  	let description=document.getElementById('description').value;
  	let data={
      "title":name,
  	  "description":description
    }

  
  	httpUtil.post(postUrl,data).then(response=>{
    let todo=response.data.data;

    let div=document.createElement('div');
    //div.setAttribute('id','main-div'+i);
    div.style.clear='both';
    div.id = todo.id;

    let div1 = document.createElement('div');
    div1.innerHTML = todo.id;
    div1.style.float='left';
    div1.style.width=50+'px';
   
    let div2=document.createElement('div');


    // div.setAttribute('class','main-div');
    
    div2.innerHTML=todo.description;
    div2.style.float='left';
     div2.style.width=100+'px';
    let div3=document.createElement('div');

    div3.style.width=400+'px';
    div3.innerHTML=todo.title;
    div3.style.float='left';

    let crossButton=document.createElement('button');
    crossButton.innerHTML='X';
    crossButton.addEventListener('click',(e)=>{
        deleteDate(e,todo.id)
   })

    let updateBtn=document.createElement('button');
    updateBtn.innerHTML='Update';

    updateBtn.addEventListener('click',(e)=>{
        updateButton(e,todo)
    })
     


    document.getElementById(wrapper.id).appendChild(div);

    document.getElementById(div.id).appendChild(div1);
    document.getElementById(div.id).appendChild(div3);
    document.getElementById(div.id).appendChild(div2);
    document.getElementById(div.id).appendChild(crossButton);
    document.getElementById(div.id).appendChild(updateBtn);
    this.element1.value="";
    this.element3.value="";


  console.log('something posted');
 });

}



  putForm(){
   let baseUrl = 'https://todo-simple-api.herokuapp.com';
    let url = `${baseUrl}/todos`;
    let name=document.getElementById('inputId').value;
    let description=document.getElementById('description').value;
    let id=document.getElementById('hiddenId').value;
    let data={
      "title":name,
      "description":description
    }
    httpUtil.put(url,data,id).then(response=>{
      let todo=response.data.data;
      let divId=response.data.data.id;
    
      document.getElementById(`id${divId}`).innerHTML=todo.id;
      document.getElementById(`description${divId}`).innerHTML=todo.description;
      document.getElementById(`title${divId}`).innerHTML=todo.title;
      this.element5.style.display='none';
      this.element2.style.display='inline';
      this.element1.value="";
      this.element3.value="";
    });

   }
}
export default Form;