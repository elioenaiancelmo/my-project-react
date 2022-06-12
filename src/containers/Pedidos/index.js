import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bag from '../../assets/bag.svg';
import Trash from '../../assets/trash.svg';


import H1  from "../../components/Title";
import ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, Order, Paragrafos } from "./styles";

const Orders = () => {

  /* const orders = []; */
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders");

      setOrders(newOrders);
    }

    fetchOrders();

  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrders = orders.filter(order => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBacPage(){
    navigate("/");
  }

  return (
    <Container>
      <Image src={Bag} alt="Imagem Bag" />

      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <Paragrafos>
                <p>{order.order}</p> <p><strong>{order.clienteName}</strong></p>
              </Paragrafos>
              <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt="Icone Lixeira" /></button>
            </Order>
          ))}
        </ul>

        <Button isBack={true} onClick={goBacPage}>Voltar</Button>
      </ContainerItens>

    </Container>


  );

}


export default Orders