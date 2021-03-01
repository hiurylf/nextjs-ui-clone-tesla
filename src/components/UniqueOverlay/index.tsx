import React from 'react';
import { useTransform } from 'framer-motion';

import { useWrapperScroll } from '../Model';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
   const { scrollYProgress } = useWrapperScroll();

   const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

   return (
      <Container>
         <Header>
            <Logo />
            <Burger />
         </Header>

         <Footer style={{ opacity }}>
            <ul>
               <li>
                  <a href="#">UI Clone</a>
               </li>
               <li>
                  <a href="#">made with 💜</a>
               </li>
               <li>
                  <span>by </span>
                  <a
                     href="https://www.linkedin.com/in/hiuryferreira/"
                     className="executorName"
                  >
                     Hiury
                  </a>
               </li>
            </ul>
         </Footer>
      </Container>
   );
};

export default UniqueOverlay;
