import api from "../api";
import { UserInterface } from "./useMentor";
import { MentoriaInterface } from "./useMentorias";

export type filter = {
    nome?: string,
    typeUser?: string
}

export type filterMentoria = {
    nomeMentor?: string,
    nomeAluno?: string
}

export function UseAdmin() {

    async function getUsuarios({ nome, typeUser }: filter = {}) {
        const { data } = await api.get<UserInterface[]>('users', {
            params: {
                nome,
                typeUser
            }
        })

        return data;
    }

    async function getUsuariosById(id: string) {
        const { data } = await api.get<UserInterface>(`users/id/${id}`)

        return data
    }

    async function statusUsuaruio(id: string, status: string) {
        const { data } = await api.patch(`users/update-status/${id}`, { status })

        return data;
    }

    async function getMentorias({nomeAluno, nomeMentor}: filterMentoria) {
        console.log('nomeAluno', nomeAluno)
        console.log('nomeMentor', nomeMentor)

        const { data } = await api.get<MentoriaInterface[]>('mentorias', {
            params: {
                nomeAluno, 
                nomeMentor
            }
        })

        return data;
    }


    return { getUsuarios, getUsuariosById, statusUsuaruio, getMentorias }
}