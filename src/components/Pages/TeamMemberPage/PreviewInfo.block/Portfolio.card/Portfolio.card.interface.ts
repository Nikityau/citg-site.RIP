import {IMemberCard} from "../../../TeamPage/Member.card/Member.card";

export type Social = {
    img: string,
    link: string
}

export interface IPortfolioCard extends IMemberCard {
    pdf_portfolio_link: string
    social_media: Social[]
}