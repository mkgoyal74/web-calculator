function calc()
{
   if(document.getElementById("input").hasAttribute("disabled")){
     document.getElementById("input").removeAttribute("disabled");
     document.getElementById("btn1").style.backgroundColor="red";
     let res =document.getElementById("input");
     let buttons = document.querySelectorAll('.btn');
     buttons.forEach((btn)=>{
      btn.removeAttribute("disabled");
        btn.addEventListener("click", () => {
            if(btn.innerText=="C"){
             document.getElementById("input").value=""}
             else if(btn.name=="x")
             {
                 res.value=res.value.slice(0,-1);
             }
             else if(btn.innerText=="+/-")
             {
                if(res.value<0)
                res.value=res.value.slice(1);
                else
                res.value="-"+res.value;
             }
             else if(btn.innerText=="=")
             {
                res.value=eval(res.value);
                
             }
             else{
               res.value=res.value+btn.innerText;
             }
    });
});
}
   else{
    window.location.reload();
   }
}