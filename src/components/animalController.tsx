import type { AnimalControllerProps } from '../types/animalControllerInterface'

export default function AnimalController(props: AnimalControllerProps) {
    return (
        <>
            <div className="container p-0">
                <div className="row mx-auto">
                    <div className="col-12 mt-3 p-0">
                        <button className="btn btn-primary w-100" onClick={() => props.addAnimalData({ animalData: props.animalData, setAnimalData: props.setAnimalData })}>Add Animal</button>
                    </div>
                </div>
            </div>
        </>
    )
}