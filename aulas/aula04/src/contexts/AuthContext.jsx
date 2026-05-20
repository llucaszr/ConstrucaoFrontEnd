import { createContext, useContext, useState } from "react";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(true);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    // Chamar a API passando dados com usuário e senha
    setUsuario({
      nome: "lucas",
      email: "lucas@iesb.edu.br",
    });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({
      id: 0,
      nome: "lucas",
      email: "lucas@iesb.edu.br",
    });
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value = estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}
// função para não repetir tanto a importação do authcontext
function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
