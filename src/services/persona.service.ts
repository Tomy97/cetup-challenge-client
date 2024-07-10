import type { Persona } from '@/types/Persona'
import axios from 'axios'

export const getPersonasService = async (): Promise<Persona[]> => {
  const { data } = await axios.get<Persona[]>(`${import.meta.env.VITE_API_URL}/Persona`)
  return data
}

export const getPersonaService = async (id: number): Promise<Persona> => {
  const { data } = await axios.get<Persona>(`${import.meta.env.VITE_API_URL}/Persona/${id}`)
  return data
}

export const createPersonaService = async (persona: Persona): Promise<Persona> => {
  const { data } = await axios.post<Persona>(`${import.meta.env.VITE_API_URL}/Persona`, persona)
  return data
}

export const updatePersonaService = async (id: number, persona: Persona): Promise<Persona> => {
  const { data } = await axios.put<Persona>(`${import.meta.env.VITE_API_URL}/Persona/${id}`, persona)
  return data
}

export const deletePersonaService = async (id: number): Promise<void> => {
  await axios.delete<void>(`${import.meta.env.VITE_API_URL}/Persona/${id}`)
}