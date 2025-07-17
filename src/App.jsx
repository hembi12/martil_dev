import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Layout para páginas normales
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Layout para páginas sin Header y Footer
const NoLayout = ({ children }) => <>{children}</>;

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <NoLayout>
              <NotFound />
            </NoLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;