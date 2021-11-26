import './App.css';
import Landing from './Landing';
import Search from './Pages/Search';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"



function App() {
  return (
    <div>
<Header />

{/* <Landing/> */}
<Search/>
<Footer />

    </div>
  );
}

export default App;
