import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Volunteering from './Pages/Volunteering';
import Contact from './Pages/Contact';

function RoutesTree() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/volunteering' element={<Volunteering/>} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </div>
    );
}

export default RoutesTree;