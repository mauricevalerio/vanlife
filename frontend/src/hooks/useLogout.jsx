import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function useLogout() {
    const { dispatch } = useContext(AuthContext)

    function logout() {
        localStorage.removeItem("user")

        dispatch({type: "LOGOUT"})
        //dispatch vans also
    }

    return  { logout }
}