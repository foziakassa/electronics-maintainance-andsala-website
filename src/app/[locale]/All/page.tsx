import About from "../About/page";
import Contact from "../Contact/page";
import Product from "../Product/page";
import Service from "../Service/page";

export default function All(){
    return(
        <div className="">
            <About/>
            <Product/>
            <Service/>
            <Contact/>
        </div>
    )
}