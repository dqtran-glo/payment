import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { PropsWithChildren } from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("key");

export default function PaymentProvider({
  children,
  options,
}: PropsWithChildren<{
  options?: StripeElementsOptions | undefined;
}>) {
  return (
    <Elements
      stripe={stripePromise}
      options={
        {
          mode: "payment",
          amount: 2000,
          currency: "usd",
          ...options,
        } as StripeElementsOptions
      }
    >
      {children}
    </Elements>
  );
}
