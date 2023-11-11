import { useMediaQuery } from 'react-responsive';
import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function SignupPage() {
  const size = useMediaQuery({ maxWidth: 1100 });
  return (
    <>
    {size ? (
      <Background>
        <div></div>
      </Background>
    ) : (
        <Background>
            <div></div>
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
export default SignupPage;