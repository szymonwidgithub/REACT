import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
const SingleEntityBox = styled.div`
    height:150px;
    border: 2px solid ;
    width:300px;
    margin-left:18px;
    margin-top:20px;
    float:left;
`;
const SingleEntityPicture = styled.img`
    height:150px;
    float:left;
    width:130px;
`;
const SingleEntityName = styled.div`
font-size:25px;
margin-top:20px;
margin-bottom:20px;
`;

const SingleEntityAddress = styled.div``;
const Main = styled.div``;
interface ISingleEntity{
    name: string;
    address: string;
    url: string;
    list:boolean;
}

export const SingleEntity: FC<ISingleEntity> = (props) => {
    return (
        
            <Main>
                {props.list}
        <SingleEntityBox style={{width:`${props.list?'200px':'1200px'}` ,}}>

                <SingleEntityPicture src={props.url}/>
                <SingleEntityName>
                    {props.name}
                </SingleEntityName>
                <SingleEntityAddress>
                    {props.address}
                </SingleEntityAddress>
            </SingleEntityBox>
            </Main>
    );
};