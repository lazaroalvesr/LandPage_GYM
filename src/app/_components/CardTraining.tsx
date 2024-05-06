import { CardTrainingProps } from "@/lib/interface"
import { TrainingDiv, TrainingDivIconArrowTop, TrainingDivImg, TrainingIconArrowTop, TrainingImg, TrainingImgName } from "./styles/TrainingDesigned.styles"

export const CardTraining = ({ href, alt, name }: CardTrainingProps) => {
    return (
        <>
            <TrainingDivImg>
                <TrainingImg src={href} alt={alt} />
                <TrainingDiv>
                    <TrainingImgName>{name}</TrainingImgName>
                    <TrainingDivIconArrowTop>
                        <TrainingIconArrowTop src="/img/Icons/Icon_Arrow_Top.png" />
                    </TrainingDivIconArrowTop>
                </TrainingDiv>
            </TrainingDivImg>
        </>
    )
}