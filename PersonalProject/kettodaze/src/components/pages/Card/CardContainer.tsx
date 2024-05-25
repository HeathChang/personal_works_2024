import React from "react";
import Card from "@/components/pages/Card/Card";
import * as CardContainerStyles from "@/styles/components/Card/CardContainer.styles";

// Define the prop types
interface CardContainerProps {
    title: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ title = "Default" }) => {
    return (
        <CardContainerStyles.OuterCardContainer className="OuterCardContainer">
            <CardContainerStyles.HeaderText>{title}</CardContainerStyles.HeaderText>
            <CardContainerStyles.InnerCardContainer className="InnerContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainerStyles.InnerCardContainer>
        </CardContainerStyles.OuterCardContainer>
    );
}

export default CardContainer;