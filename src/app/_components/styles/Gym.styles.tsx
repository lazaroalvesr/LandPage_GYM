'use client'

import styled from "styled-components";

export const GymContainer = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 80px 0 80px 0px;
`

export const Gymh1 = styled.h1`
    font-size: 30px;
    color: var(--cor-primary);
    margin: auto;
    @media (min-width: 320px) and (max-width: 480px) {
       text-align: center;
    }  
`

export const GymSpan = styled.span`
   color: var(--cor-secondary);
`

export const GymInfos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 80px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const GymItensInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
       padding-left: 12px;
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 4%;
    }
`

export const GymListItem = styled.div`
    display: flex;
`

export const GymListItemImg = styled.img`
    width: 60px;
    height: 60px;
`

export const GymListText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`

export const GymListItemTitle = styled.h2`
    font-size: 20px;
    padding-bottom: 12px;
    font-weight: 700;
    color: var(--cor-primary);
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    } 
`

export const GymListItemP = styled.p`
    font-size: 16px;
    color: var(--cor-optional);
    width: 480px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }  
`

export const GymDivImg= styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    margin: auto;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    } 
`

export const GymImg = styled.img`
    width: 100%;
    border-radius: 30px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        margin-top: 40px;
        padding: 0px 14px 0px 14px;
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 40px;
        padding: 0px 14px 0px 14px;
    }
`