

const form = document.getElementsByClassName('inputs')
const createUser =()=> {
if(form[0].value===''&& form[1].value===''){
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'campos incompletos',
       })
}if(form[0].vlaue==='' ||form[1].value===''){
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'campos incompletos'
    })
}else{
   usuario={
      id: form[0].value[0]+form[0].value[3].toUpperCase()+Math.random().toString(36).substring(2,9),
      nombre: form[0].value,
      email:form[1].value,
      password: Math.random().toString(36).substring(2,12)
   }
   console.log(`id: ${usuario.id}`)
}
}

const body = document.getElementById('body')



const showInfo =() => {
   let span = document.getElementById('span')
   let info = document.createElement('span')
   info.className='info'
   span.addEventListener('mouseover', ()=>{
      info.innerHTML='haz clilck para copiar el texto'
      span.appendChild(info)
   })
   span.addEventListener('mouseout', ()=> span.removeChild(info))
}


const changeStyle=()=>{
   body.style.backgroundColor='white'
   body.style.transition='1s'
   body.style.transform='rotate(360deg)'
   body.innerHTML=`<p class='titleChange' id='titleChange'>gracias <span class='userName'>${usuario.nombre.toUpperCase()}</span> por ingresar tus datos <br><br> tu nueva contraseña es <span class='span'id='span'>${usuario.password}</span></p>`
   const span = document.getElementById('span')
   span.addEventListener('click', ()=> {
      navigator.clipboard.writeText(span.textContent)
      alert('texto copiado con exito')
   })
   showInfo()
}
const btn = document.getElementById('btn')
btn.addEventListener('click', (e)=> {e.preventDefault()
   createUser()
   if(form[0].value!='' && form[1].value!=''){
      changeStyle()
   }
  
})
