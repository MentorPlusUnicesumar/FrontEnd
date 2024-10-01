import { useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { BuscarMentores } from "../pages/mentor/buscarMentores";
import { Home } from "../pages/home";
import { Login } from "../pages/login/login";
import { RedefinirSenha } from "../pages/login/redefinirSenha";
import { RedefinirSenhaEmail } from "../pages/login/redefinirSenhaEmail";
import { AlteraPerfil } from "../pages/alteraPerfil";
import PrivateRoute from "../context/privateRoutes";
import { PerfilMentor } from "../pages/mentor/perfilMentor";

import { TelaMentoria } from "../pages/teleMentoria";
import { GerenciamentoUsuarios } from "../pages/admin/gerenciamentoUsuarios";
import { NovoUsuario } from "../pages/admin/novoUsuario";

export function AppRoutes() {
  const navigate = useNavigate();

  const { isSignedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/minhas-mentorias"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/buscar-mentores"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <BuscarMentores />
          </PrivateRoute>
        }
      />
      <Route
        path="/perfil"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <AlteraPerfil />
          </PrivateRoute>
        }
      />
      <Route
        path="/mentoria"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <TelaMentoria />
          </PrivateRoute>
        }
      />
      <Route
        path="/perfil-mentor"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <PerfilMentor />
          </PrivateRoute>
        }
      />
      {/* <Route
        path="/gerenciamento-usuarios"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <GerenciamentoUsuarios />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/novo-usuario"
        element={
          <PrivateRoute isSignedIn={isSignedIn}>
            <NovoUsuario />
          </PrivateRoute>
        }
      /> */}

      {!isSignedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/Altera-perfil" element={<AlteraPerfil />} />
          <Route path="/Redefinir-senha" element={<RedefinirSenha />} />
          <Route
            path="/Redefinir-senha-email"
            element={<RedefinirSenhaEmail />}
          />
          <Route
            path="/gerenciamento-usuarios"
            element={<GerenciamentoUsuarios />}
          />
          <Route path="/novo-usuario" element={<NovoUsuario />} />
          <Route path="/Perfil-mentor" element={<PerfilMentor />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}
