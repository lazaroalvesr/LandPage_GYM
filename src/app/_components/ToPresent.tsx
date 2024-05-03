import { ContainerGlobal } from "./styles/Global.styles"
import { ToPresentButtonToSign, ToPresentBg, ToPresentContainer, ToPresentDivImg, ToPresentImg, ToPresentTextSpan, ToPresentTitleImg, ToPresentDiv, ToPresentGraphic, ToPresentImgGraphic, TopresentGraphicName, TopresentGraphicSpan, ToPrensentGraphicDiv, ToPresentExperience, ToPresentExperienceDivInfos, ToPresentExperienceInfosTitle, ToPresentExperienceInfosSubName, ToPresentInfoCoachs, ToPresentUserPictureDiv, ToPresentUserPicture, ToPresentUserPictureBorder, ToPresentCoachName } from "./styles/ToPresent.styles"
import { MdOutlineArrowOutward } from "react-icons/md";

export const ToPresent = () => {
    return (
        <ToPresentBg>
            <ContainerGlobal>
                <ToPresentContainer>
                    <ToPresentDivImg>
                        <ToPresentImg src="/img/Personal_trainner.jpg" />
                        <ToPresentDiv>
                            <ToPresentTitleImg>
                                <ToPresentTextSpan>Construir a forma perfeita </ToPresentTextSpan>
                                para uma vida boa e saudável.</ToPresentTitleImg>
                            <ToPresentButtonToSign>faça uma adesão <MdOutlineArrowOutward /></ToPresentButtonToSign>
                        </ToPresentDiv>
                        <ToPresentGraphic>
                            <ToPresentImgGraphic src="/img/Icons/Grafico_Barra.png" alt="Gráfico de Barra" />
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
                                    <ToPresentUserPicture src="/img/Coach_1.jpg"  alt="Treinador"/>
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
                </ToPresentContainer>
            </ContainerGlobal>
        </ToPresentBg>
    )
}