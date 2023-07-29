document.querySelectorAll('.image-container img').forEach(image =>{
image.onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'block';
    document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-imag .cross').onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'none';    
}

document.addEventListener("keydown", function(event){
    switch(event.key) {
        case 'Escape':
            document.querySelector('.popup-imag').style.display = 'none';
        break;
    }
});

document.querySelector('.popup_imag .lft-arrow').onclick = () =>{
     alert("gil");
}