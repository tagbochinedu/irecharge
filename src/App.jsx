import Header from "./Components/Header";
import Home from "./Pages/Home";
import HotelForm from './Pages/HotelForm'
import HotelDetails from './Pages/HotelDetails'
import HotelEdit from "./Pages/HotelEdit";
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-hotel" element={<HotelForm />} />
        <Route exact path="/hotel/:id" element={<HotelDetails />} />
        <Route exact path="/hotel/:id/edit" element={<HotelEdit />} />
      </Routes>
    </main>
  );
}

export default App;
