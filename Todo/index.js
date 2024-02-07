const todoLists=document.querySelector(".todoLists");
const listValues=document.querySelector(".todoValue");
let toDoListValues=[]

const getToDoValuesLS=()=>{
    return JSON.parse(localStorage.getItem("todovalue")) || [] ;
}


const addToDoListStorage=(value)=>{
  return localStorage.setItem("todovalue",JSON.stringify(value));
}

const showToDoList=()=>{
    toDoListValues=getToDoValuesLS();
    toDoListValues.forEach((element) => {
        const liElement=document.createElement("li")
        liElement.innerHTML=element;
        todoLists.append(liElement);
    });
};

const removeTodoList=(e)=>{
   console.log(e.target.textContent);


   updatedtodolist=toDoListValues.filter((curelementvalue)=>
    curelementvalue !== e.target.textContent
   );
   e.target.remove();
   addToDoListStorage(updatedtodolist);
   
   console.log(updatedtodolist);
};

const addToDoList=(e)=>{
    e.preventDefault();


    toDoListValues=getToDoValuesLS();
    const newtodo=listValues.value.trim();

    listValues.value="";

    if(newtodo.length !=0  && !toDoListValues.includes(newtodo)){
    
        toDoListValues.push(newtodo);
        toDoListValues=[...new Set(toDoListValues)];
        

        addToDoListStorage(toDoListValues);

        const liElement=document.createElement("li")
        liElement.innerHTML=newtodo;
        todoLists.append(liElement);
     

    }

   
};

showToDoList();

document.querySelector(".btn").addEventListener("click",(e)=>{
    addToDoList(e);
});

todoLists.addEventListener("click",(e)=>{
    removeTodoList(e);
});

