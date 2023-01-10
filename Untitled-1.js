
let total=document.getElementById('total');

let category=document.getElementById('category');
let submit=document.getElementById('submit');
let datapro;
if(localStorage.ptoduct !=null){
    datapro =JSON.parse(localStorage.ptoduct)
}else{
    datapro=[];
}
submit.onclick=function()
{
    let newpro={
        title:title.value,
        category:category.value,
    }
    if(newpro.count >1 ){
        for(let i=0;i <newpro.count;i++){
            datapro.push(newpro);
        }
    }else{
        datapro.push(newpro);
    }
    localStorage.setItem('ptoduct', JSON.stringify(datapro))
    cleardata();
    showdata();
}
function cleardata(){
title.value='';
category.value='';
}
function showdata(){
let table='';
for(let i =0;i<datapro.length;i++){
    table +=`
    <tr>
     <th>${i}</th>
     <th>${datapro[i].title}</th>
 
     <th>${datapro[i].category}</th>
   
     <th><button onclick="deletdata( ${i} )" id="delete">delete</button></th>
    </tr>`
    
}
document.getElementById('tbody').innerHTML =table;




}
showdata()















//delete
function deletdata(i){

    datapro.splice(i,1);
    localStorage.ptoduct =JSON.stringify(datapro);
    showdata()
}
