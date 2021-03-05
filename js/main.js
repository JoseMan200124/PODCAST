let productIndex = 0

let productInfos = document.querySelectorAll('.product-info')

setTimeout(() =>{
    productInfos[productIndex].classList.add('active');
}, 200);

let isSliding = false

slide=()=>{
    if(isSliding) return
    isSliding = true
    let currProduct = document.querySelector('.product-info.active')
    currProduct.classList.remove('active')
    productIndex = productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1
    productInfos[productIndex].classList.add('active')

    
    let listItems = document.querySelectorAll('.slide')
    let slider = document.querySelectorAll('.slider')
    
    let reverseItems = Array.from(listItems).slice().reverse()
    
    left = reverseItems[0].offsetLeft + 'px'
    height = reverseItems[0].offsetHeight + 'px'
    width = reverseItems[0].offsetWidth + 'px' 
        zIndex = reverseItems[0].style.zIndex 
    
    reverseItems.forEach((e1, index)=>{
        if(index < listItems.length - 1){
            e1.style.left = reverseItems[index + 1].offsetLeft + 'px'
           
            e1.style.height = reverseItems[index + 1].offsetHeight + 'px'
            
            e1.style.width = reverseItems[index + 1].offsetWidth+ 'px'
            
            e1.style.zIndex = reverseItems[index + 1].style.zIndex
            
            e1.style.transform = 'unset'
            e1.style.opacity = 1
            
        }
        if(index == listItems.length - 1){
            e1.style.transform = 'scale(1.5)'
            e1.style.opacity = '0'
            
            let cln = e1.cloneNode(true)
            setTimeout(()=>{
             e1.remove()
                cln.style.transform = 'scale(0)'
                cln.style.left = left
                cln.style.height = height
                cln.style.width = width
                cln.style.opacity = '0'
                cln.style.zIndex = '0'
                cln.style.animation = 'unset'
                
                slider.appendChild(cln)
                isSliding = false
            }, 1000);
        }
    })
    
}
let slideControl = document.querySelector('.slide-control')
slideControl.onclick = () =>{
   slide() 
}


