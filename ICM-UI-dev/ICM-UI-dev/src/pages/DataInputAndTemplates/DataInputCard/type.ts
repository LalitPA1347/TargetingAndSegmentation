import { DataCardsType } from "src/pages/DataInputAndTemplates/types";

export interface DataInputCardTypes {
    cardData: DataCardsType,
    index: number,
    handleCardClick: (clickedCardData: DataCardsType) => void
}