import { FC } from "react";
import { S } from './index'
import Word from "../../Word.class";

interface Props {
    word: Word
}

const WordElement: FC<Props> = ({ word }) => {
    const text = word.getText()
    return (
        <S.Wrapper>
            {Array.from(text).map((letter, i) => {
                return <S.Letter key={letter + i.toString()}>{letter}</S.Letter>
            })}
        </S.Wrapper>
    )        
}

export default WordElement