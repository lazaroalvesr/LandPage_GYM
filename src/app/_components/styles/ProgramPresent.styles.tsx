'use client'

import { CardProps } from "@/lib/interface";
import styled from "styled-components";

export const ToPresentProgramCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    cursor: pointer;
    padding-top: 70px;
    padding-bottom: 124px;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    }
`

export const ToPresentProgramCardDiv = styled.div<CardProps>`
    width: 270px;
    height: 250px;
    background-color: #282d31;
    border-radius: 40px;
    border: ${(props) => props.border || 'none'}; 
    transition: transform 0.3s ease; 

    &&:hover{
        transform: scale(1.1);
    }
`

export const ToPresentProgramDivContainer = styled.div`
    padding: 30px;
`



export const ToPresentProgramDivImg = styled.img`
    width: 35px;
    height: 35px;
`

export const ToPresentProgramDivImgBorder = styled.div`
    width: 10px;
    height: 10px;
    border: 3px solid #FF5757;
    padding: 20px;
    border-radius: 8px;
    align-items: center;
    display: flex;
    justify-content: center;
`


export const ToPresentProgramDivTitle = styled.h1`
    color:  #fff;
    font-size: 18px;
    padding-top: 12px;
`

export const ToPresentProgramDivAbout = styled.h1`
    color:  #6d7174;
    font-size: 14px;
    padding-top: 24px;
`

