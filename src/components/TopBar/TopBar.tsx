import { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/colors";
import useDropdown from "react-dropdown-hook";
import { ExpandedMenu } from "../TopBar/ExpendedMenu";
import { Link } from "react-router-dom";

const InnerWrapper = styled.div`
  width: 100%;
  background: white;
  margin-left:5px;
  margin-right:5px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`;

const RightIcons = styled.div`
  display: flex;
`;
const LeftIcons = styled.div`
  float: left;
`;
const SearchBar = styled.div``;
const Home = styled.label`
  margin-left: 30px;
  margin-bottom: 5px;
  padding-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Logo = styled.img`
  width: 10%;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;
const HomeIcon = styled.img`
  margin-bottom: 4px;
`;
const HouseIcon = styled.img`
  margin-right: 10px;
  border: 1px solid #555;
  border-radius:10px;
  padding:4px;
  background-color:#d3d3d3;
  padding-right:-2px;
`;

const CommentsIcon = styled.img`
  margin-right: 10px;
  border: 1px solid #555;
  border-radius:10px;
  padding:4px;
  background-color:#d3d3d3;
`;
const BellIcon = styled.img`
  margin-right: 10px;
  border: 1px solid #555;
  border-radius:10px;
  padding:4px;
  background-color:#d3d3d3;
`;
const SearchIcon = styled.img`
  margin-left: -140px;
  margin-bottom: -5px;
  
`;

const Input = styled.input`
  width: 600px;
  text-align:center;
  justify-content:center;
  position:absolute;
  margin-left:-750px;
`;
const Menu = styled.div`
  margin-right: 1px;
  margin-left: -450px;
  margin-top: 8px;
`;
const ArrowDownIcon = styled.img`
margin-right:500px;

`;

export const TopBar: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();
  return (
    <Wrapper>
      <InnerWrapper>
        <InputWrapper>
          <LeftIcons>
            <Logo src="/media/icons/logo.png" />
            <HomeIcon src="/media/icons/house2.png" />
            <Home>
              <Link to="/MainPage" style={{textDecoration: 'none' , color:"black" }} >
                HOME
              </Link>
              </Home>
          </LeftIcons>
          <Menu ref={wrapperRef}>
            <div onClick={toggleDropdown}>
              <ArrowDownIcon src="/media/icons/arrow-down.png" alt="" />
            </div>
            {dropdownOpen && (
              <>
                <ExpandedMenu></ExpandedMenu>
              </>
            )}
          </Menu>
          <div onClick={closeDropdown}></div>
          <SearchBar>
            <Input type="szukaj" placeholder="Hello there" />
            <SearchIcon src="/media/icons/search.png" alt="" />
          </SearchBar>
          <RightIcons>
            <HouseIcon src="/media/icons/house.png" alt="" />
            <CommentsIcon src="/media/icons/comments.png" alt="" />
            <BellIcon src="/media/icons/bell.png" alt="" />
          </RightIcons>
        </InputWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
