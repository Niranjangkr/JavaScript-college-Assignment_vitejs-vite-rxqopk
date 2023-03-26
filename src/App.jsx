import CarUpdate from './Components/CarUpdate';
import ColoredCar from './Components/ColoredCar';
import Container from './Components/Container';
import FetchData from './Components/FetchData';
import Suv from './Components/Suv';

function App() {
  return (
    <div className="App">
      <FetchData />
      {/* <Container /> */}
      {/* <CarUpdate /> */}
      {/* <ColoredCar brand = "Maruti Suzuki" model = "Alto 800" color = "red"/> */}
      {/* <Suv brand="Maruti Suzuki" model="Alto 800" color="green" /> */}
    </div>
  );
}

export default App;
