import { Link } from "react-router-dom";
export const LoginPage = () => {
    return (
        <div>
            <Link to="/customer">Customer</Link>
            <Link to="/vendor">Vendor</Link>
        </div>
    )
}