import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Scrollbar from './components/Scrollbar/Scrollbar';
import Footer from './components/Footer/Footer';
import NotFound  from "./pages/NotFound/NotFound";

const Layout = () => {
    return (
      <>
        <Header/>
        <Scrollbar />
        <div className="main__content">
          <Outlet/>
        </div>
        <Footer/>
      </>
    );
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About/>
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

const App = () => {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;