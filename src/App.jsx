import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { UserProvider } from './hooks/UserProvider';
import Routes from './routes/MyRoutes';

function App() {
  return (
          <UserProvider>
              <Routes/>
          </UserProvider>
  );
}

export default App
