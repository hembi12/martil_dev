import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

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

// Layout para páginas solo con Footer
const FooterOnlyLayout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

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
          path="/sobre-nosotros"
          element={
            <FooterOnlyLayout>
              <AboutUs />
            </FooterOnlyLayout>
          }
        />
        <Route
          path="/contacto"
          element={
            <FooterOnlyLayout>
              <Contact />
            </FooterOnlyLayout>
          }
        />
        <Route
          path="/terminos-y-condiciones"
          element={
            <FooterOnlyLayout>
              <TermsAndConditions />
            </FooterOnlyLayout>
          }
        />
        <Route
          path="/politica-de-privacidad"
          element={
            <FooterOnlyLayout>
              <PrivacyPolicy />
            </FooterOnlyLayout>
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
