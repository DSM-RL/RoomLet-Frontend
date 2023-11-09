import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function loginPage() {
  return (
    <>
      <Background>
        <Email>
          <Title>이메일 로그인</Title>
        </Email>
        <Main_right>
            <Signup></Signup>
            <Login></Login>
        </Main_right>
      </Background>
    </> 
  )
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`
const Email = styled.div`
  width: 35vw; //650px
  height: 47vh; //540px
`
const Main_right = styled.div`
  width: 25vw; //650px
  height: 60vh; //540px
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0vw 0vh 0vw 20vh;
`
const Signup = styled.div`
  width: 23vw; //426px
  height: 17vh; //192px
  border-bottom: dotted 1px black;
`
const Login = styled.div`
  width: 23vw; //426px
  height: 17vh; //192px
`
export default loginPage;