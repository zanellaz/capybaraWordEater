
import { FC, Dispatch, SetStateAction } from "react";
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

interface Props {
    value: string
    setWordsLength: Dispatch<SetStateAction<number>>
}

const AmountInput: FC<Props> = ({ value, setWordsLength }) => {
  return <InputMask mask="99" 
            onChange={
              ({ target: { value } }) => setWordsLength(parseInt(value))
            }
          >
            <MaterialInput type="text" disableUnderline />
          </InputMask>
}

export default AmountInput