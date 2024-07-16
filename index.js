


function achu(){
    var k=document.getElementById("s").value
    var sum=1;
for(var h=1;h<=parseInt(k);h++){
    sum=parseInt(sum)*parseInt(h)
}
   document.getElementById("l").innerHTML=parseInt(sum)
}
function anna(){
    var k=document.getElementById("s").value
    if(parseInt(k)%2==0){
        document.getElementById("l").innerHTML="even"
        }
        else{
            document.getElementById("l").innerHTML="odd"
        }

}
function amma(){
    var k=document.getElementById("s").value
    var f=[]
    var q=0
        var w=1
       f.push(q)
       f.push(w)
        for(var i=1;i<=k;i++){
            var c=parseInt(q)+parseInt(w)
            f.push(c)
            q=w
            w=c
            
        }

        document.getElementById("l").innerHTML=f

}
function appa(){
    var k=document.getElementById("s").value
    var boolean=true
    for(var i=2;i<k;i++){
        if(parseInt(k)%parseInt(i)==0){
            boolean=false
        }
    }
    if(boolean==true){
        document.getElementById("l").innerHTML="prime"
    }
    else{
        document.getElementById("l").innerHTML="not"

    }
    
}