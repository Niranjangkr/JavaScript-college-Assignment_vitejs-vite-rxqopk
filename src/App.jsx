import ColoredCar from './Components/ColoredCar';
import Suv from './Components/Suv';

function App() {
  return (
    <div className="App">
      <ColoredCar brand = "Maruti Suzuki" model = "Alto 800" color = "red"/>
      {/* <Suv brand="Maruti Suzuki" model="Alto 800" color="green" /> */}
    </div>
  );
}

export default App;
