import { CoachCardProps } from "@/lib/interface"
import { TrainerCoachDiv, TrainerCoachImg, TrainerCoachDivCardParagraph, TrainerCoachDivCardTitle, TrainerDivIcons, TrainerDivImgIcon } from "./styles/Trainer.styles"

export const CoachesCard = ({src, title, subTitle}: CoachCardProps) => {
    return (
        <TrainerCoachDiv>
            <TrainerCoachImg src={src} alt="Foto de um Personal Trainer" />
            <TrainerCoachDivCardParagraph>{title}</TrainerCoachDivCardParagraph>
            <TrainerCoachDivCardTitle>{subTitle}</TrainerCoachDivCardTitle>
            <TrainerDivIcons>
                <TrainerDivImgIcon src="/img/Icons/Icon_Whatsapp.png" alt="Icone do Whatsapp"/>
                <TrainerDivImgIcon src="/img/Icons/Icon_Facebook.png" alt="Icone do Facebook"/>
                <TrainerDivImgIcon src="/img/Icons/Icon_Instagram.png"alt="Icone do Instagram" />
                <TrainerDivImgIcon src="/img/Icons/Icon_Linkedin.png" alt="Icone do Linkedin"/>
            </TrainerDivIcons>
        </TrainerCoachDiv>
    )
}