import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import "@mantine/carousel/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Components/Pages/FindJobs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Pages/LandingPage/Footer";
import FindTalents from "./Components/Pages/FindTalents";
import TalentProfilePage from "./Components/Pages/FindTalentsPage/TalentProfilePage/TalentProfilePage";
import PostJobPage from "./Components/Pages/PostJobPage";

// rich text editor
import '@mantine/tiptap/styles.css';
import JobDescPage from "./Components/Pages/JobDescription/JobDescPage";

function App() {
  const theme = createTheme({
    colors: {
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
    },
    fontFamily: "Poppins, sans-serif",
    focusRing: "never", 
    primaryColor: 'brightSun', 
    primaryShade: 4
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Header />
        <Divider size={"xs"} />
        <Routes>
          <Route path="/find-talent" element={<FindTalents />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/post-job" element={<PostJobPage />}/>
          <Route path="/jobs" element={<JobDescPage />}/>
          <Route path="/talent-profile" element={<TalentProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
