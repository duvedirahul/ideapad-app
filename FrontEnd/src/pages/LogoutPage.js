import { useEffect } from "react"
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import '../styles/index.css';

export default function LogoutPage() {
    const store = authStore();
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async ()=>{
            await store.logout();
        }
        logout();
        navigate('/login');
        // eslint-disable-next-line
    }, [])
    return (
        <div className="txt-center"><h1>You are logged out now</h1></div>
    )
}
