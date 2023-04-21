var x=0;
//eventos de botoes de desconto
function cinco(){
    x=5;
    return bill(),people();
}
function dez(){
    x=10;
    return bill(),people();
}
function quinze(){
    x=15;
    return bill(),people();
}
function vinteCinco(){
    x=25;
    return bill(),people();
}
function cinquenta(){
    x=50;
    return bill(),people();
}
function custom(){
   var custom=document.getElementById("custom").value;
   x=custom;
   return bill(),people();

}
// calculo 
function people(){
    var people=document.getElementById("people").value;
    var bruto=document.getElementById("bill").value;
    people=Number(people);
    bruto=Number(bruto);
    final=bruto*x/100;
    var i=bruto+final;
    i=parseInt(i/people);
    if(people==false){
        document.getElementById("total").innerHTML="00"
    }else{
    document.getElementById("total").innerHTML=i;
    }
 return bill();
}
function bill(){
    var input=document.getElementById("bill").value;
    var peopleB=document.getElementById("people").value;
    input=Number(input);
    peopleB=Number(peopleB);
    input=input*x/100;
    if(input==false||null){

    }else{
        if(peopleB==false){
    document.getElementById("gorgeta").innerHTML=parseInt(input)
}else{
    document.getElementById("gorgeta").innerHTML=parseInt(input/peopleB)
}
 }
}
//reset
function reset(){
    document.getElementById("bill").value=null;
     document.getElementById("people").value=null;
      document.getElementById("custom").value=null;
      document.getElementById("total").innerHTML="00"
      document.getElementById("gorgeta").innerHTML="00"
    return bill(),people()
}