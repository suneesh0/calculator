function del(){
    let num = document.getElementById('input').value;
    let str = num.toString();
    let str1 = str.substring(0,str.length - 1);
    document.getElementById('input').value = str1;
}


function validate(){
    let num = document.getElementById('input').value;
    let val = eval(num);
    document.getElementById('input').value = val;
}

function vis(n){
    let btn = document.querySelector('.disp');
    if(n==1){
        btn.style.display = "contents"
    }
    else{
        btn.style.display = "none"
    }
}