import CheckoutForm from "../PaymentForm";
import PaymentProvider from "../PaymentProvider";

export default function PaymentComponent() {
  return (
    <PaymentProvider>
      <CheckoutForm />
    </PaymentProvider>
  );
}
