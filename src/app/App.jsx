import style from './App.module.css';
import Router from "../router/Router";
import { BrowserRouter } from 'react-router-dom';

const { mainDiv } = style;

function App() {
  return (
    <div className={mainDiv}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
