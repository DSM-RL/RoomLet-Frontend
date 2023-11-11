import { useMediaQuery } from 'react-responsive';
import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function LoginPage() {
  const size = useMediaQuery({ maxWidth: 1100 });
  return (
    <>
    {size ? (
      <BackgroundMin>
        <Email>
         <Title>이메일 로그인</Title>
         <Story>가입하신 이메일 주소로 로그인하세요.</Story>
         <InputDivMin>
            <Input_topMin></Input_topMin>
            <Input_bottomMin></Input_bottomMin>
         </InputDivMin>
         <CheckDiv>
            <Checkbox type='checkbox'></Checkbox>
            <CheckboxFont>로그인 상태 유지</CheckboxFont>
         </CheckDiv>
         <LoginButtonMin>로그인</LoginButtonMin>
        </Email>
        <SignupMin>
          <Title>회원가입</Title>
          <Story>회원이 아니신가요? 지금 회원가입 하세요</Story>
          <SignupButtonMin>회원가입</SignupButtonMin>
        </SignupMin>
        <LoginMin>
          <Title>소셜 로그인</Title>
          <Story>다른 소셜 계정으로 로그인 할 수 있습니다.</Story>
        </LoginMin>
      </BackgroundMin>
    ) : (
            <Background>
            <Email>
              <Title>이메일 로그인</Title>
              <Story>가입하신 이메일 주소로 로그인하세요.</Story>
              <InputDiv>
                <Input_top type='text' placeholder='아이디를 입력하세요.'></Input_top>
                <Input_bottom type='text' placeholder='비밀번호를 입력하세요.'></Input_bottom>
              </InputDiv>
              <CheckDiv>
                <Checkbox type='checkbox'></Checkbox>
                <CheckboxFont>로그인 상태 유지</CheckboxFont>
              </CheckDiv>
              <LoginButton>로그인</LoginButton>
            </Email>
            <Main_right>
                <Signup>
                  <Title>회원가입</Title>
                  <Story>회원이 아니신가요? 지금 회원가입 하세요</Story>
                  <SignupButton>회원가입</SignupButton>
                </Signup>
                <Login>
                  <Title>소셜 로그인</Title>
                  <Story>다른 소셜 계정으로 로그인 할 수 있습니다.</Story>
                </Login>
            </Main_right>
          </Background>
    )}
    </> 
  )
};

const Background = styled.div`
  width: 100;
  height: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  font-size: 2.2em;
  font-weight: bold;
`
const Story = styled.div`
  font-size: 1.4em;
  margin-top: 1vh;
`
const Email = styled.div`
  width: 35vw;
  height: 47vh;
`
const InputDiv = styled.div`
  width: 35vw;
  height: 18vh;
  border: solid 1px black;
  border-radius: 30px;
  margin-top: 8vh;
`
const Input_top = styled.input`
  width: 33vw;
  height: 8.7vh;
  border-radius: 30px 30px 0px 0px;
  border: none;
  border-bottom: solid 0.5px black;
  font-size: 1.2em;
  padding: 0vh 1vw 0vh 1vw;
  &:focus {
    outline:none;
  }
`
const Input_bottom = styled.input`
  width: 33vw;
  height: 8.7vh;
  border-radius: 0px 0px 30px 30px;
  border: none;
  border-top: solid 0.5px black;
  font-size: 1.2em;
  padding: 0vh 1vw 0vh 1vw;
  &:focus {
    outline:none;
  }
`
const Main_right = styled.div`
  width: 25vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0vh 0vw 0vh 8vw;
`
const Signup = styled.div`
  width: 25vw;
  height: 17vh;
  border-bottom: solid 1px black;
  padding: 0vh 0vw 8vh 0vw;
`
const SignupButton = styled.button`
  width: 12vw;
  height: 6vh;
  background: #5A90F8;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  margin-top: 3vh;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #397AF7;
  }
  &:active {
    background: #5A90F8;
  }
`
const Login = styled.div`
  width: 25vw; //426px
  height: 17vh; //192px
  padding: 5vh 0vw 0vh 0vw;
`
const Checkbox = styled.input`
  width: 2vw;
  height: 2vh;
`
const CheckboxFont = styled.div`
  font-size: 1.2em;
  color: #545454;
`
const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5vh;
`
const LoginButton = styled.button`
  width: 35vw;
  height: 8vh;
  background: #5A90F8;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 1.9em;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  margin-top: 10vh;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #397AF7;
  }
  &:active {
    background: #5A90F8;
  }
`
const BackgroundMin = styled.div`
  width: 100;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 200px;
`
const InputDivMin = styled.div`
  width: 650px;
  height: 150px;
  border: solid 1px black;
  border-radius: 30px;
  margin-top: 8vh;
`
const Input_topMin = styled.input`
  width: 630px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  border: none;
  border-bottom: solid 0.5px black;
  font-size: 1.2em;
  padding: 0vh 10px;
  &:focus {
    outline:none;
  }
`
const Input_bottomMin = styled.input`
  width: 630px;
  height: 74px;
  border-radius: 0px 0px 30px 30px;
  border: none;
  border-top: solid 0.5px black;
  font-size: 1.2em;
  padding: 0vh 10px;
  &:focus {
    outline:none;
  }
`
const LoginButtonMin = styled.button`
  width: 650px;
  height: 75px;
  background: #5A90F8;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 1.9em;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  margin-top: 10vh;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #397AF7;
  }
  &:active {
    background: #5A90F8;
  }
`
const SignupMin = styled.div`
  width: 650px;
  height: 192px;
  margin-top: 150px;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  padding: 50px 0px;
`
const SignupButtonMin = styled.button`
  width: 250px;
  height: 60px;
  background: #5A90F8;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  margin-top: 3vh;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #397AF7;
  }
  &:active {
    background: #5A90F8;
  }
`
const LoginMin = styled.div`
  width: 650px;
  height: 192px;
  padding: 50px 0px;
`
export default LoginPage;