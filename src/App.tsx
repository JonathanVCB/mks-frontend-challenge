import MainHeader from "./components/Header";
import HomePage from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProducutsProvider from "./contexts/ProductContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ProducutsProvider>
        <MainHeader />
        <HomePage />
      </ProducutsProvider>
    </>
  );
}

export default App;
