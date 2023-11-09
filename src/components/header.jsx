import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [token, setToken] = useState("")
  return (
    <>
      <_Header>
          <_Logo src="img/logo.png" alt="" />
          <_RoomLet src="img/roomlet.png" alt="" />
          <_Home src="img/home.png" alt="" />
      </_Header>
      <Outlet />
    </>
  )
}

const _Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
<<<<<<< Updated upstream
=======
  background-color: #fff;
>>>>>>> Stashed changes
`

const _Logo = styled.img`
  width: 90px;
  height: 57px;
  margin: 0 10px 0 60px;
`

const _RoomLet = styled.img`
  width: 190px;
  height: 40px;
`

const _Home = styled.img`
  width:30px;
  height: 30px;
  margin-left: 1420px;
`
export default Header;