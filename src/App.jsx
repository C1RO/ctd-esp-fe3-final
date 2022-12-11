
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRouter from "./Routes/AppRouter"
function App() {

  return (
    <div className="App">
      <Navbar />

      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
