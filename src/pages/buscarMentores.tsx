import { MentorCard } from "../components/card-mentor";
import { Menu } from "../components/menu";

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Text } from "@chakra-ui/react";

export function BuscarMentores() {
  const mentors = [
    {
      mentorName: "Guilherme Men",
      mentorImage: "https://avatars.githubusercontent.com/u/62121362?v=4",
      specialties: ["Administração", "Engenharia de Software", "Análise de dados"],
    },
    {
      mentorName: "Renan Rocha",
      mentorImage: "https://via.placeholder.com/300x200",
      specialties: ["Python", "Business Intelligence", "Arquitetura de Software"],
    },
    {
      mentorName: "Pedro Mazzurana",
      mentorImage: "https://avatars.githubusercontent.com/u/114078455?v=4",
      specialties: ["Empreendedorismo", "Consórcio", "Investimentos"],
    },
  ];

  return (
    <Flex w={'full'} h={'full'} flexDir={'column'}>
      <Menu />

      <Text mt="30px" textAlign="center" fontSize={'3xl'} fontWeight={'bold'} color={'#1D428A'}>
        Encontrar novos mentores
      </Text>

      <Flex px="50px" mt="30px" w={'full'} h={'full'} flexDir={'column'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} color={'#1D428A'}>Sugestões</Text>
        <Box w={"full"} bg={'#1D428A'} h={"2px"} />

        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem border="none">
            <h2>
              <AccordionButton w={"10px"} sx={{ borderBottom: 'none' }} _hover={{ bg: 'none' }}>
                <Box as='span' flex='1' textAlign='left'>
                  Filtrar
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex>
                <Box w={'400px'} mt={"10px"} display={"flex"} flexDirection={"row"}>
                  <Input
                    ml={"10px"}
                    w={"200px"}
                    h={'35px'}
                    borderWidth={'2px'}
                    borderColor={'#ECECEC'}
                    borderRadius={'10px'}
                    placeholder={"Nome do Profissional"}
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.4)" bg={'white'}
                    sx={{
                      '::placeholder': {
                        fontSize: '12px',
                        color: '#B0B0B0',
                      },
                    }}
                  />
                  <Input
                    ml={"10px"}
                    w={"200px"}
                    h={'35px'}
                    borderWidth={'2px'}
                    borderColor={'#ECECEC'}
                    borderRadius={'10px'}
                    placeholder={"Área de interesse"}
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.4)" bg={'white'}
                    sx={{
                      '::placeholder': {
                        fontSize: '12px',
                        color: '#B0B0B0',
                      },
                    }}
                  />
                </Box>

                <Button
                  ml={"10px"}
                  mt={"10px"}
                  h={'35px'}
                  w={'70px'}
                  borderRadius={'50px'}
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.4)"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                  bg={'#1D428A'}
                >
                  <Text color={'white'} fontSize={'sm'} fontWeight={'semi-bold'}>Buscar</Text>
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Criando uma box container para os cards */}
        <Box maxW="1100px" mx="0" mt="20px" overflow="hidden" p="10px">
          <Flex wrap="wrap" justifyContent="flex-start" alignItems="flex-start" gap="20px">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} mentorName={mentor.mentorName} mentorImage={mentor.mentorImage} specialties={mentor.specialties} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
