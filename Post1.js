import React from "react";

const Post1=()=>
{
    const [input="",handleChange,handleSubmit,additem]=React.useState([]);
    React.useEffect(()=>{
       input:target.value ;
        handleChange(input);
        handleSubmit(input);
        additem(input);
        input="";

    },[])

    return(
        <div>
            <input type="text" class="form-control" class="btn btn-outline-primary" style={{width:"750px",height:"100px"}} onChange={handleChange} value={input}></input>
            <div class="row">
                <div class="col-xl-6"></div>
            <button class="btn btn-outline-primary" style={{width:"200px",height:"50px",float:"right"}} onClick={handleSubmit} >POST</button>
            </div></div>
        );
    
}

export default Post1;
