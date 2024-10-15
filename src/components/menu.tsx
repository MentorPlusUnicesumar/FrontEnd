import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import userIcon from "../imgs/userIcon.png";
import { UseMentorias } from "../context/useMentorias";
import { useQuery } from "react-query";

export function MenuUsuario() {
  const { data } = useQuery({
    queryKey: ["mentorias"],
    queryFn: async () => getMentorias(user!._id),
  });

  const links = [
    {
      name: "Minhas mentorias",
      qnt: data?.length,
      link: "/minhas-mentorias",
    },
    {
      name: "Buscar mentores",
      qnt: null,
      link: "/buscar-mentores",
    },
    {
      name: "Notificações",
      qnt: 5,
      link: "/notificacoes",
    },
    {
      name: "Chat",
      qnt: 1,
      link: "/chat",
    },
  ];

  const { getMentorias } = UseMentorias();

  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [linkSelecionado, setLinkSelecionado] = useState("minhas-mentorias");
  const nomeUsuario = user?.name.split(" ")[0];

  useEffect(() => {
    setLinkSelecionado(location.pathname);
  }, []);

  function menuSelect(action: "logout" | "perfil") {
    if (action === "logout") {
      signOut();
    } else if (action === "perfil") {
      navigate("/perfil");
    }
  }

  return (
    <Flex
      px={"150px"}
      py={"10px"}
      alignItems={"center"}
      w={"full"}
      h={"70px"}
      bg={"linear-gradient(to right, #000024 60%, #000030 100%)"}
      justifyContent={"space-between"}
    >
      <Text
        color={"white"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        onClick={() => navigate("/minhas-mentorias")}
      >
        Mentor +
      </Text>

      <Flex justifyContent={"center"} alignItems={"center"} gap={6}>
        {links.map((link) => {
          return (
            <Flex flexDir={"row"} gap={2}>
              <Link onClick={() => navigate(`${link.link}`)}>
                <Text
                  textDecorationLine={
                    link.link === linkSelecionado ? "underline" : "none"
                  }
                  color={"white"}
                  fontWeight={"light"}
                >
                  {link.name}
                </Text>
              </Link>

              {link.qnt ? (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"25px"}
                  h="20px"
                  bg={"white"}
                  borderRadius={"5px"}
                >
                  <Text color={"#1D428A"}>{link.qnt}</Text>
                </Box>
              ) : null}
            </Flex>
          );
        })}
      </Flex>

      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDir={"column"}
      >
        <Img
          src={user?.fotos ?? userIcon}
          w={"40px"}
          h={"40px"}
          borderRadius={"20px"}
        />
        <Menu>
          <MenuButton
            as={Button}
            variant="link"
            rightIcon={<ChevronDownIcon />}
            style={{
              textDecoration: "none",
              padding: 0,
              color: "white",
              fontWeight: "300",
            }}
            _focus={{ boxShadow: "none" }}
          >
            {nomeUsuario || "Renan"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => menuSelect("perfil")}>Meu perfil</MenuItem>
            <MenuItem onClick={() => menuSelect("logout")}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
