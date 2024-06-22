
let a=document.getElementById('text')
let b=document.getElementById('btn')
let c=document.getElementById('qrcode') 
let d=document.getElementById('i')

    b.addEventListener('click',()=>{
        if(a.value==""){
            a.style.boxShadow="0px 0px 3px 3px red"
            d.style.display='none'
        }
        else{
            i.style.display='block'
        }
          
    d.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+a.value;
    c.appendChild(i)
    a.value=""
    })
