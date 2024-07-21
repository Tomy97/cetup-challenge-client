import type { Provincia } from "@/types/Provincia";
import axios from "axios";

export const getProvinciasService = async () => {
  const { data } = await axios.get<Provincia[]>(
    `${import.meta.env.VITE_API_URL}/Provincia`
  );
  return data;
};

export const createProvinciaService = async (form: { name: string }) => {
  await axios.post(`${import.meta.env.VITE_API_URL}/Provincia`, form);
}

export const deleteProvinciaService = async (id: number) => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/Provincia/${id}`);
}

export const editProvinciaService = async (id: number, form: { nombre: string }) => {
  await axios.put(`${import.meta.env.VITE_API_URL}/Provincia/${id}`, form);
}