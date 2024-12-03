import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

function App() {

  return (
    <>
     <Navbar/>
     <div className="cards">
       <Card title="Box 1" Desc="Pakitan: this is bigest muslim country which is in middle East"/>
       <Card title="Box 2" Desc="Second box this is use for shoes"/>
       <Card title="Box 3" Desc="Third box this is use for clothes"/>
       <Card title="Box 4" Desc="Last box this is use for Guns"/>
     </div>
    <Footer/>
    </>
  )
}

export default App
