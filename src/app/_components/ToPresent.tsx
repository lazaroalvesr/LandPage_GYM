"use client"

import { ProgramPresent } from "./ProgramPresent";
import { BgSecondary, ContainerGlobal } from "./styles/Global.styles"
import { ToPresentButtonToSign, ToPresentContainer, ToPresentDivImg, ToPresentImg, ToPresentTextSpan, ToPresentTitleImg, ToPresentDiv, ToPresentGraphic, ToPresentImgGraphic, TopresentGraphicName, TopresentGraphicSpan, ToPrensentGraphicDiv, ToPresentExperience, ToPresentExperienceDivInfos, ToPresentExperienceInfosTitle, ToPresentExperienceInfosSubName, ToPresentInfoCoachs, ToPresentUserPictureDiv, ToPresentUserPicture, ToPresentUserPictureBorder, ToPresentCoachName, ToPresentProgramContainer, ToPresentProgramSpan, ToPresentProgramTitle } from "./styles/ToPresent.styles"
import { MdOutlineArrowOutward } from "react-icons/md";
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const ToPresent = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <BgSecondary>
            <ContainerGlobal>
                <ToPresentContainer>
                    <ToPresentDivImg>
                        <ToPresentImg src="/img/Pessoas_Treinando.jpg" alt="Duas Pessoas fazendo exercicio juntas"/>
                        <ToPresentDiv>
                            <ToPresentTitleImg>
                                <ToPresentTextSpan>Construir a forma perfeita </ToPresentTextSpan>
                                para uma vida boa e saudável.</ToPresentTitleImg>
                            <ToPresentButtonToSign>faça uma adesão <MdOutlineArrowOutward /></ToPresentButtonToSign>
                        </ToPresentDiv>
                        <ToPresentGraphic>
                            <ToPresentImgGraphic src="/img/Icons/Icon_Grafico_Barra.png" alt="Gráfico de Barra" />
                            <ToPrensentGraphicDiv>
                                <TopresentGraphicName>250 kcal</TopresentGraphicName>
                                <TopresentGraphicSpan>Calorias Queimadas</TopresentGraphicSpan>
                            </ToPrensentGraphicDiv>
                        </ToPresentGraphic>
                        <ToPresentExperience>
                            <ToPresentExperienceDivInfos>
                                <ToPresentExperienceInfosTitle>50+</ToPresentExperienceInfosTitle>
                                <ToPresentExperienceInfosSubName>Treinadores Experientes</ToPresentExperienceInfosSubName>
                            </ToPresentExperienceDivInfos>
                            <ToPresentExperienceDivInfos>
                                <ToPresentExperienceInfosTitle>1200+</ToPresentExperienceInfosTitle>
                                <ToPresentExperienceInfosSubName>Membros Ingressou</ToPresentExperienceInfosSubName>
                            </ToPresentExperienceDivInfos>
                            <ToPresentExperienceDivInfos>
                                <ToPresentExperienceInfosTitle>50+</ToPresentExperienceInfosTitle>
                                <ToPresentExperienceInfosSubName>Programas de fitness</ToPresentExperienceInfosSubName>
                            </ToPresentExperienceDivInfos>
                        </ToPresentExperience>
                        <ToPresentInfoCoachs>
                            <ToPresentUserPictureDiv>
                                <ToPresentUserPictureBorder>
                                    <ToPresentUserPicture src="/img/Coach_1.jpg" alt="Treinador" />
                                </ToPresentUserPictureBorder>
                                <ToPresentUserPictureBorder>
                                    <ToPresentUserPicture src="/img/Coach_2.jpg" alt="Treinador" />
                                </ToPresentUserPictureBorder>
                                <ToPresentUserPictureBorder>
                                    <ToPresentUserPicture src="/img/Coach_3.jpg" alt="Treinador" />
                                </ToPresentUserPictureBorder>
                                <ToPresentUserPictureBorder>
                                    <ToPresentUserPicture src="/img/Coach_4.jpg" alt="Treinador" />
                                </ToPresentUserPictureBorder>
                            </ToPresentUserPictureDiv>
                            <ToPresentCoachName>Treinadores Experientes</ToPresentCoachName>
                        </ToPresentInfoCoachs>
                    </ToPresentDivImg>
                    <ToPresentProgramContainer data-aos="fade-up">
                        <ToPresentProgramTitle> <ToPresentProgramSpan>Programa</ToPresentProgramSpan> Projetado para você</ToPresentProgramTitle>
                    </ToPresentProgramContainer>
                    <ProgramPresent />
                </ToPresentContainer>
            </ContainerGlobal>
        </BgSecondary>
    )
}