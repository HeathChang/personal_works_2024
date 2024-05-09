import styled, {css} from "styled-components";

const StylingAnyComponent = () => {
    // This could be react-router-dom's Link for example
    const Link = ({className, children}) => (
        <a className={className}>
            {children}
        </a>
    );

    const StyledLink = styled(Link)`
        color: #BF4F74;
        font-weight: bold;
    `;

    return (<div>
        <Link>Unstyled, boring Link</Link>
        <br/>
        <StyledLink>Styled, exciting Link</StyledLink>
    </div>);
};


export default StylingAnyComponent;