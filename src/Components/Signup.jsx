import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import {motion} from 'framer-motion'
import css from '../Components/signup.css'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
});

// initialize formik

const Signup = () => {

  const navigate = useNavigate();

  const SignupForm = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '',
      confirm : '',
    }, 
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'content-type': 'application/json'
        },

      });

      console.log(res.status)

      if(res.status === 200) {
        Swal.fire({
          icon : 'success',
          title : 'Signup Success',
          text : 'Now login to continue'

        })
        navigate('/login')
      }else{
        Swal.fire({
          icon : 'error',
          title : 'something went wrong',
          text : 'please try again'
        })
      }
    },
    validationSchema : SignupSchema
  });
  return (
    <motion.div
      initial={{opacity:0 , scale: 0.2, x: '100%'}}
      animate={{opacity:1, scale: 1, x:'0'}}
      transition={{duration: 0.5, type: 'spring', damping:'15', stiffness: '100'}}
     className=" signup vh-100 bg-body-secondary">
      <div className=" col-md-3 mx-auto pt-5">
        <br /><br /><br />
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Create Account</h3>

            <form onSubmit={SignupForm.handleSubmit}>
              <label>Name</label>
              <span style={{color:'red', fontSize:'10px'}}>{SignupForm.errors.name}</span>
              <input id='name' onChange={SignupForm.handleChange} value={SignupForm.values.name} type="text" className="form-control mb-4" />

              <label>Email</label>
              <input id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} type="text" className="form-control mb-4" />

              <label>Password</label>
              <input id='password' onChange={SignupForm.handleChange} value={SignupForm.values.password} type="password" className="form-control mb-4" />

              <label>Confirm Password</label>
              <input id='confirm' onChange={SignupForm.handleChange} value={SignupForm.values.confirm} type="password" className="form-control mb-4" />

              <button type='submit' className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
  

export default Signup