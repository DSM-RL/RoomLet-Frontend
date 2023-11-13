import { useMediaQuery } from 'react-responsive';
import react from 'react';
import styled from 'styled-components';
import axios from "axios"

function MainPage() {
  const size = useMediaQuery({ maxWidth: 1100 });
  return (
    <>
    {size ? (
      <Background>
        <div></div>
      </Background>
    ) : (
        <Background>
            <BackgroundImg>
              <Font_top>긴 휴가를 떠날 시간!</Font_top>
              <Font_bottom>지금 당장 낭만을 챙기러 떠나자!</Font_bottom>
            </BackgroundImg>
            <SelectDiv>
              <SelectFont>여행지</SelectFont>
              <SelectFontStory>대한민국 어디서든, 현대적인 도시부터 아름다운 자연까지 다양한 경험을 즐길 수 있어요.</SelectFontStory>
              <SelectImgDivInDiv>
                <SelectImgDiv>
                  <SelectImg src='img/서울.png' />
                  <SelectImgFont>서울</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/인천.png' />
                  <SelectImgFont>인천</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/부산.png' />
                  <SelectImgFont>부산</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/대구.png' />
                  <SelectImgFont>대구</SelectImgFont>
                </SelectImgDiv>
              </SelectImgDivInDiv>
              <SelectImgDivInDiv>
              <SelectImgDiv>
                  <SelectImg src='img/대전.png' />
                  <SelectImgFont>대전</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/울산.png' />
                  <SelectImgFont>울산</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/광주.png' />
                  <SelectImgFont>광주</SelectImgFont>
                </SelectImgDiv>
                <SelectImgDiv>
                  <SelectImg src='img/제주도.png' />
                  <SelectImgFont>제주도</SelectImgFont>
                </SelectImgDiv>
              </SelectImgDivInDiv>
            </SelectDiv>
          </Background>
    )}
    </> 
  )
};

const Background = styled.div`
  width: 100;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BackgroundImg = styled.div`
  width: 100%;
  height: 610px;
  background-image: url(img/mainBackground.png);
  background-repeat : no-repeat;
  background-size : cover;
`
const Font_top = styled.div`
  color: white;
  font-size: 75px;
  font-weight: 600;
  line-height: 91px;
  margin: 13vh 0vw 0vh 5vw;
`
const Font_bottom = styled.div`
  color: white;
  font-size: 45px;
  font-weight: 600;
  line-height: 91px;
  margin: 1vh 0vw 0vh 5vw;
`
const SelectDiv = styled.div`
  margin: 10vh 8vw;
`
const SelectFont = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const SelectFontStory = styled.div`
  font-size: 20px;
`
const SelectImgDivInDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`
const SelectImgDiv = styled.div`
  width: 20vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 20px;
  }
`
const SelectImg = styled.img`
  width: 17vw;
`
const SelectImgFont = styled.div`
  font-weight: 700;
  margin-top: 10px;
  font-size: 20px;
`
export default MainPage;