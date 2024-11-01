import './Docs.css'

import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

export default function Docs(){
    return (
        <>
        <Navbar navigation></Navbar>
        
            <div className='flex flex-wrap gap-6 m-auto my-72 justify-center'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            
        <Footer></Footer>
        </>
    
)
}