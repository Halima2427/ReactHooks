import React from 'react';
import Post1 from "./Post";
import Postclick1 from "./Postclick";

const App=()=>
{
    const [list,additem] = React.useState([]);
    React.useEffect(()=>{
        const list=data;
        additem(list);
    },[])

    return(
        <div>
    <Post1 additem={additem}/>
    <Postclick1  lst={list}/>
    {/* <Postlist additem={this.additem}/> */}
    
    </div>
    );
}
export default App1;