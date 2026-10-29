import type { ClassControllerProps } from '../types/classControllerInterface'

export default function ClassController(props: ClassControllerProps) {
    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    <button className="btn btn-primary mb-2" onClick={props.increasePresent}>Increase Present</button>
                    <button className="btn btn-primary mb-2" onClick={props.decreasePresent}>Decrease Present</button>
                    <button className="btn btn-primary mb-0" onClick={props.changeMorale}>Change Morale</button>
                </div>
            </div>

        </>
    )
}   