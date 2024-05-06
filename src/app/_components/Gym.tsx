import { BgPrimary, ContainerGlobal } from "./styles/Global.styles"
import {  GymContainer, GymDivImg, GymImg, GymInfos, GymItensInfo, GymListItem, GymListItemImg, GymListItemP, GymListItemTitle, GymListText, GymSpan, Gymh1 } from "./styles/Gym.styles"

export const Gym = () => {
    return (
        <BgPrimary>
            <ContainerGlobal>
                <GymContainer>
                    <Gymh1>Por que Escolher <GymSpan>Nossa Academia</GymSpan></Gymh1>
                    <GymInfos>
                        <GymItensInfo>
                            <GymListItem>
                                <GymListItemImg src="/img/Icons/Icon_Treino.png" alt="Icone de Boneco levantando peso" />
                                <GymListText>
                                    <GymListItemTitle>Professores experientes e devidamente certificados</GymListItemTitle>
                                    <GymListItemP>Instrutores certificados para treinar e ensinar técnicas de exercícios
                                        adequadas, assegurando que os clientes realizem movimentos com segurança para minimizar o risco de lesões.
                                    </GymListItemP>
                                </GymListText>
                            </GymListItem>
                            <GymListItem>
                                <GymListItemImg src="/img/Icons/Icon_ListTec.png" alt="Icone de lista" />
                                <GymListText>
                                    <GymListItemTitle>Programas de condicionamento físico personalizados</GymListItemTitle>
                                    <GymListItemP>
                                        Com atenção meticulosa às suas necessidades exclusivas, criamos programas de fitness
                                        personalizados para resultados duradouros.
                                    </GymListItemP>
                                </GymListText>
                            </GymListItem>
                            <GymListItem>
                                <GymListItemImg src="/img/Icons/Icon_Tec.png" alt="Icone de tecnologia" />
                                <GymListText>
                                    <GymListItemTitle>Implementação de tecnologia avançada</GymListItemTitle>
                                    <GymListItemP>
                                        Aprimorando sua experiência de condicionamento físico, nossa academia incorpora
                                        tecnologia avançada de maneira integrada para otimizar o treinamento e monitorar o progresso de forma eficiente.
                                    </GymListItemP>
                                </GymListText>
                            </GymListItem>
                            <GymListItem>
                                <GymListItemImg src="/img/Icons/Icon_Like.png" alt="Icone de Like" />
                                <GymListText>
                                    <GymListItemTitle>Recomendações positivas e relatos motivadores</GymListItemTitle>
                                    <GymListItemP>
                                        Nossa academia recebeu uma grande quantidade de avaliações
                                        e depoimentos positivos, demonstrando nosso compromisso com a excelência e a satisfação do cliente.
                                    </GymListItemP>
                                </GymListText>
                            </GymListItem>
                        </GymItensInfo>
                        <GymDivImg>
                            <GymImg src="/img/Academia.jpg" alt="Foto da academia" />
                        </GymDivImg>
                    </GymInfos>
                </GymContainer>
            </ContainerGlobal>
        </BgPrimary>
    )
}