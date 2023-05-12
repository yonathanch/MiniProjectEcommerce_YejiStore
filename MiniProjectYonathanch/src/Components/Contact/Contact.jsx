import React from 'react'
import contact from '../../../public/assets/Contact/letter.png'
import Input from '../../Elements/Input/Input'
import Label from '../../Elements/Label/Label'
import Textarea from '../../Elements/Textarea/Textarea'

const Contact = () => {
    return(
        <>
             <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 text-center py-4 my-4">
                            <h1>Contact Us</h1>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md 5 d-flex justify-content-center">
                            <img src={contact} alt="us"  className="d-block w-100" height="400px"/>
                        </div>
                        <div className="col-md-6">
                            <form >
                                    <div className="mb-3">
                                        <Label 
                                            htmlFor="exampleForm"
                                            classLabel={'form-label'}
                                            label={'Name'}
                                        />   
                                        <Input
                                            type={'text'}
                                            classInput={'form-control'}
                                            id={'exampleForm'}
                                            placeholder={'lorem'}     
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <Label 
                                            htmlFor="exampleFormControlInput1"
                                            classLabel={'form-label'}
                                            label={'Email address'}
                                        />   
                                        <Input
                                            type={'email'}
                                            classInput={'form-control'}
                                            id={'exampleFormControlInput1'}
                                            placeholder={'example@...'}     
                                        />
                                      
                                    </div>

                                    <div className="mb-3">
                                        <Label 
                                            htmlFor="exampleFormControlTextarea1"
                                            classLabel={'form-label'}
                                            label={'Message'}
                                        /> 
                                         <Textarea
                                            classArea={'form-control'}
                                            id={'additional'}      
                                        />  
                                    </div>
                                    <button type="submit" className="btn btn-secondary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact