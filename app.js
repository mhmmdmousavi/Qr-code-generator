const input = document.getElementById('input')
const generate_btn = document.getElementById('generate_btn')


generate_btn.addEventListener("click" , () => {
    const input_value = input.value
    create_QR(input_value)
    console.log(input_value)
})


function create_QR(input_value) {
    
    const qrcode_src = `https://api.qrserver.com/v1/create-qr-code/?data=${input_value}&amp;size=150x150`
    const img = document.createElement("img")
    img.src = qrcode_src
    img.alt = "qr code"

    console.log(img);
    
    console.log(qrcode_src)
    const container = document.getElementById('main-div1-div')
    container.innerHTML ='';
    container.appendChild(img)
}

//  async function getdata(input_value) {
//     try {
//         const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input_value}`)
        
//         const src = response.url
//         return src
//     } 
//     catch (error) {
//         console.log(error);
        
//     }
//  }

