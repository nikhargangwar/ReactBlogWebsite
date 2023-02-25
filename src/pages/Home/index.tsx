
import Navbar from '../../components/Navbar' // Import
import Footer from '../../components/Footer' // Import
import MainBody from '../../components/MainBody' // Import
import './Home.css'
function Home(){
    return (
        <div className='App'>
    
          <Navbar />
        <div className='Main'>
          <MainBody />
        </div>
          <Footer />
   
      </div>
    )
}


export default Home;