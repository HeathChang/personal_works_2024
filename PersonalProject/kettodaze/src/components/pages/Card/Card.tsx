import React from "react";
import * as CardStyles from "@/styles/components/Card/Card.styles";
// import imageSample from "@/assets/images/Gotchas/001-sanrio-characters.jpeg"

interface CardProps {
    title: string;
    imgSrc: string;
    icon: string;
    price: string;
    desc: string;
}

const Card: React.FC<CardProps> = (props) => {
    return (
            <CardStyles.SingleCardContainer>
                <CardStyles.SingleCardImage src={props.imgSrc}/>
                <CardStyles.SingleCardUpper className="title">
                    <div className="single-card-title">
                        {props.title}
                    </div>
                    <div className="like-icon">
                        heart
                    </div>
                </CardStyles.SingleCardUpper>
                <CardStyles.SingleCardBody className="single-card-desc">
                    <div className="upper-desc">
                        <div className="desc">
                            {props.desc}
                        </div>
                    </div>
                    <div className="lower-desc">
                        {/*<div className="icons">{props.icon}</div>*/}
                        <div></div>
                        <div className="price">{props.price} 원</div>
                    </div>
                </CardStyles.SingleCardBody>
            </CardStyles.SingleCardContainer>
    )
}
export default Card;