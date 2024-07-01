import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../CheckoutForm";
import { Modal, ModalBody, Button } from "react-bootstrap";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = (props) => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // React.useEffect(() => {
  //   fetch("/api/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ 
  //       items: [{ finalAmount: props.paymentData.finalAmount, 'currency': props?.paymentData?.currency}] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => { setClientSecret(data.clientSecret)});
  // }, []);

  const appearance = {
    theme: 'stripe',
  };
  const loader = 'auto';
  const options = {
    loader
  };
  return (
    <Modal size="lg" dialogClassName="" show={show} onHide={handleClose} animation={true} backdrop="static"
      keyboard={false}>
      <Modal.Header >
        <Modal.Title>Total Amount : {props?.paymentData?.currency +' '+ props?.paymentData?.visaPrice}</Modal.Title>
        <span className="close2" onClick={() => { props.handleCallback(false), handleClose() }}>
          &times;
        </span>
      </Modal.Header>
      <ModalBody>
           <CheckoutForm userInfo={props.paymentData}/>
      
      </ModalBody>
    </Modal>
  );
}

export default Payment;