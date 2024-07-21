import type { Provincia } from "@/types/Provincia";
import { defineStore } from "pinia";
import { ref } from "vue";
import { createProvinciaService, deleteProvinciaService, editProvinciaService } from '@/services/provincia.service'

export const useProvinciasStore = defineStore('provincias', () => {
  const provincias = ref<Provincia[]>([])

  const getProvincias = async () => {
    const { getProvinciasService } = await import('@/services/provincia.service')
    provincias.value = await getProvinciasService()
  }

  const createProvincia = async (form: { name: string }) => {
    await createProvinciaService(form)
    await getProvincias()
  }

  const deleteProvincia = async (id: number) => {
    await deleteProvinciaService(id)
    await getProvincias()
  }

  const editProvincia = async (id: number, form: { nombre: string }) => {
    await editProvinciaService(id, form)
    await getProvincias()
  }

  return {
    provincias,
    getProvincias,
    createProvincia,
    deleteProvincia,
    editProvincia
  }
});