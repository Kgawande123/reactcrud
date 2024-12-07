import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const{register,handleSubmit,reset}=useForm()
    const navigate = useNavigate()
    const addData = (data)=>{
        axios.post("http://localhost:8000/client",data)
        reset()
        alert("data add successfully")
       navigate("/Show")

    }
  return (
    <div>
        
        <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">CLIENT MANAGEMENT SYSTEM</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit(addData)}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control"{...register('id')} />
                      <label className="form-label" htmlfor="form3Example1c">Client ID</label>
                    </div>
                      <input type="text" id="form3Example1c" className="form-control"{...register('name')} />
                      <label className="form-label" htmlfor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control"{...register('company')} />
                      <label className="form-label" htmlfor="form3Example3c">Company Name</label>
                    </div>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control"{...register('email')} />
                      <label className="form-label" htmlfor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="bigint" id="form3Example3c" className="form-control"{...register('contact')} />
                      <label className="form-label" htmlfor="form3Example3c">contact</label>
                    </div>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="txt" id="form3Example3c" className="form-control"{...register('role')} />
                      <label className="form-label" htmlfor="form3Example3c">Role</label>
                    </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlfor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register