

const form = document.getElementsByClassName('inputs')
const createUser =()=> {
if(form[0].value===''&& form[1].value===''){
   alert('debes ingresar datos')
}if(form[0].vlaue==='' ||form[1].value===''){
   alert('debes ingresar datos')
}else{
   usuario={
      id: form[0].value[0]+form[0].value[3].toUpperCase()+Math.random().toString(36).substring(2,9),
      nombre: form[0].value,
      email:form[1].value,
      password: Math.random().toString(36).substring(2,12)
   }
}
console.log(`id: ${usuario.id}`)
}

const body = document.getElementById('body')

const changeStyle=()=>{
   body.style.backgroundColor='white'
   body.style.transition='1s'
   body.style.transform='rotate(360deg)'
   body.innerHTML=`<h1 class='titleChange'>gracias ${usuario.nombre} por ingresar tus datos <br> tu nueva contraseña es <span class='span'id='span' >${usuario.password}</span></h1>`
   const span = document.getElementById('span')
   span.addEventListener('click', ()=> {
      navigator.clipboard.writeText(span.textContent)
      alert('texto copiado con exito')
   })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', (e)=> {e.preventDefault()
   createUser()
   if(form[0].value!='' && form[1].value!=''){
      changeStyle()
   }
  
})


