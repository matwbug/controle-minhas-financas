import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Globalstyles from './components/Globalstyles';
import Header from './components/Header';
import { TransactionContextProvider } from './Contexts/TransactionContext';

import Home from './pages/home';

export default function AppRoutes(){
    return(
        <Router>
            <TransactionContextProvider>
                <Globalstyles />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </TransactionContextProvider>
        </Router>
    )
}