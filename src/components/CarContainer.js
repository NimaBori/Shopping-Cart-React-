import React, { useState, useEffect } from "react";
// import cartItems from "./data";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CarContainer = ({ cartItems, setItemNumbers }) => {
  const [cart, setCart] = useState(cartItems);
  const [totalAmount, setTotalAmount] = useState();

  const handleOnRemove = (i) => {
    setCart(() => cart.filter((item) => item.id !== i));
    calcTotal();
  };

  const handleIncrement = (i) => {
    const cartItems = cart.map((item) => {
      if (item.id === i) {
        item.amount++;
        return { ...item };
      } else return item;
    });
    setCart(cartItems);
    calcTotal();
  };

  const handleReduction = (i) => {
    const listItems = [...cart];
    listItems.map((item) => {
      if (item.id === i && item.amount > 0) {
        item.amount--;
      }
      if (item.id === i && item.amount === 0) {
        const id = listItems.indexOf(item);
        listItems.splice(id, 1);
      }
    });
    setCart(listItems);
    calcTotal();
  };

  const calcTotal = () => {
    const cartItems = [...cart];
    let totalAmount = 0;
    const total = cartItems
      .map((item) => item.amount)
      .reduce((acc, value) => acc + value, 0);
    setItemNumbers(total);
    cartItems.map((item) => {
      totalAmount += item.price * parseInt(item.amount);
    });
    setTotalAmount(Math.round(totalAmount * 100) / 100); // round total to its two decimal digits
    //another method to round to its two decimal places: totalAmount.toFixed(2)
  };

  const handleClearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  return (
    <Container className="bg-success bg-opacity-10 px-0 pt-0 my-5 rounded-top">
      <Container className="text-center bg-warning bg-opacity-75 py-3 m-0 border-0 rounded-top">
        <h1 className="fw-bolder m-0 text-success">YOUR BAG</h1>
      </Container>
      {!cart.length > 0 ? (
        <Container>
          <h4 className="mt-2 text-secondary text-center fst-italic pb-3">
            is currently empty!
          </h4>
        </Container>
      ) : (
        <>
          <Container className="my-3">
            {cart.map((item, index) => (
              <Item
                key={index}
                {...item}
                onRemove={handleOnRemove}
                onIncrement={handleIncrement}
                onReduction={handleReduction}
              />
            ))}
          </Container>
          <Container className="mb-5 border-top border-bottom justify-center bg-success bg-opacity-75 border-4 border-success border-opacity-50 py-3 px-4">
            <div className="d-flex  justify-content-between">
              <h4 className="fw-bold p-0 m-0">Total</h4>
              <h4 className="fw-bold p-0 m-0 text-white">${totalAmount}</h4>
            </div>
          </Container>
          <Container className="text-center d-grid p-0 rounded-bottom">
            <Button
              variant="danger"
              size="lg"
              onClick={handleClearCart}
              className="rounded-0 rounded-bottom"
            >
              Clear Items
            </Button>
          </Container>
        </>
      )}
    </Container>
  );
};

export default CarContainer;
