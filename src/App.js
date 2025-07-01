import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header , Footer } from './component';


function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
