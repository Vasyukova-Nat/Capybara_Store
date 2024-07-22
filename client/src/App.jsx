// import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter.jsx";

function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
