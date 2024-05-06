import { CoachesCard } from "./CoachesCard"
import { CoachesDiv, TrainerContainer, TrainerDivText, TrainerH1, TrainerP } from "./styles/Trainer.styles"

export const Trainer = () => {
    return (
        <TrainerContainer>
            <TrainerDivText>
                <TrainerH1> <TrainerP>Os Treinadores</TrainerP>mais experientes</TrainerH1>
            </TrainerDivText>
            <CoachesDiv>
                <CoachesCard src="/img/Trainer-1.jpg" title="Treinador Senior" subTitle="Diego Fortaleza"/>
                <CoachesCard src="/img/Trainer-2.jpg" title="Treinadora Senior" subTitle="Camila Fitness"/>
                <CoachesCard src="/img/Trainer-3.jpg" title="Treinador Senior" subTitle="Bruno Máximo"/>
                <CoachesCard src="/img/Trainer-4.jpg" title="Treinador Senior" subTitle="Ricardo Condor"/>
            </CoachesDiv>
        </TrainerContainer>
    )
}