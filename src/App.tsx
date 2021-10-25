import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Routers from "./routers";

function App() {
  return (
    <div className="App_section">
      <div><Header /></div>
      <div><Routers /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}

export default App;
