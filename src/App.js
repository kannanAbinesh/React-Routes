/* Plugins. */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components. */
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRoutes from './Components/PrivateRoutes';

/* Styles. */
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route Component={PrivateRoutes}>
            <Route path='/' Component={Dashboard} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
