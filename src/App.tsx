import "./App.css";
import Provider from "../lib/components/PaymentProvider";
import CheckoutForm from "../lib/components/PaymentForm";
function App() {
  return (
    <Provider>
      <CheckoutForm />
    </Provider>
  );
}

export default App;
