"use client"

import { useEffect } from "react";
import { CardTraining } from "./CardTraining";
import { BgPrimary, ContainerGlobal } from "./styles/Global.styles";
import {
    TrainingDivContainer,
    TrainingDivContainerImg,
    TrainingDivTitle,
    TrainingSpan,
    Trainingh1,
} from "./styles/TrainingDesigned.styles";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

export const TrainingDesigned = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <BgPrimary>
            <ContainerGlobal>
                <TrainingDivContainer data-aos="fade-up">
                    <TrainingDivTitle>
                        <TrainingSpan>Aulas</TrainingSpan>
                        <Trainingh1>Projetadas para você</Trainingh1>
                    </TrainingDivTitle>
                    <TrainingDivContainerImg>
                        <CardTraining
                            href="/img/Treino_Personal_Trainner.jpg"
                            alt="Pessoa fazendo exercício"
                            name="Personal Training"
                            data-aos="zoom-in"
                        />
                        <CardTraining
                            href="/img/Treino_CordaNaval.jpg"
                            alt="Mulher fazendo exercício corda naval"
                            name="Sessão com corda naval"
                            data-aos="zoom-in"
                        />
                        <CardTraining
                            href="/img/Treino_Esteira.jpg"
                            alt="Mulher fazendo exercício de corrida na esteira"
                            name="Sessão de Corrida"
                            data-aos="zoom-in"
                        />
                        <CardTraining
                            href="/img/Treino_Forca.jpg"
                            alt="Mulher fazendo exercício de levantamento de peso"
                            name="Sessão de Força"
                            data-aos="zoom-in"
                        />
                    </TrainingDivContainerImg>
                </TrainingDivContainer>
            </ContainerGlobal>
        </BgPrimary>
    );
};
