import { CustomerGymProps } from "@/lib/interface"
import { CustomerDiv, CustomerGymAboutDiv, CustomerGymAboutP, CustomerGymDiv, CustomerGymDivName, CustomerGymIconFiveStar, CustomerGymIconQuote, CustomerGymImg, CustomerGymName } from "./styles/CustomerGym.styles"

export const CustomerGymCard = ({ src, alt, name, about }: CustomerGymProps) => {
    return (
        <CustomerGymDiv>
            <CustomerDiv>
                <CustomerGymImg
                    src={src}
                    alt={alt}
                />
                <CustomerGymDivName>
                    <CustomerGymName>{name}</CustomerGymName>
                </CustomerGymDivName>
                <CustomerGymAboutDiv>
                    <CustomerGymIconFiveStar
                        src="/img/Icons/Icon_5_Star.png"
                        alt="Icone Avaliação 5 estrelas"
                    />
                    <CustomerGymIconQuote
                        src="/img/Icons/Icon_Quote.png"
                        alt="Icone Aspas de Citação"
                    />
                    <CustomerGymAboutP>
                        {about}
                    </CustomerGymAboutP>
                </CustomerGymAboutDiv>
            </CustomerDiv>
        </CustomerGymDiv>
    )
}