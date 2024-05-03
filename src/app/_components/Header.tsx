'use client'

import { useEffect, useState } from "react"
import { ContainerGlobal } from "./styles/Global.styles"
import { ButtonMobile, HeaderBg, HeaderContainer, HeaderDivIcon, HeaderIconImg, HeaderLi, HeaderTitle, HeaderUl } from "./styles/Header.styles"
import { IoMdClose } from "react-icons/io"
import { CiMenuFries } from "react-icons/ci"

export const Header = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }

    const handleResize = () => {
        if (window.innerWidth < 728 && !ativo) {
            setAtivo(true)
        }

        if (window.innerWidth < 426 && ativo) {
            setAtivo(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ativo])

    return (
        <HeaderBg>
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
                    {ativo || (typeof window !== 'undefined' && window.innerWidth >= 728) ? (
                        <HeaderUl>
                            <HeaderLi>Home</HeaderLi>
                            <HeaderLi>Sobre Nós</HeaderLi>
                            <HeaderLi>Serviços</HeaderLi>
                            <HeaderLi>Comunidade</HeaderLi>
                            <HeaderLi>Agenda</HeaderLi>
                            <HeaderLi>Galeria</HeaderLi>
                        </HeaderUl>
                    ) : null}
                </HeaderContainer>
            </ContainerGlobal>
        </HeaderBg>
    )
}