export interface IconeProps {
    width: number
    height: number
}

export interface LinkRedirectProps {
    href: string
    src: string
    alt: string
}

export interface CardProps {
    border?: string;
}

export interface CardTrainingProps {
    href: string
    alt: string
    name: string
}

export interface CoachCardProps {
    src: string
    title: string
    subTitle: string
}

export interface CardPlanProps {
    scale?: string
    backGroundColor?: string
    items?: string[]
    Title?: string
    Price?: string
}

export interface CustomerGymProps {
    name: string
    src: string
    alt: string
    about: string
}

export interface FooterListProps{
    title: string
    items: string[]
}

export interface HeaderUlProps{
    ativo?: boolean
}