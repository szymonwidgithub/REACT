import {FC} from "react";
import styled from 'styled-components';
import {IState} from '../../reducers';
import {useSelector} from 'react-redux';
import {ISingleUser} from '../../entities/users'
import {ISinglePhoto} from '../../entities/photos'


const LatestPublicationsList = styled.div`
background-color: white;
width: 620px;
height: 270px;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
margin-left: 20px;
float: left;
`


const PhotoBoxImg = styled.img`
width: 312px;
height: 270px;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
float: left;
`
const LatestPublicationsBox = styled.div`
position: relative;
width: 900px;
height: 270px;
padding: 20px;
margin-left:45px;
`
const LatestPubText = styled.text`
font-size: 18px;
`

const PublicationBox = styled.div`
height: 50px;
margin-top: 5px;
margin-bottom: 5px;
width: 100%;
`
const TitleBox = styled.div`
margin-top: 10px;
margin-left:10px;
`
const PhotoBox = styled.div`
width: 250px;
height: 250px;
border-radius: 5%;
float: left;
`
const MiniPhoto = styled.img`
width:50px;
height: 50px;
margin-left: 10px;
float: left;
margin-right: 10px;
`
const PublicationsText = styled.text`
font-size: 16;
`
const PublicationsTextBox = styled.div`
padding:5px;
`
const DateText = styled.text`
font-size: 10px;
float: left;
`
const Writer = styled.text`
font-size: 10px;
float: left;
margin-left: 3px;
`

const WriterPhoto = styled.img`
width: 10px;
float: left;
margin-left: 20px;
height: 10px;
border-radius: 50%;
` 

export const LatestPublications: FC = () =>{

    const usersList = useSelector<IState, ISingleUser[]>(state => state.users.usersList)
    const photosList = useSelector<IState, ISinglePhoto[]>(state => state.photos.photosList)
    const Random = usersList[Math.floor(Math.random() * usersList.length)]?.id;
    return(
        <LatestPublicationsBox>
            <PhotoBox>
                <PhotoBoxImg src={photosList[Random]?.url}/>
            </PhotoBox>
            <LatestPublicationsList>
                <TitleBox>
                    <LatestPubText>Latest Publications</LatestPubText>
                </TitleBox>


                <PublicationBox>
                    <MiniPhoto src={photosList[Random]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photosList[Random]?.url}/>
                        <Writer>{usersList[Random]?.name}</Writer>
                </PublicationBox>
 
                <PublicationBox>
                    <MiniPhoto src={photosList[Random]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photosList[Random]?.url}/>
                        <Writer>{usersList[Random]?.name}</Writer>
                </PublicationBox>


                <PublicationBox>
                    <MiniPhoto src={photosList[Random]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photosList[Random]?.url}/>
                        <Writer>{usersList[Random]?.name}</Writer>
                </PublicationBox>

                <PublicationBox>
                    <MiniPhoto src={photosList[Random]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photosList[Random]?.url}/>
                        <Writer>{usersList[Random]?.name}</Writer>
                </PublicationBox>
            </LatestPublicationsList>

        </LatestPublicationsBox>
    )
}
