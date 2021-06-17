import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {IState} from '../../reducers';
import {useSelector} from 'react-redux';
import {ISingleUser} from '../../entities/users'
import {ISinglePhoto} from '../../entities/photos'

const LeftPanel = styled.div`
  width: 240px;
  height: 350px;
  float:left;
  
`;
const TopPanel = styled.div`
  height: 200px;
  width: 200px;
  margin-left: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`;

const BottomPanel = styled.div`
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

const PubICon = styled.div`
  padding-top: 10px;
`;
const EcoICon = styled.div`
  padding-top: 10px;
`;
const EntIcon = styled.div`
  padding-top: 10px;
  
`;
const PartOne = styled.div``;
const PartTwo = styled.div`
  padding-top: 7px;
`;
const Logo = styled.img`
  height: 50%;
  width: 50%;
  margin-left: 40px;
  margin-top: 20px;
  border-radius:50%;
`;
const Title = styled.label`
  margin-left: 40px;
  margin-top: 20px;
  
`;
const ItemLink = styled.div`
  margin-left: -10px;
  height: 1px;
  width: 210px;
  background-color: gray;
  display: flex;
`;

export const LeftMenu: FC = () => {
  const usersList = useSelector<IState, ISingleUser[]>(state => state.users.usersList)
  const photosList = useSelector<IState, ISinglePhoto[]>(state => state.photos.photosList)
  
  return (
    
    <LeftPanel>
       
      <TopPanel>
     
        <Title>{usersList[0]?usersList[0].name:""}</Title>
        <Logo src={photosList[0]?photosList[0].thumbnailUrl:""} />
        <ItemLink></ItemLink>
        <PartOne>
          <img src="./media/icons/network.png" alt=""></img>
          <Link to="/PageNotFound" style={{ padding: "20px",textDecoration: 'none' , color:"black" }}>
            Your Network
          </Link>
          <img src="./media/icons/user-plus.png" alt=""></img>
        </PartOne>
        <PartTwo>
          <img src="./media/icons/publications.png" alt=""></img>
          <Link to="PageNotFound" style={{ padding: "20px",textDecoration: 'none' , color:"black" }}>
            Your Publications
          </Link>
          <img src="./media/icons/plus.png"  alt=""></img>
        </PartTwo>
      </TopPanel>
      <BottomPanel>
        <PubICon>
          <img src="./media/icons/publications.png" alt=""></img>
          <Link to="/PageNotFound" style={{ padding: "10px",textDecoration: 'none' , color:"black" }}>
            publications
          </Link>
          
        </PubICon>
        <EcoICon>
          <img src="./media/icons/ecosystem.png" alt=""></img>
          <Link to="/Profile" style={{ padding: "10px",textDecoration: 'none' , color:"black" }}>
            profile
          </Link>
        </EcoICon>
        <EntIcon>
          <img src="./media/icons/entities.png" alt=""></img>
          <Link to="/entities" style={{ padding: "10px",textDecoration: 'none' , color:"black" }}>
            entities
          </Link>
        </EntIcon>
      </BottomPanel>
    </LeftPanel>
  );
};
