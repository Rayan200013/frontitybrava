import { Global, css, connect, styled, Head } from "frontity";

export const Main = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px;
 
   p{
    color: green;
  }
  .p1{
    color: red;
  }
  .p2{
    color: black;
  }
  .about-img{
    width: 500px;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  width:100%;
  padding: 20px;
  
`;

