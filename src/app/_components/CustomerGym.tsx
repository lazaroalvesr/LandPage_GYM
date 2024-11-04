"use client"

import { useEffect } from "react";
import { CustomerGymCard } from "./CustomerGymCard"
import { CustomerGymContainer, CustomerGymDivContainer, CustomerGymSpan, CustomerGymh1 } from "./styles/CustomerGym.styles"
import AOS from 'aos'; 
import 'aos/dist/aos.css';

export const CustomerGym = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);


    return (
        <CustomerGymContainer data-aos="fade-up">
            <CustomerGymh1>O que nossos clientes</CustomerGymh1>
            <CustomerGymSpan>pensa sobre nossa academia?</CustomerGymSpan>
            <CustomerGymDivContainer>
                <CustomerGymCard
                    name="Maria Silva"
                    src="/img/Customer_1.jpg"
                    alt="Foto de uma mulher levantando peso"
                    about="Estou muito satisfeito com a academia! 
                A avaliação personalizada foi fundamental para criar
                 um plano de treino eficaz, e o suporte contínuo da
                  equipe fez toda a diferença na minha jornada de fitness. 
                  Recomendo!"
                />
                <CustomerGymCard
                    name=" Ana Santos"
                    src="/img/Customer_2.jpg"
                    alt="Foto de um cara exercicando dando murro em um saco de pancada"
                    about="Minha experiência na academia superou 
                    todas as expectativas! A avaliação inicial 
                    precisa resultou em um programa personalizado e
                     o acompanhamento regular foi fundamental para 
                     alcançar meus objetivos. Recomendo sem hesitação"
                />
                <CustomerGymCard
                    name="Rafael Costa"
                    src="/img/Customer_3.jpg"
                    alt="Foto mulher fazendo pose com um equipamento de academia na mão"
                    about="A academia proporcionou uma experiência 
                excepcional! A avaliação inicial precisa resultou 
                em um programa personalizado que atendeu perfeitamente
                 às minhas necessidades. O acompanhamento regular e 
                 atencioso da equipe."
                />
            </CustomerGymDivContainer>
        </CustomerGymContainer>
    )
}

