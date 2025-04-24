import { Body, Wrapper } from "@/components/layouts/Layout.styled";
import { ReactNode } from "react";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    return (
        <Wrapper>

            <Body>
                {children}
            </Body>
        </Wrapper>
    )
}

export default Layout