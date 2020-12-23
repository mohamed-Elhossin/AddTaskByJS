const inputData = document.getElementById('names');
const addBtn = document.getElementById('add');
const result = document.getElementById('result');
const nodata = document.getElementById('nodata');
const showbtn = document.getElementById('showModel');
const model = document.getElementById('model');
const closebtn = document.getElementById('close');

let close = () => {
    model.style.display = 'none'
}
closebtn.addEventListener('click', close)
let showModel = () => {
    model.style.display = 'block'
}

showbtn.addEventListener('click', showModel)
 
let displayTable = ()=>{
    if(result.childElementCount <= 2 ){
        result.style.display = 'none'
    }else{
        result.style.display = 'block'
    }
}

result.style.display = 'none';
let getNames = () => {
  
    const newName = inputData.value;
    if (newName.trim() == '' || newName.length < 5 || newName.length > 20) {
        alert('Error ! Enter Valid Data')
    } else {
        result.style.display = 'block'
        nodata.remove()
        result.innerHTML += `<tr> 
        <td>${newName} 
        <button class="delete btn btn-sm btn-danger"> Delete</button>
       </td> </tr> `;
        close();
        inputData.value = ''

    }
}
addBtn.addEventListener('click', getNames)

document.addEventListener('click', function (e) {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        displayTable();
    }
})