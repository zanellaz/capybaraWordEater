import { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import GlobalStyle from "../../styles/global";
import { S } from './index'

interface Props {
    toggleTheme(): void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext)
    return (
        <S.Container>
            <GlobalStyle />
            <S.Wrapper>
                <S.ImgWrapper>
                    aaaaaa  
                    {/* <S.Logo src={logo} alt="logo" /> */}
                </S.ImgWrapper>
                <S.Title>
                    Memory Monsters
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