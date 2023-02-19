import { ContactDetails } from "./components/ContactDetails";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { WorkHistory } from "./components/WorkHistory";
import { Controls } from "./components/Controls";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Controls />
      <Page>
        <Header />
        <Sidebar>
          <ContactDetails />
          <Skills />
        </Sidebar>
        <MainContent>
          <WorkHistory />
          <Education />
        </MainContent>
      </Page>
    </ThemeProvider>
  );
}

export default App;
