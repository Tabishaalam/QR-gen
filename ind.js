// function generateQRCode() {
//     var text = document.getElementById('text').value;
//     if (text.trim() === '') {
//         alert('Please enter some text to generate QR Code');
//         return;
//     }
//     var qrContainer = document.getElementById('qrcode');
//     qrContainer.innerHTML = '';
//     var qr = new QRious({
//         element: document.createElement('canvas'),
//         value: text,
//         size: 200,
//         background: 'white',
//         foreground: 'black',
//         level: 'H' // Error correction level
//     });
//     qrContainer.appendChild(qr.element);
// }
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
