import React from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css'

export default function Login() {
  const [dataForm,setDataForm] = React.useState({
    username : "",
    password : ""
  })
 

  function handleEvent(event){
    // console.log(event.target.name,event.target.value)
    setDataForm({
      ...dataForm,
      [event.target.name] :event.target.value
    })
  }

  function onSubmitSuccess(){

    <Link to={"/"}></Link>
  }
  
 async function submitForm(event){
    event.preventDefault()
    // console.log(dataForm)//we will get the updated data
    const {username,password} = dataForm;
    const userDetails = {
      username,password
    }
   
    const url = 'https://apis.ccbp.in/login';
    const options ={
      method : 'POST',
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok===true){
      onSubmitSuccess()
    }
    
  }

  

  return (
    <main className='main'>
      <div >
        <img className='main-login-img' src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png ' alt='logo'/>
          <form className='form' onSubmit={submitForm}>
              <img className='form-logo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt='login-logo'/>
              <input type='text' name='username' placeholder='username' onChange={handleEvent}/>
              <input type='password' name='password' placeholder='password' onChange={handleEvent}/>
              <button className='login-btn'>Login</button>
          </form>
      </div>
       
    </main>
  )
}

