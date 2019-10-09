import React from "react";
import Cmdlist1 from "./Cmdlist";
const Postlist1=()=>
{
    const [count=0,input="",cmdlist,handleCount]=React.useState([]);
    React.useEffect({
        count=(count)+1
        

    },[])
    return(<div>
        <li key={this.props.i1} className="list-group-item">
        <span>{this.props.i1}</span><br></br>
        <span>{this.state.count}likes</span><br></br>
        <button class="btn btn-outline-primary" onClick={this.handleCount}>Like</button>
        <button class="btn btn-outline-primary"onClick={this.handleComment}>Comment</button>
        <button class="btn btn-outline-primary" onClick={this.handleDelete}>Delete</button><br></br>
        <input type="text" onChange={this.handleChange}></input>
        <button class="btn btn-primary btn-warning" onClick={this.handleSubmit}>post</button>
        </li>
        <Cmdlist1 cmdlist={this.state.cmdlist} />

       
        </div>);
}

export default Postlist1;