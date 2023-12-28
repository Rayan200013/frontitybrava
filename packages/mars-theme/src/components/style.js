import { Global, css, connect, styled, Head } from "frontity";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width:1000px;
  min-width:100%;
 
   p{
    color: green;
  }
  .p1{
    color: purple;
  }
  .p2{
    color: black;
  }
  .about-img{
    width: 500px;
  }
  .big-title{
    color: #000;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;


  }
  .small-title{
    color: #7D7987;
font-family: Muli;
font-size: 21px;
font-style: normal;
font-weight: 300;
line-height: 32px;


  }
  .wp-block-button a{
    color: #FFF;
font-family: Muli;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 333.333% */
padding: 12px 25px;
background-color: #458FF6;
text-decoration: none;
border-radius: 10px;
  }
  .hero-image{
    width: 600px;
height: 600px;
display:flex-1;
  }
  .hero{
    display: flex;
    width:1100px;
    min-width: 100%;
    align-items: center;
  }
  .col-1{
    display: flex-1;
   
   
  }
  .col-2{
    display: flex-1;
    
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

const Home = styled.div`

`;