import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo";
import Home from "../img/home";

const Header = () => {
  
  const onClickHome = () => {
    window.location.assign("/");
  };

  return (
    <>
      <_Header>
          <_Logo/>
          <div onClick={onClickHome}>
            <_Home />
          </div>
      </_Header>
      <Outlet />
    </>
  )
}

const _Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100;
  height: 10vh;
  background-color: #fff;
  padding: 0vh 5vw;
`
const _Logo = styled(Logo)``
const _Home = styled(Home)``
export default Header;