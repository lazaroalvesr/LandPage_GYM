import { CardTraining } from "./CardTraining"
import { BgPrimary, ContainerGlobal } from "./styles/Global.styles"
import {  TrainingDivContainer, TrainingDivContainerImg, TrainingDivImg, TrainingDivTitle, TrainingImg, TrainingImgName, TrainingSpan, Trainingh1 } from "./styles/TrainingDesigned.styles"

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
                        <CardTraining href="/img/Training-1.jpg" alt="Pessoa fazendo exerício" name="Personal Training" />
                        <CardTraining href="/img/Training-2.jpg" alt="Mulher fazendo exercicio corda naval" name="Sessão  com corda naval " />
                        <CardTraining href="/img/Training-3.jpg" alt="Mulher fazendo exercicio de corrida na esteira" name="Sessão  de Corrida" />
                        <CardTraining href="/img/Training-4.jpg" alt="Mulher fazendo exercicio de levantamento de peso" name="Sessão  de Força" />
                    </TrainingDivContainerImg>
                </TrainingDivContainer>
            </ContainerGlobal>
        </BgPrimary>
    )
}