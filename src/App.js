/* Plugins. */
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* Components. */
import PrivateRoutes from './Components/PrivateRoutes';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

/* Styles. */
import './App.css';

function App() {
  return (
    <HashRouter>
      <ToastContainer stacked /> {/* Plugin used to let the users know the response for their action via toast. */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;