import { ThemeProvider, DefaultTheme } from 'styled-components';
import Header from './components/Header/Header';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme}/>
      <button onClick={toggleTheme}> texto </button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
