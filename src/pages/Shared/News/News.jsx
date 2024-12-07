import { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";


const News = () => {
    const {id}= useParams()

    return (
        <div>
             <Header> </Header>
             <Navbar> </Navbar>
             <div className="grid md:grid-cols-4 "> 
               
                

                <div className="col-span-3">

                    <h2 className="text-5xl">
                        News Detail 
                    </h2>
                    <p> {id} </p>

                    
                    

                    
                </div>

                
                 </div>
                 
        </div>
    );
};

export default News;