
import ClipLoader from "react-spinners/ClipLoader";
import React, { useEffect, useState } from "react";
const Loder=()=>{
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#00000");
    // const override: CSSProperties = {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",
    //   };
return(<>
 <ClipLoader
        color={color}
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</>)
}
export default Loder;