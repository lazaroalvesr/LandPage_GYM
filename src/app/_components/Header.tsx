'use client'

import { useState } from "react"
import { BgPrimary, ContainerGlobal } from "./styles/Global.styles"
import { ButtonMobile, HeaderContainer, HeaderDivIcon, HeaderIconImg, HeaderLi, HeaderTitle, HeaderUl } from "./styles/Header.styles"
import { IoMdClose } from "react-icons/io"
import { CiMenuFries } from "react-icons/ci"

export const Header = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }

    return (
        <BgPrimary>
            <ContainerGlobal>
                <HeaderContainer>
                    <HeaderDivIcon>
                        <HeaderIconImg
                            src="/img/Icons/Icon_Gym.png"
                            alt="Icone da Academia"
                        />
                        <HeaderTitle>BestGym</HeaderTitle>
                    </HeaderDivIcon>
                    <ButtonMobile onClick={toggle} aria-label="Menu Mobile">
                        {ativo ? < IoMdClose size={30} color="white" /> : <CiMenuFries size={30} color="white" />}
                    </ButtonMobile>
                    <HeaderUl ativo={ativo}>
                        <HeaderLi>Home</HeaderLi>
                        <HeaderLi>Sobre Nós</HeaderLi>
                        <HeaderLi>Serviços</HeaderLi>
                        <HeaderLi>Comunidade</HeaderLi>
                        <HeaderLi>Agenda</HeaderLi>
                        <HeaderLi>Galeria</HeaderLi>
                    </HeaderUl>
                </HeaderContainer>
            </ContainerGlobal>
        </BgPrimary>
    )
}