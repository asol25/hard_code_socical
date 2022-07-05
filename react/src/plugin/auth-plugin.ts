import createAuth0Client from '@auth0/auth0-spa-js';
import { setAccessToken } from './accessToken';
import { fetch_services_server } from './fetch-services-server';
export const AuthState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    auth0: null,
};

const config = {
    domain: "dev-kyhdhfgu.us.auth0.com",
    client_id: "2vZXkD1suluJHCm5tzOODEGB4cDCIO21"
};

export const useAuth0 = (state: any) => {
    const handleStateChange = async () => {
        try {
            console.log("HandleStateChange")
            state.isAuthenticated = !!(await state.auth0.isAuthenticated());
            state.user = await state.auth0.getUser();
            state.loading = false;
            // setTokenToSever({
            //     method: "POST",
            //     url: "http://localhost:4040/api/authentication/login",
            //     data: JSON.stringify(state.user)
            // });
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    const handleToken = async () => {
        await setAccessToken(state);
        await fetch_services_server({
            method: "POST",
            url: "http://localhost:4040/api/authentication/login",
            data: JSON.stringify(state.user)
        });
        return localStorage.setItem("sessionName",JSON.stringify(state.user));
    }

    const initAuth = () => {
        console.log("initAuth")
        state.loading = true;
        createAuth0Client({
            domain: config.domain,
            client_id: config.client_id,
            cacheLocation: 'localstorage',
            redirect_uri: window.location.origin
        }).then(async auth => {
            state.auth0 = auth;
            await handleStateChange();
        }).catch(error => {
            console.log("initAuth: ", error.message);
        });
    }

    const login = async () => {
        try {
            console.log("login")
            await state.auth0.loginWithPopup();
            await handleStateChange();
            await handleToken();
            return await state;
        } catch (error) {
            console.log("login: ", error);
        }
    };

    const logout = async () => {
        try {
            console.log("logout")
            state.auth0.logout({
                returnTo: window.location.origin,
            });
        } catch (error) {
            console.log("logout: ", error);
        }
    }

    return {
        login,
        logout,
        initAuth,
        state
    }
}
