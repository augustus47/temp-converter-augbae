
import "./tempInput.css";


interface Props {
  temperatureScale: String;
  temperatureValue: string;
  onValueChange : (e:string) => void
  invalidInput: boolean
}

export function TemperatureInput(props: Props) {
  return (
    <div className="tempInput">
      <h2>
        Temperature in {props.temperatureScale} </h2>
        <input
          type="text"
          value = {props.temperatureValue}
          onChange={(e) => {
              
              props.onValueChange(e.target.value)
            }}
       style={props.invalidInput ? {backgroundColor:'#EA384D'} : {backgroundColor:'white'}} />
     
    </div>
  );
}





