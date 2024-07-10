import type { Provincia } from '@/types/Provincia'

export type  Persona = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  provinciaId?: number;
  provincia?: Provincia;
}