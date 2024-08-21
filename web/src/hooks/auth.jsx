import { createContext, useContext, useEffect, useState } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            // localStorage.setItem("@rocketnotes:token", JSON.stringify(token)); // Esse código antigo tava bugando o JWT!
            localStorage.setItem("@rocketnotes:token", token); // alteração TESTE -> Essa alteração fez o código funcionar!! Antes o JWT estava com aspas antes e depois do codigo ""

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token })
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel entrar.")
            }

        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");
        
        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
    

        if (avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);

            const response = await api.patch("/users/avatar", fileUploadForm);
            user.avatar = response.data.avatar;
        }

        try {
            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            console.log("tentando mudar o usuario: " + user + "\n user com {}: " + {user} )
            console.log("token: " + { token: data.token })

            setData({ user, token: data.token });
            alert("perfil atualizado!");
        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                
            }
            else {
                alert("Não foi possivel atualizar o perfil.")
            }
        }
    }
        


        useEffect(() => {
            const token = localStorage.getItem("@rocketnotes:token");
            const user = localStorage.getItem("@rocketnotes:user");

            if (token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
                setData({
                    token,
                    user: JSON.parse(user)
                })
            }


        }, [])

        return (
            <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile, }}>

                {children}
            </AuthContext.Provider>
        )
    }



function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };