import axios from 'axios'
import type { Provincia } from '@/types/Provincia'

export const getProvinciasService = async (): Promise<Provincia[]> => {
  const { data } = await axios.get<Provincia[]>(`${import.meta.env.VITE_API_URL}/Provincia`)
  return data
}

export const getProvinciaService = async (id: number): Promise<Provincia> => {
  const { data } = await axios.get<Provincia>(`${import.meta.env.VITE_API_URL}/Provincia/${id}`)
  return data
}

export const createProvinciaService = async (provincia: Provincia): Promise<Provincia> => {
  const { data } = await axios.post<Provincia>(`${import.meta.env.VITE_API_URL}/Provincia`, provincia)
  return data
}

export const updateProvinciaService = async (id: number, provincia: Provincia): Promise<Provincia> => {
  const { data } = await axios.put<Provincia>(`${import.meta.env.VITE_API_URL}/Provincia/${id}`, provincia)
  return data
}

export const deleteProvinciaService = async (id: number): Promise<void> => {
  await axios.delete<void>(`${import.meta.env.VITE_API_URL}/Provincia/${id}`)
}