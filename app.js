const rock = document.getElementById('rock')
const pop = document.getElementById('pop')
const jazz = document.getElementById('jazz')
const clasica = document.getElementById('clasica')

const body = document.querySelector('body')

rock.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/rock.jpg')";
}
)

pop.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/pop.jpg')";
}
)

jazz.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/Jazz.png')";
}
)
clasica.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/clasica.avif')";
}
)