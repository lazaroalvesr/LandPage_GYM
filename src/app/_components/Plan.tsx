"use client"

import { useEffect } from "react"
import { CardPlan } from "./CardPlan"
import { CustomerGym } from "./CustomerGym"
import { BgSecondary } from "./styles/Global.styles"
import { PlanCardPlans, PlanContainer, PlanH1, PlanSpan, PlansCardContainer } from "./styles/Plan.styles"
import AOS from 'aos'; 
import 'aos/dist/aos.css';

export const Plan = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <BgSecondary>
            <PlanContainer data-aos="fade-up">
                <PlanH1>Melhor plano <PlanSpan>para você</PlanSpan></PlanH1>
                <PlansCardContainer>
                    <PlanCardPlans>
                        <CardPlan
                            Title="Plano Básico"
                            Price="20"
                            items={
                                [
                                    "Treino personalizado",
                                    "Equipamento Premium",
                                    "Consulta de Nutrição",
                                    "Aula de Fitness em Grupo"
                                ]
                            }

                        />
                        <CardPlan
                            Title="Plano Premium"
                            Price="50"
                            scale="1.3"
                            backGroundColor="var(--cor-secondary)"
                            items={
                                [
                                    "Avaliação personalizada de aptidão física",
                                    "Equipamento Premium",
                                    "Consulta de Nutrição",
                                    "Aula de Fitness em Grupo",
                                    "Atendimento de concierge disponível 24/7"
                                ]}
                        />
                        <CardPlan
                            Title="Plano Padrão"
                            Price="30"
                            items={
                                [
                                    "Treino personalizado",
                                    "Equipamento Premium",
                                    "Consulta de Nutrição",
                                    "Aula de Fitness em Grupo"
                                ]
                            }
                        />
                    </PlanCardPlans>
                </PlansCardContainer>
                <CustomerGym />
            </PlanContainer>
        </BgSecondary>
    )
}