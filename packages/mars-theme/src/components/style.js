import { Global, css, connect, styled, Head } from "frontity";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width:1000px;

 
   p{
    color: black;
  }
  .p1{
    color: black;
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
  .wpcf7 input[type="text"],
.wpcf7 input[type="email"],
.wpcf7 textarea,

{
    background-color: #fff;
    color: #000;
    width: 50%;

}
.wpcf7 submit{
  background-color:#458FF6;
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