import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban } from "./pages";
import { Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

function App() {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar></Sidebar>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar></Sidebar>
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className='fixed md:static ng-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar></Navbar>
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce />}></Route>
              <Route path='/ecomerce' element={<Ecommerce />}></Route>

              {/* Pages */}
              <Route path='/orders' element={<Orders />}></Route>
              <Route path='/employees' element={<Employees />}></Route>
              <Route path='/customers' element={<Customers />}></Route>

              {/* App */}
              <Route path='/kanban' element={<Kanban />}></Route>
              <Route path='/editor' element={<Editor />}></Route>
              <Route path='/calendar' element={<Calendar />}></Route>
              <Route path='/color-picker' element={<ColorPicker />}></Route>

              {/* Charts */}
              <Route path='/line' element={<Line />}></Route>
              <Route path='/area' element={<Area />}></Route>
              <Route path='/bar' element={<Bar />}></Route>
              <Route path='/pie' element={<pie />}></Route>
              <Route path='/financial' element={<Financial />}></Route>
              <Route path='/color-mapping' element={<ColorMapping />}></Route>
              <Route path='/pyramid' element={<Pyramid />}></Route>
              <Route path='/stacked' element={<Stacked />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
