import './App.css';
import {Header} from './components/header/header';
import {Movies_list} from './components/movie_list/movies_list';
import {GlobalStyles} from './components/themes/globalStyles';
import {lightTheme, darkTheme} from './components/themes/Themes';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import {Card} from './components/actions/action';
import {ThemeProvider} from 'styled-components';
import {useState} from 'react';

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <div className="App">
                    <div className={`contentWrap`}>
                        <button onClick={themeToggler} className={'change_theme'}> Switch Theme</button>

                        <Header/>

                        <Switch>
                            <Route path={'/home'} component={Movies_list}/>
                            <Route path={'/about'} component={Card}/>
                            <Movies_list/>
                        </Switch>
                    </div>
                </div>
                <GlobalStyles/>
            </ThemeProvider>
        </BrowserRouter>


    );
}

export default App;
