import React from "react";
import Card from "@/components/pages/Card/Card";
import * as CardContainerStyles from "@/styles/components/Card/CardContainer.styles";
import image1 from "@/assets/images/Gotchas/001-sanrio-characters.jpeg";
import image2 from "@/assets/images/Gotchas/002-shinchan-machibouke.jpeg";
import image3 from "@/assets/images/Gotchas/003-shinchan-camping.jpeg";
import image5 from "@/assets/images/Gotchas/005-shinchan-oyasumika.jpeg";
import image6 from "@/assets/images/Gotchas/006-shinchan-sanrio.jpeg";



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
                <Card imgSrc={image2} title="짱구 마치보우케" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image3} title="짱구 캠핑" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image5} title="짱구 오야스미가" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>
                <Card imgSrc={image6} title="짱구 산리오" icon="Hello" price="9,000" desc="안녕하세요. 제 이름은 히스입니다. 지금 켓토다제 프로젝트 진행중입니다. "/>


            </CardContainerStyles.InnerCardContainer>
        </CardContainerStyles.OuterCardContainer>
    );
}

export default CardContainer;