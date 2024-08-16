function display(value){
    let displaybox=document.querySelector(".displaybox");
    if(value=='C'){
        displaybox.innerHTML="";
    }
    else if(value=='='){
        displaybox.innerHTML=eval(displaybox.innerHTML);
    }
    else{
        displaybox.innerHTML+=value;
    }
}