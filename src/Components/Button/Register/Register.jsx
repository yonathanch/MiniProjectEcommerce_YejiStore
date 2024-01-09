import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    
    return (
        <>
            <button type="button" className="btn btn-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="me-1" ><FontAwesomeIcon icon={faUserPlus} /></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <button className="btn btn-outline-secondary w-100 mb-4">
                                <span className="me-2"><FontAwesomeIcon icon={faPhone} /></span> Sign up With Phone
                            </button>

                            <button className="btn btn-outline-secondary w-100 mb-4">
                                <span className="me-2"><FontAwesomeIcon icon={faHashtag}/></span> Sign up With Instagram
                            </button>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" />
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                    <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
                                </div>

                                <button type="submit" className="btn btn-dark w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       

        </>
    )

}

export default Register