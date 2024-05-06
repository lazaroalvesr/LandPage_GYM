'use client'

import styled from "styled-components";

export const HeaderIconImg = styled.img`
    width: 80px;
`

export const HeaderTitle = styled.h3`
    color: var(--cor-primary);
    font-size: 20px;
`

export const HeaderDivIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 14px; 
    @media (min-width: 320px) and (max-width: 480px) {
      padding-left: 17px;
    }   
`

export const HeaderContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
    position: relative;
    @media (min-width: 768px) and (max-width: 1024px) {
        justify-content: space-around;
    }
    `

export const HeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
      flex-direction: column;
      border-top: 2px solid var(--cor-optional);
      position: absolute;
      width: 100%;
      align-items: center;
      background-color: var(--bg-primary);
      top: 80px;
      z-index: 1;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        gap: 27px;
    }
`

export const HeaderLi = styled.li`
    color: var(--cor-primary);
    list-style: none;
    cursor: pointer;
`

export const ButtonMobile = styled.button`
display: none;
@media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    background-color: var(--bg-primary);
    border: none;
    position: absolute;
    right: 14px;
    }
`