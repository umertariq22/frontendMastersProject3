import CardPlacement from './CardPlacement'
import './App.css'
import FormContainer from './FormContainer'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Submit from './Submit';

function App() {
  const [name, setName] = useState("John Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [date, setDate] = useState("00/00");
  const [cvc, setCVC] = useState("000");



  return (
    <Router>
      <div class="container">
        <CardPlacement
          cardNo={number}
          name={name}
          cvv={cvc}
          date={date}
        />
        <Routes>
          <Route path="/" element={<FormContainer setName={setName} setNumber={setNumber} setDate={setDate}  setCVC={setCVC} />}></Route>
          <Route path="/submit" element={<Submit />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App
