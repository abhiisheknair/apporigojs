import { ColorModeContext,useMode } from "./theme";
import{ CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import  Dashboard  from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team/index";
import Calendar from "./scenes/calendar/calendar";
import FAQ from "./scenes/faq";
import ExpenseScreen from "./scenes/expenses/ExpenseScreen";



function App() {
  const [theme,colorMode]= useMode();
  return (
    <ColorModeContext.Provider value ={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <div>
          <ExpenseScreen/>
        </div>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/expenses" element={<ExpenseScreen />} />
          

        </Routes>

        
       
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
