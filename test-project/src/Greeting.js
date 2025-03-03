import React from "react";

// prop is nothing but a parameter to the function and it can  be named as anything 
const Greeting = (karun) => {
    return (
        <div>
            {karun.message}
        </div>
    )
}

export default Greeting;