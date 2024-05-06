'use client'

import { CardPlanProps } from "@/lib/interface";
import styled from "styled-components";

export const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0px 80px 0px;
    align-items: center;
`

export const PlanH1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: var(--cor-secondary);
`

export const PlanSpan = styled.span`
    color: var(--cor-primary);
`

export const PlanCardPlans = styled.div`
    display: grid;
    gap: 80px;
    grid-template-columns: repeat(3, 1fr);
`

export const PlansCardContainer = styled.div`
      overflow-x: visible;
      padding: 120px 40px 80px 40px;
    @media (min-width: 320px) and (max-width: 480px) {
       overflow-x: scroll;
       width: 100%;
       padding: 120px 40px 80px 40px;
       display: flex;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
        overflow-x: scroll;
         padding: 120px 40px 80px 40px;
         display: flex;
         width: 100%;
    }
`

export const PlanCard = styled.div<CardPlanProps>`
    width: 290px;
    border: 2px solid var(--cor-secondary);
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    border-radius: 20px;
    transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
`
export const PlanCardContainer = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
`

export const PlanCardIcon = styled.img`
    width: 45px;
    height: 45px;
`

export const PlanCardH1 = styled.h1`
    font-size: 20px;
    padding-top: 14px;
    color: var(--cor-primary);
`

export const PlanCardPrice = styled.p`
    font-size: 20px;
    color: var(--cor-secondary);
    display: flex;
    padding-top: 8px;
    font-weight: 700;
`

export const PlanCardPriceSecondy = styled.p`
    color: var(--cor-optional);
    font-weight: 300;
`

export const PlanCardItemsUl = styled.ul`
    display: flex;
    padding-top: 22px;
    flex-direction: column;
    gap: 12px;
   
`

export const PlanCardItemImg = styled.img`
    width: 20px;
    height: 20px;
`

export const PlanCardItemLi = styled.li`
    display: flex;
    color: var(--cor-optional);
    align-items: center;
    gap: 12px;
    font-size: 15px;
`

export const PlanCardLink = styled.a`
    display: flex;
    text-decoration: none;
`

export const PlanCardButton = styled.button<CardPlanProps>`
    border: 2px solid var(--cor-secondary);
    display: flex;
    background: ${(props) => (props.backGroundColor ? `var(--cor-secondary)` : 'none')};
    border-radius: 12px;
    align-items: center;
    text-align: center;
    font-size: 12px;
    margin: auto;
    padding: 6px 20px 6px 20px;
    gap: 8px;
    color: var(--cor-primary);
    cursor: pointer;
    transition: transform 0.3s ease; 

    &&:hover{
        transform: scale(1.1);
    }
`

export const PlanCardButtonIcon = styled.img`
    width: 12px;
    height: 12px;
    color: white;
`