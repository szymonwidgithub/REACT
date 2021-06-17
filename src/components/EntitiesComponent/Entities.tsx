import styled from "styled-components";
import React, { FC, ChangeEvent, useState } from 'react';
import { SingleEntity } from "./ISingleEntity";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { ISinglePhoto } from "../../entities/photos";

const EntitysWrapper = styled.div``;
const EntityMarginDiv = styled.div`
  width: 1400px;
  margin-left: 100px;
`;
const MainDiv = styled.div`
  margin-left: 120px;
  margin-top: 30px;
`;
const TopDiv = styled.div``;
const TitleLabel = styled.label`
  float: left;
  font-size: 20px;
`;
const MosaicLabel = styled.label`
  font-size: 20px;
  margin-left: 1100px;
`;
const IconSettings = styled.img`
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
  height: 15px;
`;
const GridIcon = styled.img`
  position: absolute;
  margin-top: -20px;
  margin-left: 1130px;
  height: 20px;
`;

const AllMenuDiv = styled.div`
  height: 20px;
  width: 40px;

  padding:2px;
  margin-top:5px;
  font-size:15px;

`;
const ArrowIcon = styled.img`
position: absolute;
margin-top:2px;
margin-left:5px;
`;
const ShareButton = styled.img`
margin-right:10px;
position: absolute;
margin-left:-30px;
`;
const ShareButtonDiv = styled.div`
position: absolute;
margin-left:1160px;
margin-top:-20px;
font-size:20px;
`;
const ButtonDiv = styled.div`
background-color:red;
`;

export const Entity: FC = () => {
  const photosList = useSelector<IState, ISinglePhoto[]>(
    (state) => state.photos.photosList
  );

  const copy = () =>{
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Skopiowano adres strony.")
}

  const entity = [];
  for (let i = 0; i < 24; i++) {
    entity.push({
      name: "ABC",
      address: "Caracas 1050 Distro Capital Venezuela ",
      url: photosList[Math.floor(Math.random() * photosList.length)]?.url,
    });
  }

  const [list , setLayout] = useState(false);
    const handleClick = () => {
        setLayout(current => !current);
    }


  return (
    <EntitysWrapper>
      <MainDiv>
          <TopDiv>
        <TitleLabel>Entities</TitleLabel>
        <IconSettings src="/media/icons/settings2.png" />
        </TopDiv>
        <ButtonDiv onClick={handleClick}>
        <MosaicLabel>Mosaic</MosaicLabel>
        <GridIcon src="/media/icons/grid.png" alt="" />
        </ButtonDiv>
        <AllMenuDiv>
            All
            <ArrowIcon src="/media/icons/arrow-down.png" alt=""></ArrowIcon>
        </AllMenuDiv>
        <ShareButtonDiv onClick={copy}>
                <ShareButton src="./media/icons/file.png"/>Share
        </ShareButtonDiv>
        
      </MainDiv>
      
      <EntityMarginDiv>
        {entity.map((entity) => (
          <SingleEntity
            name={entity.name}
            address={entity.address}
            url={entity.url}
            list={list}
          />
        ))}
      </EntityMarginDiv>
    </EntitysWrapper>
  );
};
