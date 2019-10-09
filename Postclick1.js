import React from "react";
import Postlist from "./Postlist";

const Postclick1=()=>
{
    const[]=React.useState([]);
    return(
        <div>
            <ul >
                {
                    props.lst.map((i)=>{
                        return(<Postlist key={i.id} i1={i}  handleDelete={props.handleDelete} additem={additem}/>
                        );
                    })
                                        
            }
           </ul>     
        </div>
    );
}
export default Postclick1;