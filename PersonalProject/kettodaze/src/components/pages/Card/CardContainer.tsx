import React from "react";
import Card from "@/components/pages/Card/Card";
import * as CardContainerStyles from "@/styles/components/Card/CardContainer.styles";
import image1 from "@/assets/images/Gotchas/001-sanrio-characters.jpeg";



// Define the prop types
interface CardContainerProps {
    title: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ title = "Default" }) => {
    return (
        <CardContainerStyles.OuterCardContainer className="OuterCardContainer">
            <CardContainerStyles.HeaderText>{title}</CardContainerStyles.HeaderText>
            <CardContainerStyles.InnerCardContainer className="InnerContainer">
                <Card imgSrc={image1} title="산리오 친구들" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다.  지금 켓토다제 프로젝트 진행중입니다. 안녕하세요. 제 이름은 히스입니다.  지금 켓토다제 프로젝트 진행중입니다. 안녕하세요. 제 이름은 히스입니다.  지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image1} title="산리오 친구들" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image1} title="산리오 친구들" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image1} title="산리오 친구들" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image1} title="산리오 친구들" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>


            </CardContainerStyles.InnerCardContainer>
        </CardContainerStyles.OuterCardContainer>
    );
}

export default CardContainer;