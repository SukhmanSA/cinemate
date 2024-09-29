// https://github.com/ShubhamSarda/cinemate 
// https://cinemate-ul.netlify.app 
import "./App.css"
import { AllRoutes } from "./routes/AllRoutes.jsx"
import { Header,Footer } from "./components/index.jsx"
  
function App() {
    return(
        <div className="dark:bg-slate-800">
        <Header/>
        <AllRoutes/>
        <Footer/>
        </div>
    )
}

export default App
