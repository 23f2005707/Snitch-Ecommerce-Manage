import { useDispatch } from "react-redux";
import { setError, setUser, setLoading } from "../state/auth.slice.js"


export const useAuth = () => {

    const dispatch = useDispatch()

    async function handleRegister({ fullname, email, contact, password, isSeller = false }) {

        const data = await register({ fullname, email, contact, password, isSeller })

        dispatch(setUser(data.user))
    }

    return { handleRegister }
} 