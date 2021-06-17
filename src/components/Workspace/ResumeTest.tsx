import React, {  FC  } from 'react';
import styled from 'styled-components';
import {SingleResume} from "./ISingleResumeWorkspace"

const ResumeWrapper =styled.div`
`;

export const Resume: FC = () => {
  
const Resume = [
    {title : "ABC generic company",
    label : " Caracas 1050, Distrito Capital, Venezuela",
    url:"../media/icons/corporate.png",
    iconLabel: "Corporate",
    autor: "Last update 3 days ago by Kuba Niugen",
    subAutor:"Subsid.corp"
    }
]
for(let i=0; i <40; i++)
{
    Resume.push({title: "ABC generic company", label: "Caracas 1050, Distrito Capital, Venezuela", url:"../media/icons/corporate.png",
    iconLabel:"Corporate",autor:"Last update 3 days ago by Kuba Niugen",subAutor:"Subsid.corp" })
}
return (
    
    <ResumeWrapper>
         {Resume.map(resume =>(
            <SingleResume title={resume.title} label={resume.label} url={resume.url} iconLabel={resume.iconLabel} autor={resume.autor} subAutor={resume.subAutor}/>
        ))} 
    </ResumeWrapper>
);
};