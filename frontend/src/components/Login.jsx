import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const loginSchema=Yup.object().shape({
  email:Yup.string().email('invalid email').required('required'),
  password:Yup.string().required('password required')
  
})

const Login = () => {
  const loginForm=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(values)=>{

      console.log(values)
    },
    validationSchema:loginSchema
  })
  return (
    
    <div>
      <body className='d-flex vh-100 w-100 align-items-center justify-content-center'> 
      <form onSubmit={loginForm.handleSubmit}>

        
       <div className="login">
       <h3>Log In</h3>
       <span style={{color:'red',fontSize:14,marginLeft:14}}>{loginForm.touched.email&&loginForm.errors.email}</span>
        <label htmlFor="email"></label>
        <input type="email" className='myinput'placeholder='email' name='email' onChange={loginForm.handleChange} value={loginForm.values.email}/>
        <span style={{color:'red',fontSize:14,marginLeft:14}}>{loginForm.touched.email&&loginForm.errors.email}</span>
        <label htmlFor="Password"></label>
        <input type="password" className='myinput'  name='password'placeholder='password'onChange={loginForm.handleChange} value={loginForm.values.password} />
        <div className='text-center'>

        <button className='mybt' type='submit' onChange={loginForm.handleChange}>Login{alert.type}</button>{alert.msg}
        </div>
        <div className='logo1 d-flex justify-content-evenly'> 
<li><a href="http://google.com"><i className="fa-brands fa-google fa-2xl"></i></a></li>
<li><a href="http://facebook.com" ><i className="fa-brands fa-facebook fa-2xl"></i></a></li>
        </div>


       </div>
      </form>
      </body>
      
    </div>
  )
}

export default Login
