'use client'

import styled from "styled-components";

export const CoachContainer = styled.div`
    display: flex;
    padding-top: 80px;
    padding-bottom: 80px;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export const CoachDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
      align-items: center;
      text-align: center;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        align-items: center;
      text-align: center;
    }
`

export const CoachText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
`

export const CoachH1 = styled.h1`
    font-size: 30px;
    color: var(--cor-primary);
    font-weight: 600;
`

export const CoachP = styled.p`
    color: var(--cor-secondary);
`

export const CoachAbout = styled.h2`
    font-size: 15px;
    padding-top: 22px;
    width: 690px;
    color: var(--cor-optional);
    width: 520px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding-left: 7px;
        padding-right: 7px;
    } 
`

export const CoachButton = styled.button`
    width: 230px;
    background-color: var(--cor-secondary);
    padding: 20px;
    margin-top: 30px;
    border-radius: 60px;
    color: var(--cor-primary);
    cursor: pointer;
`

export const CoachDivImgs = styled.div`
    display: flex;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 480px) {
        overflow-y: scroll;
        padding-left: 20px;
        padding-right: 18px;
        padding-top: 40px;
    } 
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-top: 60px;
    }
    `

export const CoachDivVideo = styled.video`
    height: 400px;
    border-radius: 40px;
`

export const CoachDivImg = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 40px;
`