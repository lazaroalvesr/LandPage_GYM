import { CardPlanProps } from "@/lib/interface"
import { PlanCard, PlanCardButton, PlanCardButtonIcon, PlanCardContainer, PlanCardH1, PlanCardIcon, PlanCardItemImg, PlanCardItemLi, PlanCardItemsUl, PlanCardLink, PlanCardPrice, PlanCardPriceSecondy } from "./styles/Plan.styles"

export const CardPlan = ({ scale, backGroundColor, items, Title, Price}: CardPlanProps) => {
    return (
        <PlanCard scale={scale}>
            <PlanCardContainer>
                <PlanCardIcon src="/img/Icons/Icon_Medal.png" />
                <PlanCardH1>{Title}</PlanCardH1>
                <PlanCardPrice>R$ {Price} <PlanCardPriceSecondy>/mês</PlanCardPriceSecondy></PlanCardPrice>
                <PlanCardItemsUl>
                    {items?.map((item, index) => (
                        <PlanCardItemLi key={index}>
                            <PlanCardItemImg src="/img/Icons/Icon_Check.png" />
                            {item}
                        </PlanCardItemLi>
                    ))}
                </PlanCardItemsUl>
            </PlanCardContainer>
            <PlanCardLink href="/">
                <PlanCardButton backGroundColor={backGroundColor}>Junte-se Agora <PlanCardButtonIcon src="/img/Icons/Icon_ArrowTop_White.png" /></PlanCardButton>
            </PlanCardLink>
        </PlanCard>
    )
}
