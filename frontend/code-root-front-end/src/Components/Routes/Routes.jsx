import { Route, Routes } from "react-router"
import { LoginPage } from "../LoginPage/LoginPage"
import { UserPage } from "../userPage/userPage"

export const RouterPage = () => {
    return (
        <Routes>
        <Route path="/customer" element={<UserPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    )
}