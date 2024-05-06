import { FooterListProps } from "@/lib/interface"
import { FooterLi, FooterListTItle, FooterUl } from "./styles/Footer.styles"

export const FooterList = ({ title, items }: FooterListProps) => {
    return (
        <FooterUl>
            <FooterListTItle>{title}</FooterListTItle>
            {items.map((item, index) => (
                <FooterLi key={index}>{item}</FooterLi>
            ))}
        </FooterUl>
    )
}