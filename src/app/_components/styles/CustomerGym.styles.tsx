'use client'

import styled from "styled-components"

export const CustomerGymContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 80px;
`

export const CustomerGymh1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: var(--cor-primary);
    @media (min-width: 320px) and (max-width: 480px) {
       text-align: center;
    }  
`

export const CustomerGymSpan = styled.span`
   color: var(--cor-secondary);
   font-size: 30px;
`

export const CustomerGymDivContainer = styled.div`
  display: grid;
  gap: 22px;
  padding-top: 80px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
     align-items: center;
     padding-left: 15px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
     }
`

export const CustomerGymDiv = styled.div`
    width: 430px;
    background-color: var(--bg-primary);
    position: relative;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 95%;
    }  
  
`

export const CustomerGymImg = styled.img`
    width: 170px;
    height: 100%;
    align-items: start;
    justify-content: start;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 140px;
    }  
`

export const CustomerGymDivName = styled.div`
    background-color: var(--cor-secondary); 
    position: absolute;
    width: 170px;
    height: 40px;
    bottom: 0; 
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 140px;
    } 
`

export const CustomerGymName = styled.h1`
    color: var(--cor-primary);
    font-size: 20px;

`

export const CustomerGymAboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 22px;
    `

export const CustomerGymIconFiveStar = styled.img`
    width: 70px;
    position: absolute;
    right: 20px;
    top: -14px;
`

export const CustomerDiv = styled.div`
    position: relative;
    display: flex;
`

export const CustomerGymIconQuote = styled.img`
    width: 30px;
    padding-top: 40px;
`

export const CustomerGymAboutP = styled.p`
    color: var(--cor-optional);
    font-size: 11px;
    width: 200px;
    padding-top: 12px;
    text-align: start;
`