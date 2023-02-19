import { ContactDetails } from "./components/ContactDetails";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { WorkHistory } from "./components/WorkHistory";

function App() {
  return (
    <Layout>
      <Header />
      <Sidebar>
        <ContactDetails />
        <Skills />
      </Sidebar>
      <MainContent>
        <WorkHistory />
        <Education />
      </MainContent>
    </Layout>
  );
}

export default App;
