import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Item = ({
  id,
  title,
  price,
  img,
  amount,
  onRemove,
  onIncrement,
  onReduction,
}) => {
  return (
    <Container
      fluid
      className="my-3 p-0 border-secondary border-opacity-25 border-bottom"
    >
      <Row className="align-items-center my-3 ">
        <Col xs lg="2" className="p-0">
          <div style={{ width: "80%" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              className="img"
              src={img}
              alt={title}
            ></img>
          </div>
        </Col>
        <Col xs={8} className="ms-auto ">
          <Row className="">
            <h5 className="text-capitalize">{title}</h5>
          </Row>
          <Row>
            <h5 className="text-secondary">${price}</h5>
          </Row>
          <Row>
            <div>
              <Button variant="outline-danger" onClick={() => onRemove(id)}>
                Remove
              </Button>
            </div>
          </Row>
        </Col>
        <Col xs={1} className="p-0 text-center align-items-center">
          <button
            className="bg-transparent border-0"
            onClick={() => onIncrement(id)}
          >
            <FaArrowUp
              style={{ width: 25, height: 25 }}
              className="arrow-btn-up"
            />
          </button>
          <h4 className="p-0 my-2 ">{amount}</h4>
          <button
            className="bg-transparent border-0"
            onClick={() => onReduction(id)}
          >
            <FaArrowDown
              style={{ width: 25, height: 25 }}
              className="arrow-btn-down"
            />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
