import React, { FC, ChangeEvent, useState } from 'react';
import styled from "styled-components";
//import contract from "../../media/icons/contract.png";
import { Link } from "react-router-dom";
const ExpandedMenuContet = styled.div`
  position: absolute;
  background-color: white;
  margin-top: 10px;
  border: 1px solid #555;
  max-height:500px;
  width:200px;
  z-index:1;
`;
const Scroll = styled.div`
  overflow: auto;`

const MenuItem = styled.div`
  margin-top: 5px;
  &:hover {
    background-color: lightgray;
  }
  min-height: 24px;
`;
const Icon = styled.img`
  margin-left: 10px;
  padding-right: 10px;
`;
const PublicationsIcon = styled.img`
  margin-left: 13px;
  padding-right: 10px;
`;
const Label = styled.label`
  font-size: 80%;
  color: gray;
`;
const LabelTwo = styled.label`

    `;
const MenuLabel = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
`;
const Icon2 = styled.img`
  margin-left: 13px;
  padding-right: 5px;
  width: 22px;
`;
const Input = styled.input`
width:98%;
border-left:none;
border-right:none;
border-top:none;
`;
const Line = styled.div`
border: 1px solid #555;
`;
//const Scroll= styled.div`
//overflow: scroll;`;
export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)}
  return (
    <ExpandedMenuContet>
      <Scroll>
      <Input type="szukaj" value= {inputText} onChange={inputHandler} placeholder="Filter" ></Input>
      <MenuLabel>
        <Label>Platform</Label>
      </MenuLabel>
      {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
      <MenuItem>
      <Link to="/MainPage" style={{textDecoration: 'none' , color:"black" }} >
        <Icon src="./media/icons/house.png" alt="" />
        <LabelTwo>Home</LabelTwo>
        </Link>
      </MenuItem>}
      <MenuItem>
      {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/PageNotFound" style={{textDecoration: 'none' , color:"black" }} >
        <PublicationsIcon src="./media/icons/Publications.png" alt="" />
        Publications
        </Link>}
      </MenuItem>
      <MenuItem>
      {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/PageNotFound" style={{textDecoration: 'none' , color:"black" }} >
        <Icon src="./media/icons/people.png" alt="" />
        People
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Entities" style={{textDecoration: 'none' , color:"black" }} >
        <Icon src="./media/icons/entities.png" alt="" />
        Entities
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/PageNotFound" style={{textDecoration: 'none' , color:"black" }} >
        <Icon src="./media/icons/administration.png" alt="" />
        Administration
        </Link>}
      </MenuItem>
      <MenuLabel>
        <Label>Workspaces</Label>
      </MenuLabel>
      <MenuItem>
      {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
        <Icon2 src="../../../media/icons/contract.png" alt="" />
        Client contract
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
        <Icon2 src="../../../media/icons/contract.png" alt="" />
        Supplier contract
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
        <Icon2 src="../../media/icons/entities.png" alt="" />
        Corporate
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
      <Icon2 src="../../../media/icons/contract.png" alt="" />
        Group Norms
        </Link>}
      </MenuItem>
      <MenuItem>
      {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link to="/Workspace" style={{textDecoration: 'none' , color:"black" }} >
      <Icon2 src="../../../media/icons/contract.png" alt="" />
        Real estate contracts
        </Link>}
      </MenuItem>
      </Scroll>
      <Line></Line>
    </ExpandedMenuContet>
  );
};
