import { createContext, useContext, useEffect, useState } from "react";
import { authenticateUser, registerUser, validateUser } from "../../services/auth";
import { getExpiry } from "../jwtUtil";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [isAuthPending, setIsAuthPending] = useState(true)

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        if (accessToken) {
            validateUser(accessToken).then(({ status, hasAccess, message, user }) => {
                if (status && hasAccess && user) {
                    setUserAccessToken(accessToken)
                    setCurrentUser(user);
                    setRefresh(accessToken);
                } else {
                    if (!hasAccess) logout();
                }
                setIsAuthPending(false);
            });
        } else {
            setIsAuthPending(false);
        }
    }, [])

    async function login(username, password) {
        try {
            const { status, token, message, user } = await authenticateUser(username, password);
            if (status) {
                setUserAccessToken(token);
                setCurrentUser(user);
                localStorage.setItem('accessToken', JSON.stringify(token))
                setRefresh(token);
                return { status }
            } else {
                return { status, message }
            }
        } catch (err) {
            console.log(err);
            return { status: false, message: 'something went wrong!' }
        }

    }

    async function register(creds) {
        try {
            const { status, message } = await registerUser(creds, userAccessToken);
            if (status) {
                return { status }
            } else {
                return { status, message }
            }
        } catch (err) {
            console.log(err);
            return { status: false, message: 'something went wrong!' }
        }

    }

    function getUserRole() {
        return currentUser?.access || 'NO_ACCESS';
    }

    function logout() {
        setUserAccessToken(null);
        localStorage.removeItem('accessToken');
    }

    function setRefresh(accessToken) {
        const alertLogout = () => {
            alert('Your session has expired!')
            logout();
        }
        setTimeout(alertLogout, getExpiry(accessToken));
    }

    const value = {
        currentUser,
        userAccessToken,
        isLoggedIn: Boolean(userAccessToken),
        login,
        logout,
        register,
        getUserRole,
    }

    return <AuthContext.Provider value={value}>
        {!isAuthPending && children}
    </AuthContext.Provider>
}

export default AuthProvider