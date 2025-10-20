import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./web/scenes/global/Topbar";
import Sidebar from "./web/scenes/global/Sidebar";
import Dashboard from "./web/scenes/dashboard";
import Team from "./web/scenes/users";
import Invoices from "./web/scenes/invoices";
import Contacts from "./web/scenes/contacts";
import Bar from "./web/scenes/bar";
import Form from "./web/scenes/form";
import Line from "./web/scenes/line";
import Pie from "./web/scenes/pie";
import FAQ from "./web/scenes/faq";
import Geography from "./web/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./web/scenes/calendar";
import { ErrorMessage } from "formik";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} 
                
              />
              <Route path="/users" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;