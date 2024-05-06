'use client'

import styled from "styled-components";

export const FooterContainer = styled.section`
    display: grid;
    padding: 60px 0px 60px 0px;
    grid-template-columns: repeat(2, 1fr);
    gap: 110px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    }
`

export const FooterIconImg = styled.img`
    width: 100px;
`

export const FooterTitle = styled.h3`
    color: var(--cor-primary);
    font-size: 30px;
`

export const FooterDivIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 14px; 
    @media (min-width: 320px) and (max-width: 480px) {
      padding-left: 17px;
    }   
`

export const FooterSubTitle = styled.p`
   font-size: 17px;
   color: var(--cor-optional);
   width: 600px;
   padding-top: 15px;
   @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding-left: 12px;
    }  

`

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) and (max-width: 1024px) {
       padding-left: 141px;
    }

`

export const FooterUl = styled.ul`
    display: flex;
    flex-direction: column;
    color: var(--cor-primary);
    gap: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
     align-items: center;
     gap: 4px;
    }  

`

export const FooterDivText = styled.div`
display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
   
`

export const FooterListTItle = styled.p`
    font-size: 20px;
    color: var(--cor-primary);
    padding-bottom: 22px;
`

export const FooterLi = styled.li`
    display: flex;
    flex-direction: column;
    color: var(--cor-optional);
`

export const FooterDivIcons = styled.div`
    display: flex;
    gap: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
     align-items: center;
     justify-content: center;
}  
   @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
     justify-content: center;   
    }
`

export const FooterDivIconImg = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`