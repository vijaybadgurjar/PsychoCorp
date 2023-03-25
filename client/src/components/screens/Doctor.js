import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import {DefaultPlayer as Video} from "react-html5video"
import "react-html5video/dist/styles.css"

const Doctor = () => {
   
    const { state, dispatch } = useContext(UserContext)
    




return (
   <div>
     <div style={{ height:"400px", 
backgroundColor:"rgba(131, 217, 231, 0.1)",

    margin: "0px auto" 
    }}
>

        <div style={{  //for upper div(dp and name)
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0px",
         maxWidth:"55"
        }}>

            {/* dp part */}
            <div>
                <img style={{ width: "200px", height: "200px", borderRadius: "200px", marginLeft:"20p",textAlign:"center" }}
                    src={state?state.pic:"loading.."}
                />

                {/* name part */}
            </div>
            <div style={{marginRight:"400px" }} >
                <h4>Dr {state ? state.name : "loading"}</h4>
                <h4>Psychiatric social workers.</h4>
                <h5>{state ? state.email : "loading"}</h5>
                <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                
                       <h6>{state?state.followers.length:"0"} followers</h6>
                     
                </div>
            </div>
        </div>

         <div className="file-field input-field" style={{margin:"50px 200px"}}>
            <div className="btn #64b5f6 blue darken-1">
                <span>Update pic</span>
                <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>  

        
       
    </div>
    <div style={{ height:"200px", 
backgroundColor:" rgb(252, 191, 226)",
margin:"auto 100px"
   
    }}>
    <div style={{ 
        
    marginLeft:"80px" ,
    maxWidth:"800px",

    }}>
  
    <h5 style={{margin:"20px auto"}}>Bio</h5>
    
     <h6>{state ? state.body : "loading"}</h6>
    </div>
    </div>
   </div>
)
}

export default Doctor;