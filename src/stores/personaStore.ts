import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Persona } from '@/types/Persona'
import {
  createPersonaService,
  deletePersonaService,
  getPersonaService,
  getPersonasService
} from '@/services/persona.service'

export const usePersonaStore = defineStore('persona', () => {
  const personas = ref<Persona[]>([])
  const persona = ref<Persona | null>(null)

  const getPersonas = async () => {
    personas.value = await getPersonasService()
  }

  const getPersona = async (id: number) => {
    persona.value = await getPersonaService(id)
  }

  const createPersona = async (persona: Persona) => {
    await createPersonaService(persona)
    await getPersonas()
  }

  const updatePersona = async (id: number, persona: Persona) => {
    await createPersonaService(persona)
    await getPersonas()
  }

  const deletePersona = async (id: number) => {
    await deletePersonaService(id)
    await getPersonas()
  }

  return {
    personas,
    persona,
    getPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
  }
})