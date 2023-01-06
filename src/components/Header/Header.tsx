import { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import GlobalStyle from "../../styles/global";
import { S } from './index'
// import blackIcon from '../../media/img/blackIcon.svg' 
// import whiteIcon from '../../media/img/whiteIcon.svg' 

interface Props {
    toggleTheme(): void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
    // const { title } = useContext(ThemeContext)
    // const icon = title === 'dark' ? whiteIcon : blackIcon
    return (
        <S.Container>
            <GlobalStyle />
            <S.Wrapper>
                <S.ImgWrapper>
                    aaaa
                    {/* <S.Logo src={icon} alt="logo" /> */}
                </S.ImgWrapper>
                <S.Title>
                    kjasdhkjasdkas
                </S.Title>
            </S.Wrapper>
            <S.SwitchWrapper>
                aaaa
                {/* <ThemeButton
                    onChange={toggleTheme}
                /> */}
            </S.SwitchWrapper>
        </S.Container>
    );
}

export default Header