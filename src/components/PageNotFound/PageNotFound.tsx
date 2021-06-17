import {FC} from "react";
import styled from 'styled-components';

const ErrorBox = styled.div`
margin-left:660px;
font-size: 50px;
color: gray;
margin-top:100px;
`;
const Eroor = styled.img`
width:400px;
position: absolute;
margin-top:100px;
margin-left:-135px;
`;

const Main = styled.div`
width:10000px;`;

const PageNotFound: FC = () =>{
    return(
        <Main>
        <ErrorBox>
           <Eroor src="/media/icons/error.png" alt=""/>Error
        </ErrorBox>
        </Main>
    )
}
export default PageNotFound;