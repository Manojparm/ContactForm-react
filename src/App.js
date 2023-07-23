import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/Contact/ContactHeader';
import ContactForm from './contactForm/ContactForm';
function App() {
  return (
    <div className="App">
   <Navigation/>
   <main className="main_container">
   <ContactHeader/>
   <ContactForm/>
   </main>
    </div>
  );
}

export default App;
