import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FC } from "react";
import { Link } from "react-router-dom";
// const SliderElement = styled.div`
//   background-color: white;
//   height: 100px;
 
// `;
const SliderBox = styled.div`
  height: 250px;
  max-width:270px;
  margin: 20px;
  background-color: white;
  border-radius: 5%;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
  
`;
const Margin = styled.div`
  max-width: 900px;
  margin-left: 65px;
`;
const Imagee = styled.img`
  height: 160px;
  width: 270px;
`;
const LogoElement = styled.div`
  background-color: white;
  width: 75px;
  height: 75px;
  box-shadow: 4px 4px 8px 3px #a3a3a381;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: -50px;
  position: absolute;
`;
const Logo = styled.img`
  width: 50px;
  height: auto;
  margin-left: 25%;
  margin-top: 15%;
`;
const BottomElement = styled.div`
  display: flex;
  padding-left: 5%;
  position: relative;
  margin-top: 50px;
`;
const MiniLogo = styled.img`
  width: 20px;
  height: 15px;
  padding-left: 5px;
  margin-right: 3px;
`;
const Update = styled.div`
  font-size: 10px;
  margin-left: 19px;
  margin-top: 7px;
`;
const TopLabel = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
color: grey;
font-weight: 700;
margin-left:20px;;
`;

export default class SuperSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Margin>
        <TopLabel>Workspaces</TopLabel>
        <Slider {...settings}>
          <SliderBox>
              <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
              <Imagee src="/media/images/workspace2.jpg" />
              </Link>
              <LogoElement>
                <Logo src="/media/icons/contractSlider.png" />
              </LogoElement>
              <BottomElement>
                <MiniLogo src="/media/icons/contractSlider.png" />
                contract - 150 users
                <MiniLogo src="/media/icons/contractSlider.png" />
              </BottomElement>
              <Update>Last update 2 days ago</Update>
          
          </SliderBox>

          <SliderBox>
          <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
              <Imagee src="/media/images/workspace3.jpg" />
              </Link>
              <LogoElement>
                <Logo src="/media/icons/contractSlider.png" />
              </LogoElement>
              <BottomElement>
                <MiniLogo src="/media/icons/contractSlider.png" />
                contract - 150 users
                <MiniLogo src="/media/icons/contractSlider.png" />
              </BottomElement>
              <Update>Last update 2 days ago</Update>
           
          </SliderBox>
          <SliderBox>
          <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
              <Imagee src="/media/images/workspace.jpg" />
              </Link>
              <LogoElement>
                <Logo src="/media/icons/contractSlider.png" />
              </LogoElement>
              <BottomElement>
                <MiniLogo src="/media/icons/contractSlider.png" />
                contract - 150 users
                <MiniLogo src="/media/icons/contractSlider.png" />
              </BottomElement>
              <Update>Last update 2 days ago</Update>
         
          </SliderBox>
          <SliderBox>
          
              <Imagee src="/media/images/company.jpg" />
              <LogoElement>
                <Logo src="/media/icons/contractSlider.png" />
              </LogoElement>
              <BottomElement>
                <MiniLogo src="/media/icons/contractSlider.png" />
                contract - 150 users
                <MiniLogo src="/media/icons/contractSlider.png" />
              </BottomElement>
              <Update>Last update 2 days ago</Update>
          
          </SliderBox>
        </Slider>
      </Margin>
    );
  }
}
