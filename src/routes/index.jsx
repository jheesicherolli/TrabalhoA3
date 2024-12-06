import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Home } from "../pages/Home/Home"
import { Projeto } from "../pages/Projeto/Projeto"

//Route - não permite que seja chamada mais de uma rota por vez

    export const AppRouter = () => {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Projeto />} />                
                </Routes>
            </Router>
        )
    }
