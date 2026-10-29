import type {AnimalDataProps} from '../types/animalDataInterface'

export default function AnimalData(props: {animalData: AnimalDataProps[], increaseAnimalAge: (props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void, id: number}) => void, deleteAnimalData: (props: {animalData: AnimalDataProps[], setAnimalData: (data: AnimalDataProps[]) => void, id: number}) => void, setAnimalData: (data: AnimalDataProps[]) => void}) {
    //I forgot to put these into a separate interface...
    return (
        <>
            <div className="container">
                <div className="row">
                    <ul className="list-group p-0 w-100 mx-auto">
                        {props.animalData.map(animal => (
                            <li key={animal.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {animal.name} - Age: {animal.age}
                                <div className="btn-group" role="group" aria-label="Animal Actions">
                                    <button className="btn btn-primary" onClick={() => props.increaseAnimalAge({animalData: props.animalData, setAnimalData: props.setAnimalData, id: animal.id})}>Increase Age</button>
                                    <button className="btn btn-danger" onClick={() => props.deleteAnimalData({animalData: props.animalData, setAnimalData: props.setAnimalData, id: animal.id})}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}