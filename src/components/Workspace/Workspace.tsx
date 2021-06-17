import { FC } from "react";
import styled from "styled-components";
import { fonts, titlleFont } from "../../styledHelpers/Fonts";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 50px;
  margin-top: 20px;
`;
const CorporateDiv = styled.div`
  margin-left: 15px;
  height: 200px;
  width: 860px;
  background-color: white;
  margin-top: 50px;
  box-shadow: 2px 2px 4px 2px #a3a3a381;
  border-radius: 5px;
`;
const CorporateImage = styled.img``;
const SettingsIcon = styled.img`
  float: right;
  margin-top: 9px;
  height: 20px;
  width: auto;
  padding-right: 25px;
`;
const CorporateLabel = styled.label`
  float: left;
  padding-top: 10px;
  padding-left: 100px;
  font-size: 20px;
`;
const EntityIcon1 = styled.img`
  height: 50px;
  margin-top: -15px;
  margin-left: 28px;
`;
const MidDiv = styled.div`
  height: 30px;
  background-color: white;
`;

const Label = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: -33px;
`;
const SliderDiv = styled.div`
  background-color: #eeebeb;
  width: 890px;
  height: 240px;
  margin-top: 20px;
  display: flex;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`;

const SliderTitle = styled.label`
  position: absolute;
  font-size: 20px;
  color: grey;
  margin-left: 50px;
  margin-top: 15px;
`;
const Box = styled.div`
  height: 170px;
  width: 250px;
  background-color: white;
  margin-top: 50px;
  margin-left: 35px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`;
const Icon = styled.img`
  height: 40px;
  margin-top: 20px;
  margin-left: 10px;
`;
const TitleDiv = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  font-size: 20px;
`;
const LabelDiv = styled.div`
  margin-top: 15px;
  margin-left: 10px;
`;
const BackgroundImg = styled.img`
  width: auto;
  height: 130px;
  opacity: 0.3;
  position: absolute;
  margin-top: 20px;
  margin-left: 120px;
`;
// const MainResumeDiv = styled.div`
//   width: 890px;
//   height: 70px;
//   background-color: white;
//   margin-top: 10px;
//   margin-left: 65px;
//   box-shadow: 2px 4px 8px 1px #8e8e8e;
//   border-radius: 5px;
// `;

// const Work = styled.div`
// max-height: 100px;
// `;

// const TitlleDiv = styled.div``;

// const Title = styled.div`
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 20px;
//   color: #27279e;
//   font-weight: 700;
//   margin-left: 20px;
// `;
// const Lorem = styled.label`
//   font-size: 13px;
// `;

// const LoremDiv = styled.div`
//   margin-left: 20px;
//   margin-top: 5px;
//   margin-bottom: 5px;
// `;

// const IconDiv = styled.div`
//   margin-left: 20px;
// `;

// const IconLabel = styled.label`
//   padding-left: 10px;
//   padding-right: 10px;
//   float: left;
// `;

// const IconResume = styled.img`
//   float: left;
// `;

// const DateLabel = styled.label`
//   margin-left: 30px;
//   font-size: 13px;
//   font-weight: 2;
//   color: grey;
// `;



export const Workspace: FC = () => {
  return (
    <MainDiv>
      <CorporateDiv>
        <CorporateImage src="/media/images/office.jpg" />
        <CorporateLabel> Corporate Holdings </CorporateLabel>
        <MidDiv>
          <SettingsIcon src="/media/icons/settings2.png" />
        </MidDiv>
        <EntityIcon1 src="/media/icons/entities2.png" />
        <Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Label>
      </CorporateDiv>
      <SliderDiv>
        <SliderTitle>Start Working on corporate matters</SliderTitle>
        <Box>
          <BackgroundImg src="/media/icons/entities.png" />
          <Icon src="/media/icons/entities.png" />
          <TitleDiv>Explore Your Entities</TitleDiv>
          <LabelDiv>
            Take a few minutes to look at the most important elements and
            specificities of your entities
          </LabelDiv>
        </Box>
        <Box>
          <BackgroundImg src="/media/icons/diagram.png" />
          <Icon src="/media/icons/diagram.png" />
          <TitleDiv>Structure the ownership</TitleDiv>
          <LabelDiv>
            Get a clear view of the ownership by looking at the relactions
            between individuals and entities
          </LabelDiv>
        </Box>
        <Box>
          <BackgroundImg src="/media/icons/calendar.png" />
          <Icon src="/media/icons/calendar.png" />
          <TitleDiv>Define the calendar</TitleDiv>
          <LabelDiv>
            Preoare future events by creating detalied plans around the life of
            your entity
          </LabelDiv>
        </Box>
      </SliderDiv>

      
      
      {/* <MainResumeDiv>
        <TitlleDiv>
          <Title>Work Company SAS</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <IconResume src="../media/icons/corporate.png" />

          <IconLabel>Subsid.corp</IconLabel>
          <IconResume src="../media/icons/corporate.png" />
          <IconLabel>Corporate</IconLabel>
          <DateLabel>Last update 3 days ago by Kuba Niugen</DateLabel>
        </IconDiv>
      </MainResumeDiv> */}
     
      
    </MainDiv>
  );
};
