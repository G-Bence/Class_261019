import { useState } from 'react'
import ClassData from './components/classData'
import ClassController from './components/classController'
import type {AnimalDataProps} from './types/animalDataInterface'
import AnimalData from './components/animalData'
import AnimalController from './components/animalController'


function App() {
  const [present, setPresent] = useState<number>(24)
  const [morale, setMorale] = useState<string>("Average")
  const [animalData, setAnimalData] = useState<AnimalDataProps[]>([
    {id: 1, name: "Blöki", age: 5},
    {id: 2, name: "Macskusz", age: 3},
    {id: 3, name: "Cincinátus", age: 1}
  ])

  return (
    <>
      <div className="container">
        <div className="row bg-dark text-light p-3 rounded">
            <ClassData present={present} morale={morale} />
            <ClassController 
                increasePresent={() => increasePresent({present, setPresent})} 
                decreasePresent={() => decreasePresent({present, setPresent})} 
                changeMorale={() => changeMorale({morale, setMorale})} 
            />
        </div>
      </div>


      <div className="container mt-4">
        <div className="row bg-success text-light p-3 rounded">
            <AnimalData 
                animalData={animalData} 
                increaseAnimalAge={(props) => increaseAnimalAge(props)}
                deleteAnimalData={(props) => deleteAnimalData(props)}
                setAnimalData={setAnimalData}
            />
            <AnimalController 
                animalData={animalData} 
                setAnimalData={setAnimalData} 
                addAnimalData={(props) => addAnimalData(props)}
            />
        </div>
      </div>
    </>
  )
}

function increasePresent(props : {present: number, setPresent: (n: number) => void}) {
  if(props.present < 30) {
    props.setPresent(props.present + 1)
  }
}

function decreasePresent(props : {present: number, setPresent: (n: number) => void}) {
  if(props.present > 0) {
    props.setPresent(props.present - 1)
  }
}

function changeMorale(props : {morale: string, setMorale: (s: string) => void}) {
  if(props.morale === "Average") {
    props.setMorale("Good")
  } else if(props.morale === "Good") {
    props.setMorale("Excellent")
  } else if(props.morale === "Excellent") {
    props.setMorale("Average")
  }
}



function addAnimalData(props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void}) {
  const newAnimal: AnimalDataProps = {
    id: props.animalData.length + 1,
    name: "Luna",
    age: 1
  }
  props.setAnimalData([...props.animalData, newAnimal])
}

function increaseAnimalAge(props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void, id: number}) {
  const updatedAnimalData = props.animalData.map(animal => {
    if (animal.id === props.id) {
      return { ...animal, age: animal.age + 1 }
    }
    return animal
  })
  props.setAnimalData(updatedAnimalData)
}

function deleteAnimalData(props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void, id: number}) {
  const updatedAnimalData = props.animalData.filter(animal => animal.id !== props.id)
  props.setAnimalData(updatedAnimalData)
}

export default App
