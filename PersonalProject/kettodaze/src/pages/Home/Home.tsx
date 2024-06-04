import React from "react";
import * as HomeStyles from "@/styles/pages/HomeStyles";
import CardContainer from "@/components/pages/Card/CardContainer";

const Home = () => {
    // CONST
    const headerTitle = "신상품 갓챠"
    const bodyTitle = "인기 갓챠 "

    return (
        <HomeStyles.HomeMain className="home-container">
            <HomeStyles.HomeBody>
                <CardContainer title={headerTitle}></CardContainer>
            </HomeStyles.HomeBody>

            <HomeStyles.HomeBody>
                <CardContainer title={bodyTitle}></CardContainer>
            </HomeStyles.HomeBody>


        </HomeStyles.HomeMain>
    )
}

export default Home;