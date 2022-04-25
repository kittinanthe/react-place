import "./App.css";


import Cardlist from "./component/Cardlist";
import Filter from "./component/Filter";
import Header from "./component/Header";

function App() {
  // const [selected,setSelectedText]= useState(null);
  // let postpl = null;
  // if(!!selected){
  //   postpl = <Cardlist></Cardlist>

  // }
  return (
    <div>
      <Header></Header>
      <Filter></Filter>
      <div className="app-search">
      </div>
      <Cardlist></Cardlist>
    </div>
  );
}

export default App;
