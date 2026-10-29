import type { ClassDataProps } from '../types/classDataInterface'

export default function ClassData(props: ClassDataProps) {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col mx-auto">
                    <h1>Class Data</h1>
                    <p>Present: {props.present}</p>
                    <p className={`badge bg-${props.morale === "Average" ? "secondary" : props.morale === "Good" ? "success" : "primary"}`}>
                        Morale: {props.morale}
                    </p>
                </div>
            </div>
        </div>
    
    </>
  )
}   