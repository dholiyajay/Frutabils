import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRoutes />} />
        <Route exact path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </>
  );
}

export default App;
