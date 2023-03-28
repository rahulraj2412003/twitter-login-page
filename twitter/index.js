var item=document.getElementById("pass");
function call(elem){
    
    if(elem.value.length>0){
       if(elem.value != pass.value){
        document.getElementById("alert").innerText="comform password";
    } else{
        document.getElementById("alert").innerText="";
    }
    }
       }
