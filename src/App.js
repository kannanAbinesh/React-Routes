// /* Plugins. */
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// /* Components. */
// import Login from './Components/Login';
// import Register from './Components/Register';
// import Dashboard from './Components/Dashboard';
// import PrivateRoutes from './Components/PrivateRoutes';

// /* Styles. */
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route index path='/login' Component={Login} />
//           <Route path='/register' Component={Register} />
//           <Route Component={PrivateRoutes}>
//             <Route path='/' Component={Dashboard} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


/* Plugins. */
import { HashRouter, Route, Routes } from 'react-router-dom';

/* Components. */
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRoutes from './Components/PrivateRoutes';

/* Styles. */
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;