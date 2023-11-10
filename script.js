

//Examples
// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel


let btn =document.getElementById("btn")
btn.onclick = function delDel(){
    let str =document.getElementById("matn").value
    let natija =document.getElementById("par")
    if(str.slice(1,4)== "del"){
      return natija.innerHTML=str.charAt(0) + str.slice(4) 
    }
   else{
    return natija.innerHTML=str
   }

 }