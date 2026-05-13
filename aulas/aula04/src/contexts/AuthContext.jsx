import { createContext, useState } from "react";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    // Chamar a API passando dados com usuário e senha
    setUsuario({
      id: 0,
      nome: "Lucas",
      email: "lucas@iesb.edu.br",
    });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value = estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
