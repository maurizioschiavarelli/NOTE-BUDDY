import './Docs.css'

import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

export default function Docs(){
    return (
        <>
        <Navbar></Navbar>
        
            <div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            
        <Footer></Footer>
        </>
    
)
}