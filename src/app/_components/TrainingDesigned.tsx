import { CardTraining } from "./CardTraining"
import { BgPrimary, ContainerGlobal } from "./styles/Global.styles"
import {  TrainingDivContainer, TrainingDivContainerImg, TrainingDivTitle,TrainingSpan, Trainingh1 } from "./styles/TrainingDesigned.styles"

export const TrainingDesigned = () => {
    return (
        <BgPrimary>
            <ContainerGlobal>
                <TrainingDivContainer>
                    <TrainingDivTitle>
                        <TrainingSpan>Aulas</TrainingSpan>
                        <Trainingh1>Projetadas para você</Trainingh1>
                    </TrainingDivTitle>
                    <TrainingDivContainerImg>
                        <CardTraining href="/img/Treino_Personal_Trainner.jpg" alt="Pessoa fazendo exerício" name="Personal Training" />
                        <CardTraining href="/img/Treino_CordaNaval.jpg" alt="Mulher fazendo exercicio corda naval" name="Sessão  com corda naval " />
                        <CardTraining href="/img/Treino_Esteira.jpg" alt="Mulher fazendo exercicio de corrida na esteira" name="Sessão  de Corrida" />
                        <CardTraining href="/img/Treino_Forca.jpg" alt="Mulher fazendo exercicio de levantamento de peso" name="Sessão  de Força" />
                    </TrainingDivContainerImg>
                </TrainingDivContainer>
            </ContainerGlobal>
        </BgPrimary>
    )
}