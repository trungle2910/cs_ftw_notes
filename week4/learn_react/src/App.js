import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Greeting from "./components/Greeting";
import Age from "./components/Age";
import Counter from "./components/Counter";
import BMICalculator from "./components/BMICaculator";




function App() {
  return (
    <Container>
      <Greeting name="Trung" />
      <Age yearOfBirth={1997} />
      <Counter />
      <BMICalculator />
    </Container>
  );
}

export default App;