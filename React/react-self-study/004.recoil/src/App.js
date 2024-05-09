import './App.css';
import {RecoilRoot} from "recoil";
import ParentComponent from "./components/parent.component";

function App() {
  return (
      <RecoilRoot>
        <div className="App">
            <ParentComponent/>
        </div>
      </RecoilRoot>
  );
}

export default App;
