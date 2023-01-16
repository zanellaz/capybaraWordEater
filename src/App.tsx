import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useState } from 'react';
import Header from './components/Header/Header';
import Words from './components/Words/Words';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global';
import Word from './Word.class';
import AmountInput from './components/AmountInput/AmountInput';
import Button from '@mui/material/Button';

function App() {
  const [wordsLength, setWordsLength] = useState(10)
  const [firstAttempt, setAttempt] = useState(true)
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const [words, setWords] = useState(Array<Word>)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)
  const changeWords = () => {
    firstAttempt && setAttempt(false)
    setWords(Array.from({ length: wordsLength }, (_, i) => {
      const word = new Word()
      word.setId(i)
      return word
    }))
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Button onClick={toggleTheme}> tema </Button>
      <Button onClick={changeWords}>{firstAttempt ? 'start' : 'restart'}</Button>
      <AmountInput 
        value={wordsLength.toString()}
        setWordsLength={setWordsLength}
        />
      <Words words={words} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
