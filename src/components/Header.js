import React from 'react'
import styled, { css } from 'styled-components';

const Header = ({ title, subTitle, mode, handleModeChange }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <ButtonContainer>
                <DefaultButton onClick={handleModeChange}>{mode ? 'Light' : 'Dark'}</DefaultButton>
            </ButtonContainer>
        </HeaderContainer>
    );
};

export default Header;

// Style Header Component
const HeaderContainer = styled.div`
    display: block;
    text-align: center;
    margin: 20px 0;
    width: 100%;
    height: auto;
`;

const Title = styled.h1`
    color: #13171a;
    font-weight: 700;
    margin-bottom: 6px;

    ${props => props.theme.mode && css`
        color: #ffffff;
    `}
`;

const SubTitle = styled.p`
    color: ${props => props.theme.color};
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 0;

    ${props => props.theme.mode && css`
        color: #f4f5f6;
    `}
`;

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 8px;
`;

const DefaultButton = styled.button`
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    padding: 6px 22px;
    border-radius: 28px;
    border: 1px solid #38a1f2;
    box-sizing: border-box;
    background-color: #38a1f2;
`;

