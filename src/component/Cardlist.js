import Card from "./Card";
import "./Card.css"
import data from "./example_data.json";

const Cardlist = () =>{
    
    return(
        
        <li className="grid">
            {data.map((element)=>{
                return <Card{...element}></Card>
            })}
        </li>
    )
}

export default Cardlist;