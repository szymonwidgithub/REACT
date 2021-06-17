import { FC } from "react";
import styled from "styled-components";
const MainResumeDiv = styled.div`
  width: 890px;
  height: 70px;
  background-color: white;
  margin-top: 10px;
  margin-left: 65px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`;


const TitlleDiv = styled.div``;

const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #27279e;
  font-weight: 700;
  margin-left: 20px;
`;
const Lorem = styled.label`
  font-size: 13px;
`;

const LoremDiv = styled.div`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const IconDiv = styled.div`
  margin-left: 20px;
`;

const IconLabel = styled.label`
  padding-left: 10px;
  padding-right: 10px;
  float: left;
`;

const IconResume = styled.img`
  float: left;
`;

const DateLabel = styled.label`
  margin-left: 30px;
  font-size: 13px;
  font-weight: 2;
  color: grey;
`;
interface ISingleResume{
    title: string;
    label: string;
    url: string;
    iconLabel:string;
    autor:string;
    subAutor:string;
}


export const SingleResume: FC<ISingleResume> = (props) => {

    return (
        
        <MainResumeDiv>
        <TitlleDiv>
          <Title>{props.title}</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            {props.label}
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <IconResume src={props.url} />

          <IconLabel>{props.iconLabel}</IconLabel>
          <IconResume src={props.url} />
          <IconLabel>{props.subAutor}</IconLabel>
          <DateLabel>{props.autor}</DateLabel>
        </IconDiv>
      </MainResumeDiv>
     
    );
};

