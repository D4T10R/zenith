import { Route, Routes, BrowserRouter } from "react-router-dom"
import Teste from "./src/pages/teste"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Teste/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
