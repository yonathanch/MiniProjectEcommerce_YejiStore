import React from 'react'
import Label from '../../../Elements/Label/Label'
import Input from '../../../Elements/Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faPhone, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Login = () => {

    return (
        <>
       
             {/* Button trigger modal */}
            <button
                type="button"
                className="btn btn-dark ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal" ><span className="me-1"><FontAwesomeIcon icon={faRightToBracket} /></span>
                 Login
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                       <h1 className="modal-title fs-5" id="exampleModalLabel"  >  
                               Login
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-outline-secondary w-100 mb-4">
                               <span className="me-2"><FontAwesomeIcon icon={faPhone} /></span> Sign in With Phone
                            </button>
                            
                            <button className="btn btn-outline-secondary w-100 mb-4">
                               <span className="me-2"><FontAwesomeIcon icon={faHashtag} /></span> Sign in With Instagram
                            </button>
                            
                            <form>
                                <div className="mb-3">
                                    <Label 
                                        htmlFor="exampleInputEmail1"
                                        classLabel={'form-label'}
                                        label={'Email Addres'}
                                     />

                                    <Input
                                        type={'email'}
                                        classInput={'form-control'}
                                        aria-describedby="emailHelp"
                                        id={'exampleInputEmail1'}
                                        
                                    />

                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <Label 
                                         htmlFor="exampleInputPassword1"
                                         classLabel={'form-label'}
                                         label={'Password'}
                                    />

                                    <Input
                                        type={'password'}
                                        classInput={'form-control'}
                                        id={'exampleInputPassword1'}
                                        
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <Input
                                        type={'checkbox'}
                                        classInput={'form-check-input'}
                                        id={'exampleCheck1'}     
                                    />
                                    <Label 
                                         htmlFor="exampleCheck1"
                                         classLabel={'form-check-label'}
                                         label={'Check me out'}
                                    />   
                                </div>

                                <button type="submit" className="btn btn-dark w-100">
                                    Login
                                </button>

                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        
        </>
    )

}

export default Login