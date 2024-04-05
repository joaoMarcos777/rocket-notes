import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUserData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Unable to sign in");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setUserData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const { password, ...userData } = user;

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(userData));

      setUserData({ user, token: userData.token });
      alert("Updated profile!");
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Unable to update profile.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUserData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: userData.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
