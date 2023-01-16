import { FC } from "react";
import { S } from "./index";
import WordElement from "../WordElement/WordElement";
import Word from "../../Word.class";

interface Props {
    words: Word[]
}

const Words: FC<Props> = ({ words }) => {
    return (
        <S.Wrapper>
            {words.map(word => {
                return <WordElement key={`${word.getText}${word.id}`} word={word} />
            })}
        </S.Wrapper>
    );
}

export default Words