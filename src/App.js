import Title from "./components/Title";
import Page from "./components/Page";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-black">
      <Page element={<Title />} boxColor="bg-stone-200" />
      <Page element={<Projects />} boxColor="bg-vupdate" />
    </div>
  );
}

export default App;
