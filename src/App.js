import Button from "./components/Button";
import { GoBell, GoDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell/>
          Click</Button>
      </div>
      <div>
        <Button danger>
        <GoDownload/> Buy</Button>
      </div>
      <div>
        <Button warning outline>
        <GoDownload/> Bye</Button>
      </div>
      <div>
        <Button secondary rounded>
        <GoDatabase/> 
          Tempo</Button>
      </div>
      <div>
        <Button primary>
        <GoDatabase/> 
          Primary</Button>
      </div>
      <div>
        <Button></Button>
      </div>
      
    </div>
  );
}

export default App;
