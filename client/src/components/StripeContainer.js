import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51KpRJPJ0yIZphIAHScebwqDE3FqAol3EoZhpsddnNrCbSuVy1lYyFGnPMGnLPnvlXKZz8lsHQNdaFpHsKiZQjFJ9002pPfwGVm";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
