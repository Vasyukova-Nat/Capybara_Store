// import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter.jsx";
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
