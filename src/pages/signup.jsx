import { useMediaQuery } from 'react-responsive';
import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function SignupPage() {
  const size = useMediaQuery({ maxWidth: 1100 });
  return (
    <>
    {size ? (
      <BackgroundMin>
        <SignupMin>
            <Title>회원가입</Title>
            <Story>아이디랑 비밀번호를 한 번 만들어 볼까요?</Story>
            <InputDivMin>
                <Input_topMin type='text' placeholder='아이디를 입력하세요.'></Input_topMin>
                <InputMin type='text' placeholder='닉네임을 입력하세요.'></InputMin>
                <InputMin type='text' placeholder='비밀번호를 입력하세요.'></InputMin>
                <Input_bottomMin type='text' placeholder='비밀번호를 한번 더 입력하세요.'></Input_bottomMin>
            </InputDivMin>
            <SignupButtonMin>회원가입</SignupButtonMin>
        </SignupMin>
        <LoginMin>
            <Title>외부 로그인</Title>
            <Story>사용하고 싶은 로그인 방식을 선택하세요.</Story>
        </LoginMin>
      </BackgroundMin>
    ) : (
        <Background>
            <Signup>
              <Title>회원가입</Title>
              <Story>아이디랑 비밀번호를 한 번 만들어 볼까요?</Story>
              <InputDiv>
                <Input_top type='text' placeholder='아이디를 입력하세요.'></Input_top>
                <Input type='text' placeholder='닉네임을 입력하세요.'></Input>
                <Input type='text' placeholder='비밀번호를 입력하세요.'></Input>
                <Input_bottom type='text' placeholder='비밀번호를 한번 더 입력하세요.'></Input_bottom>
              </InputDiv>
              <SignupButton>회원가입</SignupButton>
            </Signup>
            <Main_right>
                <Login>
                  <Title>외부 로그인</Title>
                  <Story>사용하고 싶은 로그인 방식을 선택하세요.</Story>
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
const Signup = styled.div`
  width: 35vw;
  height: 47vh;
`
const InputDiv = styled.div`
  width: 35vw;
  height: 35.1vh;
  border: solid 1px black;
  border-radius: 30px;
  margin-top: 8vh;
`
const Input_top = styled.input`
  width: 33vw;
  height: 8.7vh;
  border-radius: 30px 30px 0px 0px;
  border: none;
  border-bottom: solid 1px black;
  font-size: 1.2em;
  padding: 0vh 1vw 0vh 1vw;
  &:focus {
    outline:none;
  }
`
const Input = styled.input`
  width: 33vw;
  height: 8.7vh;
  border: none;
  border-bottom: solid 1px black;
  font-size: 1.2em;
  padding: 0vh 1vw 0vh 1vw;
  &:focus {
    outline:none;
  }
`
const Input_bottom = styled.input`
  width: 33vw;
  height: 8.5vh;
  border-radius: 0px 0px 30px 30px;
  border: none;
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
const Login = styled.div`
  width: 25vw;
  height: 17vh;
  padding: 0vh 0vw 8vh 0vw;
`
const SignupButton = styled.button`
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
  margin-top: 8vh;
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
  align-items: center;
  justify-content: center;
`
const SignupMin = styled.div`
  width: 650px;
  height: 600px;
`
const InputDivMin = styled.div`
  width: 650px;
  height: 300px;
  border: solid 1px black;
  border-radius: 30px;
  margin-top: 8vh;
`
const Input_topMin = styled.input`
  width: 630px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  border: none;
  border-bottom: solid 1px black;
  font-size: 1.2em;
  padding: 0vh 10px;
  &:focus {
    outline:none;
  }
`
const InputMin = styled.input`
  width: 630px;
  height: 74px;
  border: none;
  border-bottom: solid 1px black;
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
  font-size: 1.2em;
  padding: 0vh 10px;
  &:focus {
    outline:none;
  }
`
const SignupButtonMin = styled.button`
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
const LoginMin = styled.div`
  width: 650px;
  border-top: solid 1px black;
  margin-top: 100px;
  padding: 100px 0px;
`
export default SignupPage;