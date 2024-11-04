"use client"

import { useEffect } from "react";
import { ToPresentProgramCard, ToPresentProgramCardDiv, ToPresentProgramDivAbout, ToPresentProgramDivContainer, ToPresentProgramDivImg, ToPresentProgramDivImgBorder, ToPresentProgramDivTitle } from "./styles/ProgramPresent.styles"
import AOS from 'aos'; 
import 'aos/dist/aos.css';

export const ProgramPresent = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);
    
    return (
        <ToPresentProgramCard data-aos="fade-up" >
            <ToPresentProgramCardDiv>
                <ToPresentProgramDivContainer>
                    <ToPresentProgramDivImg src="/img/Icons/Icon_Peso_Academia.png" alt="Icone de Peso de academia" />
                    <ToPresentProgramDivTitle>Treinamento de força</ToPresentProgramDivTitle>
                    <ToPresentProgramDivAbout>Nós focamos no aumento da força e resistência
                        dos músculos. envolve pesos, faixas de resistência, para
                        sobrecarregar os músculos.
                    </ToPresentProgramDivAbout>
                </ToPresentProgramDivContainer>
            </ToPresentProgramCardDiv>
            <ToPresentProgramCardDiv border="2px solid var(--cor-secondary)">
                <ToPresentProgramDivContainer>
                    <ToPresentProgramDivImgBorder>
                        <ToPresentProgramDivImg src="/img/Icons/Icon_Coracao.png" alt="Icone de Coração" />
                    </ToPresentProgramDivImgBorder>
                    <ToPresentProgramDivTitle>Treino cardiovascular</ToPresentProgramDivTitle>
                    <ToPresentProgramDivAbout>Nós focamos no aumentando a eficiência do sistema
                        cardiovascular, incluindo o coração e os pulmões.
                    </ToPresentProgramDivAbout>
                </ToPresentProgramDivContainer>
            </ToPresentProgramCardDiv>
            <ToPresentProgramCardDiv>
                <ToPresentProgramDivContainer>
                    <ToPresentProgramDivImg src="/img/Icons/Icon_Musculo.png" alt="Icone Peitoral Definido" />
                    <ToPresentProgramDivTitle>Queima de gordura</ToPresentProgramDivTitle>
                    <ToPresentProgramDivAbout>O treinamento intervalado de alta intensidade (HIIT)
                        estimula o corpo a queimar gordura armazenada como combustível
                    </ToPresentProgramDivAbout>
                </ToPresentProgramDivContainer>
            </ToPresentProgramCardDiv>
            <ToPresentProgramCardDiv>
                <ToPresentProgramDivContainer>
                    <ToPresentProgramDivImg src="/img/Icons/Icon_Musculos.png" alt="Icone Braço Forte" />
                    <ToPresentProgramDivTitle>Saúde</ToPresentProgramDivTitle>
                    <ToPresentProgramDivAbout>Incluindo rotinas de cardio, treinamento de força e flexibilidade,
                        contribui para a saúde cardiovascular, kStringMaxLength muscular e flexibilidade.
                    </ToPresentProgramDivAbout>
                </ToPresentProgramDivContainer>
            </ToPresentProgramCardDiv>
        </ToPresentProgramCard>
    )
}