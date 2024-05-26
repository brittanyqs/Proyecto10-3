document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault(e);
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            windows.scrollTo({
                top:target.offsetTop-document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            })
        
    })
})

    



