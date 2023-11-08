import react from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import axios from "axios"

function header() {
  return (
    <>
      <Container>
        <div></div>
      </Container>
      <Outlet />
    </> 
  )
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000000;
`
export default header;