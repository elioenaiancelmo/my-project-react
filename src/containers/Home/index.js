import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Burger from '../../assets/burger.svg';


import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

const App = () => {

  /* const orders = []; */
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputClienteName = useRef();
  const navigate = useNavigate();


  async function addNewOrder() {

     const {data: newOrder} = await axios.post("http://localhost:3001/orders", { order: inputOrder.current.value, clienteName: inputClienteName.current.value });
 
     setOrders([...orders, newOrder]);

     navigate("/pedidos")
  }

  return (
    <Container>
      <Image src={Burger} alt="Imagem Burger" />

      <ContainerItens>
        <H1>Faça se pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Faça seu pedido..." />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClienteName} placeholder="Digite seu nome..." />

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>

    </Container>


  );

}


export default App