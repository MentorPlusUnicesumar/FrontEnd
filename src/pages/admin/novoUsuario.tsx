import { Box, Button, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { MenuUsuario } from "../../components/menu";
import { FaMapPin } from "react-icons/fa";

export function NovoUsuario() {
  return (
    <Flex w={"full"} h={"full"} flexDir={"column"}>
      <MenuUsuario />

      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        py={"30px"}
      >
        <Img
          w={"170px"}
          h={"170px"}
          borderRadius={"full"}
          src="https://avatars.githubusercontent.com/u/114078455?v=4"
        />
        <Box>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            Pedro Mazzurana
          </Text>
          <Box display={"flex"} flexDir={"row"} alignItems={"center"} gap={2}>
            <Icon as={FaMapPin} />
            <Text>Mandaguari - PR</Text>
          </Box>
        </Box>
      </Box>

      <Flex justifyContent={"space-between"} my={"30px"} px={"150px"}>
        <Box>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Contatos:
          </Text>
          <Text fontSize={"md"}>(44) 998696460</Text>
          <Text fontSize={"md"}>pedroMazzurana@gmail.com</Text>
        </Box>
        <Box>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Formações:
          </Text>
          <Text fontSize={"md"}>Engenharia de Software - Unicesumar</Text>
          <Text fontSize={"md"}>Mestrado em Inteligência Artifical - USP</Text>
        </Box>
        <Box>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Contatos:
          </Text>
          <Text fontSize={"md"}>(44) 998696460</Text>
          <Text fontSize={"md"}>pedroMazzurana@gmail.com</Text>
        </Box>
      </Flex>

      <Box px={"150px"}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Sobre mim:
        </Text>
        <Text>
          Programador especializado em Inteligência Artificial, com uma paixão
          por transformar dados em soluções inteligentes. Com uma vasta
          experiência em criar e treinar modelos de IA, tenho trabalhado em todo
          o ciclo de desenvolvimento, desde a concepção de algoritmos até a
          implementação de sistemas robustos. Meu dia a dia envolve a criação de
          soluções que combinam a força da IA com uma arquitetura bem planejada,
          usando estruturas de dados otimizadas e uma base sólida de programação
          orientada a objetos.
        </Text>
      </Box>
      <Box px={"150px"} mt={"30px"}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Por quê desejo me cadastrar na plataforma?
        </Text>
        <Text>
          Me cadastrar na plataforma de mentoria como mentor é uma oportunidade
          de retribuir à comunidade tudo o que a área de TI me proporcionou. Ao
          longo da minha jornada, tive a sorte de aprender com grandes
          profissionais e sei o quanto isso foi crucial para o meu crescimento.
          Agora, quero usar minha experiência para ajudar outros a trilhar o
          mesmo caminho.
        </Text>

        <Flex
          gap={5}
          my={"70px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            bg={"#860000"}
            w={"150px"}
            h={"35px"}
            borderRadius={"7px"}
            _hover={{ bg: "#860000" }}
          >
            <Text color={"white"} fontWeight={"bold"}>
              Reprovar
            </Text>
          </Button>
          <Button
            bg={"#005C19"}
            w={"150px"}
            h={"35px"}
            borderRadius={"7px"}
            _hover={{ bg: "#005C19" }}
          >
            <Text color={"white"} fontWeight={"bold"}>
              Aprovar
            </Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}