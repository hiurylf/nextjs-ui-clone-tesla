import styled from 'styled-components';

export const Container = styled.div<{
   bgUrlDesktop: string;
   bgUrlMobile: string;
}>`
   height: 100vh;
   scroll-snap-align: start;

   background-image: url(${props => props.bgUrlDesktop});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   @media (max-width: 599px) {
      background-image: url(${props => props.bgUrlMobile});
   }
`;
