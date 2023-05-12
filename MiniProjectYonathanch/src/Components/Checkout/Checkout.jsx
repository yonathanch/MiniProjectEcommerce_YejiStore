import Input from "../../Elements/Input/Input";
import Label from "../../Elements/Label/Label";
import { useSelector } from 'react-redux'


const Checkout = () => { 
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }


    return(
      <>
         <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary-emphasis">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <Label 
                                        htmlFor="firstName"
                                        classLabel={'form-label'}
                                        label={'First name'}
                                     />

                                    <Input
                                        type={'text'}
                                        classInput={'form-control'}
                                        id={'firstName'}
                                        
                                    />
                                </div>

                                <div className="col-sm-6">
                                    <Label 
                                        htmlFor="lastName"
                                        classLabel={'form-label'}
                                        label={'Last name'}
                                     />

                                    <Input
                                        type={'text'}
                                        classInput={'form-control'}
                                        id={'lastname'}    
                                    />
                                </div>

                                <div className="col-12">
                                    <Label 
                                        htmlFor="email"
                                        classLabel={'form-label'}
                                        label={'Email'}
                                     />

                                    <Input
                                        type={'email'}
                                        classInput={'form-control'}
                                        id={'email'}    
                                    />
                                </div>

                                <div className="col-12">
                                    <Label 
                                        htmlFor="addres"
                                        classLabel={'form-label'}
                                        label={'Addres'}
                                     />

                                    <Input
                                        type={'text'}
                                        classInput={'form-control'}
                                        id={'addres'}    
                                    />    
                    
                                </div>
                              
                            </div>
                            <hr />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                        <Input
                                            type={'radio'}
                                            classInput={'form-check-input'}
                                            id={'credit'}  
                                            name={"paymentMethod"}  
                                        /> 
                                        <Label 
                                            htmlFor="credit"
                                            classLabel={'form-check-label'}
                                            label={'Credit'}
                                        />  
                                </div>

                                <div className="form-check">
                                        <Input
                                            type={'radio'}
                                            classInput={'form-check-input'}
                                            id={'debit'}  
                                            name={"paymentMethod"}  
                                        /> 
                                        <Label 
                                            htmlFor="debit"
                                            classLabel={'form-check-label'}
                                            label={'Debit Card'}
                                        />  
                                </div>

                                <div className="form-check">
                                        <Input
                                            type={'radio'}
                                            classInput={'form-check-input'}
                                            id={'paypal'}  
                                            name={"paymentMethod"}  
                                        /> 
                                        <Label 
                                            htmlFor="paypal"
                                            classLabel={'form-check-label'}
                                            label={'Paypal'}
                                        />  
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                        <Label 
                                            htmlFor="c-name"
                                            classLabel={'form-label'}
                                            label={'Name on card'}
                                        />

                                        <Input
                                            type={'text'}
                                            classInput={'form-control'}
                                            id={'c-name'} 
                                        />
                                  <br />
                                </div>

                                <div className="col-md-6">
                                        <Label 
                                            htmlFor="c-number"
                                            classLabel={'form-label'}
                                            label={'Credit card number'}
                                        />

                                        <Input
                                            type={'text'}
                                            classInput={'form-control'}
                                            id={'c-number'} 
                                        />
                                </div>                        
                            </div>
                            <button className="w-100 btn btn-dark" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
      </>       
 
    )

}


export default Checkout

