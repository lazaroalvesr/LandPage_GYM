'use client'

import styled from "styled-components";

export const ToPresentBg = styled.section`
    background-color: #1a1f23;
`

export const ToPresentContainer = styled.div`
    display:flex;
`
export const ToPresentDivImg = styled.div`
  width: 100%;
  height: 600px; 
  position: relative;
  display: flex;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
`;

export const ToPresentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-top: 20px;
  border-radius: 35px;
  @media (min-width: 320px) and (max-width: 480px) {
       padding-left: 8px;
       padding-right: 8px;
    }  
`;

export const ToPresentTitleImg = styled.p`
    color:white;
`

export const ToPresentTextSpan = styled.span`
    color: #FF5757;
`

export const ToPresentButtonToSign = styled.button`
    border: none;
    background-color: #FF5757;
    color: white;
    padding: 12px; 
    border-radius: 22px;
    margin-top: 17px;
    font-size: 14px;
    width: 180px;

    &&:hover{
        transform: scale(1.1);
    }
    `

export const ToPresentDiv = styled.div`
    position: absolute;
    background-color: #1a1f23;
    color: white;
    padding: 20px;
    width: 490px;
    top: 0px;
    gap: 4px;
    left: -0px;
    font-size: 30px;
    border-bottom-right-radius: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        font-size: 32px;
    }   
`

export const ToPresentImgGraphic = styled.img`
    width: 60px;
    height: 60px;
`;


export const ToPresentGraphic = styled.div`
    position: absolute;
    right:50px;
    display: flex;
    top: 110px;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: rgba(26, 31, 35, 0.5);
    border-radius: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
      display:none;
    }   
`;

export const TopresentGraphicName = styled.p`
    color: white;
    font-size: 30px;
`

export const TopresentGraphicSpan = styled.span`
    color: #FF5757;
    font-size: 12px;
    padding-top: 4px;
`

export const ToPrensentGraphicDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const ToPresentExperience = styled.div`
   position: absolute;
   background-color: rgba(26, 31, 35, 0.7);
   color: white;
   height: 90px;
   bottom: 0px;
   left: 0px;
   border-bottom-left-radius: 40pxx;
   display: flex;
   padding-left: 40px;
   gap: 120px;
   width: 900px;
   @media (min-width: 320px) and (max-width: 480px) {
       display: none;
    }  
`

export const ToPresentExperienceDivInfos = styled.p`
   display: flex;
   padding-top: 12px;
   flex-direction: column;
   text-align: center;
`

export const ToPresentExperienceInfosTitle = styled.p`
    color: #FF5757;
    font-size: 30px;
`

export const ToPresentExperienceInfosSubName = styled.p`
    color: white;
    font-size: 17px;
`

export const ToPresentInfoCoachs = styled.div`
    background-color: #1a1f23;
    width: 460px;
    height: 90px;
    position: absolute;
    right: 0px;
    align-items: center;
    display: flex;  
    bottom: 0px;
    gap: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        display: flex;
        padding-left: 42px;
    }  
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 500px;
      padding-left: 30px;
    }
`

export const ToPresentUserPictureDiv = styled.div`
   display: flex;
   background-color: #1a1f23;
   align-items: center;
   gap: 4px;
`

export const ToPresentUserPicture = styled.img`
   width: 45px;
   height: 45px;
   border-radius: 65px;
   align-items: center;
   display: flex;

`

export const ToPresentUserPictureBorder = styled.div`
   border: 3px solid #FF5757;
   border-radius: 40px;
`

export const ToPresentCoachName = styled.h2`
   font-size: 17px;
   color: white;
`

