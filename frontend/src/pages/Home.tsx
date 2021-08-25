import React, {useState, useEffect,useRef} from 'react';
import { Flex, VStack} from '@chakra-ui/layout';
import Styled from 'styled-components';
import Menu from '../components/menu';
import Introduce from '../components/introduce';
import SideMenu from '../components/SideMenu';
import { Button, Divider } from '@chakra-ui/react';
import Profile from '../components/Profile';
import DevTimeline from '../components/DevTimeline';
import DevNote from '../components/DevNote';
import About from '../components/About';

function Home() {
  
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const inputRef = useRef();
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    console.log(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  const TopButton = Styled.button`
    position: fixed; 
    opacity: 0; 
    bottom: 40px; 
    right: 40px;
    z-index: -10; 
    width: 50px; 
    height: 50px;
    border-radius: 100%;
    border: 0 none;
    background: lightgray;
    color: gary;
    border: 2px solid;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.06em;
    box-shadow: 1px 1px 6px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: opacity 0.3s ease-in;
    z-index: 10; 
    opacity: 1; 
  `;

  return (
    <>
    <VStack>
      <Menu />
      <Introduce></Introduce>
      <Divider w="85%" center/>
      <p id="1" />
      <Profile />
      <Divider w="85%" center/>
      <p id="2" />
      <DevTimeline />
      <Divider w="85%" center/>
      <p id="3" />
      <DevNote />
      <Divider w="85%" center/>
      <p id="4" />
      <About />
    </VStack>
    <TopButton 
    className={BtnStatus ? "active" : ""} // 버튼 노출 여부
    onClick={handleTop}  // 버튼 클릭시 함수 호출
    >TOP</TopButton>
  </>
  ) 
}

export default Home; 
