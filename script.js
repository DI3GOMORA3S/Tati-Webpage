document.querySelectorAll('.image-container img').forEach(image =>{
image.onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'block';
    document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-imag span').onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'none';    
}

    document.addEventListener("keydown", function(event){
        if (event.key === 'Escape'){
            document.querySelector('.popup-imag').style.display = 'none';       
        }
    });