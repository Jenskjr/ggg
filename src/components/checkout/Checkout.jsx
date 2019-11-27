import React from 'react'

const Checkout = props => {
    return (
        <div>
            <h2>
                Checkout    
            </h2>
            <div>
                <p>{`Navn: ${props.formData.name}`}</p>
                <p>{`Email: ${props.formData.email}`}</p>
                <p>{`Telefon: ${props.formData.telefon}`}</p>
                <p>{`Fradrag: ${props.formData.fradrag}`}</p>
                <p>{`Betaling: ${props.formData.paymentOption}`}</p>
                <p>{`Betalingssum: ${props.formData.amount}`}</p>
            </div>
        </div>
    )
}

export default Checkout 