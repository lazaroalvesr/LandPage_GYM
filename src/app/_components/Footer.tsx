import { FooterList } from "./FooterList"
import { FooterContainer, FooterDiv, FooterDivIcon, FooterDivIconImg, FooterDivIcons, FooterDivText, FooterIconImg, FooterLi, FooterListTItle, FooterSubTitle, FooterTitle, FooterUl } from "./styles/Footer.styles"
import { BgPrimary, ContainerGlobal } from "./styles/Global.styles"

export const Footer = () => {
    return (
        <BgPrimary>
            <ContainerGlobal>
                <FooterContainer>
                    <FooterDiv>
                        <FooterDivIcon>
                            <FooterIconImg
                                src="/img/Icons/Icon_Gym.png"
                                alt="Icone da Academia"
                            />
                            <FooterTitle>BestGym</FooterTitle>
                        </FooterDivIcon>
                        <FooterSubTitle>
                            A Best Gym é a academia ideal para quem busca resultados eficazes e um ambiente acolhedor.
                            Com instrutores qualificados e equipamentos modernos, estamos comprometidos em ajudar nossos
                            clientes a alcançarem seus objetivos fitness de forma saudável e motivadora
                        </FooterSubTitle>
                    </FooterDiv>
                    <FooterDivText>
                        <FooterList
                            title="Fitness"
                            items={
                                [
                                    "Grupo Fitness",
                                    "Personal Trainer",
                                ]
                            }
                        />

                        <FooterList
                            title="Aprender"
                            items={
                                [
                                    "Sobre",
                                    "Carreiras",
                                ]
                            }
                        />

                        <FooterList
                            title="Ajuda"
                            items={
                                [
                                    "Contate-nos",
                                    "Política do Clube",
                                ]
                            }
                        />
                    </FooterDivText>
                    <FooterDivIcons>
                        <FooterDivIconImg
                            src="/img/Icons/Icon_Facebook.png"
                            alt="Icone do Facebok"
                        />
                        <FooterDivIconImg
                            src="/img/Icons/Icon_Linkedin_BgPrimary.png"
                            alt="Icone do Linkedin"
                        />
                        <FooterDivIconImg
                            src="/img/Icons/Icon_InstagramFill.png"
                            alt="Icone do Instagram Preenchido na cor Branco"
                        />
                        <FooterDivIconImg
                            src="/img/Icons/Icon_Twiter.png"
                            alt="Icone do Twitter"
                        />
                    </FooterDivIcons>
                </FooterContainer>
            </ContainerGlobal>
        </BgPrimary>
    )
}