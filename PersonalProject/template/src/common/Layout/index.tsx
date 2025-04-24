import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Body, Header, HeaderFont, Wrapper } from "./Layout.styled";
import { ReactNode } from "react";
import CustomSpinner from "../../components/Spinner/custom-spinner";
import Icon from "../../components/Icon/custom-icon";


interface iLayout {
    children: ReactNode;
}

const Layout = ({ children }: iLayout) => {
    const navigate = useNavigate();
    const ui = useSelector((state: RootState) => state.ui);

    const handleBack = () => {

    }

    return (
        <Wrapper>
            {ui?.isLoading && <CustomSpinner/>}
            {
                ui?.isHeaderVisible && (
                    <Header>
                        <Icon icon="IconBack" onClick={handleBack}/>
                        <HeaderFont>{ui?.header}</HeaderFont>
                    </Header>
                )
            }

            <Body>
                {children}
            </Body>
        </Wrapper>
    )


};


export default Layout;