// import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastro from "./pages/telaCadastro";
import TelaLogin from "./pages/telaLogin";



function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <main className="h-screen">
        <Routes>
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/login" element={<TelaLogin />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;