import { Trainer } from "./Trainer"
import {  CoachAbout, CoachButton, CoachContainer, CoachDiv, CoachDivImg, CoachDivImgs, CoachDivVideo, CoachH1, CoachP } from "./styles/Coach.styles"
import { BgSecondary, ContainerGlobal } from "./styles/Global.styles"

export const Coach = () => {
    return (
        <BgSecondary>
            <ContainerGlobal>
                <CoachContainer>
                    <CoachDiv>
                        <CoachH1>Você está procurando <CoachP>um treinador?</CoachP></CoachH1>
                        <CoachAbout>Nossos treinadores de ginástica experientes
                            trazem uma riqueza de conhecimento, habilidade e
                            visão para a GiArena Fitness, tornando-os ativos
                            inestimáveis para os indivíduos em busca de um
                            treinamento abrangente e eficaz.
                            Esses profissionais experientes desenvolveram
                            suas habilidades ao longo de anos de prática,
                            capacitando-os a atender às diversas necessidades
                            e objetivos de nossos clientes com expertise e
                            dedicação.</CoachAbout>
                        <CoachButton>Explore mais</CoachButton>
                    </CoachDiv>
                    <CoachDivImgs>
                        <CoachDivImg src="/img/Personal_Training_Mentory.jpg" alt="Persoanl mostrando informações no seu tablet para sua aluna." />
                    </CoachDivImgs>
                </CoachContainer>
                <Trainer />
            </ContainerGlobal>
        </BgSecondary>
    )
}
