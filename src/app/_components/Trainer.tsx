"use client"

import { useEffect } from "react";
import { CoachesCard } from "./CoachesCard"
import { CoachesDiv, TrainerContainer, TrainerDivText, TrainerH1, TrainerP } from "./styles/Trainer.styles"
import AOS from 'aos'; 
import 'aos/dist/aos.css';

export const Trainer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);
    
    return (
        <TrainerContainer data-aos="fade-up">
            <TrainerDivText>
                <TrainerH1> <TrainerP>Os Treinadores</TrainerP>mais experientes</TrainerH1>
            </TrainerDivText>
            <CoachesDiv>
                <CoachesCard src="/img/Trainer_4.jpg" title="Treinador Senior" subTitle="Diego Fortaleza"/>
                <CoachesCard src="/img/Trainer_1.jpg" title="Treinadora Senior" subTitle="Camila Fitness"/>
                <CoachesCard src="/img/Trainer_3.jpg" title="Treinador Senior" subTitle="Bruno Máximo"/>
                <CoachesCard src="/img/Trainer_2.jpg" title="Treinador Senior" subTitle="Ricardo Condor"/>
            </CoachesDiv>
        </TrainerContainer>
    )
}