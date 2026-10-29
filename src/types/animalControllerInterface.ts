import type {AnimalDataProps} from '../types/animalDataInterface'

export interface AnimalControllerProps {
  animalData: AnimalDataProps[]
  setAnimalData: (data: AnimalDataProps[]) => void
  addAnimalData: (props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void}) => void
}