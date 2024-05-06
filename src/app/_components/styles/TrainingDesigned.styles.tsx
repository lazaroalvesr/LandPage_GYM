'use client'

import styled from "styled-components";

export const TrainingDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
`

export const TrainingDivTitle = styled.div`
  display: flex;
   width: 420px;
   flex-direction: column;
   @media (min-width: 320px) and (max-width: 480px) {
     align-items: center;
     width: 340px;
     margin: auto;
}  
    @media (min-width: 768px) and (max-width: 1024px) {
       align-items: center;
       margin: auto;
    }
`

export const Trainingh1 = styled.h1`
    font-size: 30px;
    color: var(--cor-primary);
`

export const TrainingSpan = styled.span`
    color: var(--cor-secondary);
    font-size: 40px;
`

export const TrainingDivContainerImg = styled.div`
    display: grid;
    padding-top: 70px;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 90px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        margin: auto;
        gap: 50px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    gap: 50px;
    }
`

export const TrainingDivImg = styled.div`
    width: 290px;
    cursor: pointer;
    transition: transform 0.3s ease; 
    
    &&:hover{
        transform: scale(1.1);
    }
`

export const TrainingImg = styled.img`
    width: 100%; 
    border-radius: 20px;
    object-fit: cover;
`

export const TrainingImgName = styled.p`
    color: var(--cor-primary);
    font-size: 18px;
    padding-left: 6px;
    white-space: nowrap;
    font-weight: 500;
`

export const TrainingDivIconArrowTop = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--bg-optional);
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;

`

export const TrainingIconArrowTop = styled.img`
    width: 20px;
    height: 20px;
`

export const TrainingDiv = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
        padding-top: 10px;
}  
`
