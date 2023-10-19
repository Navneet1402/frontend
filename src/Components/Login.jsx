import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import useAppContext from './AppContext';
import css from '../Components/login.css'


const Login = () => {

  const { setLoggedin } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email : '',
      password : ''
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        setLoggedin(true);

      }else if(res.status === 400){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text : 'Invalid email or password'
        })
      }

    }
  })

  return (
    <div className='login vh-100 bg-body-secondary'>\<br /><br />
        <div className="card-margin col-md-3 mx-auto pt-5">
          <div className="card">
            <div className="card-body">
              <h3 className='text-center my-5'>Login Form</h3>

              <form onSubmit={loginForm.handleSubmit}>
                  <label>Email Address</label>
                  <input id="email" value={loginForm.values.email} onChange={loginForm.handleChange} type="text" className='form-control mb-4' />
                  <label>Password</label>
                  <input id="password" value={loginForm.values.password} onChange={loginForm.handleChange} type="password" className='form-control mb-4' />

                  <button className='btn btn-dark my-4 w-100'>Login</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login;
