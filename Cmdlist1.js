import React from "react";
const Cmdlist=()=>
{
    const [input=''] = React.useState([]);

    return(
        <div>
            <ul><h5>Comments here.....</h5>
                {
                    this.props.cmdlist.map((i)=>{
                        return <li key={i.id} className="list-group-item"><span>{i}</span></li>
                        
                    })
                                        
            }
           </ul>     
        </div>
    );
}

export default Cmdlist1;