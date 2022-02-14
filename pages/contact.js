import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Navbar from './nav';
const Contact =()=>{

    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })
    return(
        
        <>
        <Navbar/>
        <Formik
        initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4 text-center">Contact us</h1>
          <div className="container">
          <Form>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='firstName' placeholder="Your Name"/>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Last name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='lastName' placeholder="Last name"/>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' placeholder="mail@example.com"/>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" name='Password' placeholder="password"/>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">confirm Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" name='confirmPassword' placeholder="Re-enter password"/>
            </div>

            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
          </div>
        </div>
      )}
    </Formik>  
        </>
    )
}

export default Contact