function highlight() {
    //Write your code here
for(let i=0;i<text.length;i++){
    text[i].style.backgroundColor='green'
}

}


function return_normal() {
    //Write your code here
    for(let i=0;i<text.length;i++){
        text[i].style.backgroundColor='transparent'
    }
    
}

const text=document.getElementsByTagName('strong')
