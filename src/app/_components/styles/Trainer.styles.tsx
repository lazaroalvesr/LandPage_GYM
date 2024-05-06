'use client'

import styled from "styled-components";

export const TrainerContainer = styled.div`
       display: flex;
       flex-direction: column;
       margin: auto;
       padding-top: 70px;
       align-items: center;
`

export const TrainerDivText = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 600;
`

export const TrainerH1 = styled.h1`
    color: var(--cor-primary);
    display: flex;
    gap: 10px;
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        text-align: center;
    } 
`

export const TrainerP = styled.p`
    color: var(--cor-secondary);
`

export const CoachesDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 80px 0px 80px 0px;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);

    }
`

export const TrainerCoachDiv = styled.div`
    width: 280px;
    background-color: var(--bg-primary);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
`

export const TrainerCoachImg = styled.img`
    width: 280px;
    padding: 15px;
    border-radius: 30px;
`

export const TrainerCoachDivCardParagraph = styled.p`
      font-size: 15px;
      color: var(--cor-optional);
      margin: auto;
`

export const TrainerCoachDivCardTitle = styled.p`
      color: var(--cor-primary);
      margin: auto;
      font-weight: 700;
      padding-top: 4px;
`

export const TrainerDivIcons = styled.div`
    display: flex;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-bottom: 20px;
`

export const TrainerDivImgIcon = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`