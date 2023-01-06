import { FC } from "react";
import { S } from './index'

interface Props {
    text: string
}

const WordElement: FC<Props> = ({ text }) => {
    return (
        <S.Wrapper>
            {Array.from(text).map((letter, i) => {
                return <S.Letter key={letter + i.toString()}>{letter}</S.Letter>
            })}
        </S.Wrapper>
    )        
}

export default WordElement