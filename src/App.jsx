import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';

import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import SeeMoreMission from './Pages/SeeMoreMission';
import SeeMoreHistory from './Pages/SeeMoreHistory'

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/AboutUs'} element={<AboutUs/>}/>
        <Route path={'/Contact-us'} element={<ContactUs/>}/>
        <Route path={'/History'} element={<SeeMoreHistory/>}/>
        <Route path={'/Mission'} element={<SeeMoreMission/>}/>
      </Route>
    </Routes>
  );
}

export default App;