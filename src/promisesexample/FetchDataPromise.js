import React, { useEffect, useState } from "react";

const FetchDataComponent= ()=>{
    const[data, setData] = useState(null);
    const [error,setError] = useState (null);
    
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            if(!response.ok){
                throw new Error("Network response is not ok");
            }
            return response.json();
    })

    .then((data) => setData(data))
    .catch((error) => setError(error.meassage));

},[])


    if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }
    
      return (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      );
    };
    
    export default FetchDataComponent;

