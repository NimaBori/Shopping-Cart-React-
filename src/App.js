import { useState } from "react";
import Navbar from "./components/Navbar";
import CarContainer from "./components/CarContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import useAxiosToGetData from "./components/useAxiosToGetData";
import Container from "react-bootstrap/Container";

function App() {
  const [itemNumbers, setItemNumbers] = useState(0);
  const {
    data: cartItems,
    isPending,
    error,
  } = useAxiosToGetData("https://course-api.com/react-useReducer-cart-project");

  return (
    <>
      {error && <Container>{error}</Container>}
      {isPending && (
        <Container className="text-center my-5 text-info fs-3 fw-bold">
          Loading...
        </Container>
      )}
      {cartItems && (
        <>
          <Navbar value={itemNumbers} />
          <CarContainer cartItems={cartItems} setItemNumbers={setItemNumbers} />
        </>
      )}
    </>
  );
}

export default App;
