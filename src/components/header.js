import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header className="text-center mt-5">
                <Link to="/">Home </Link>
                <Link to="/users">Users </Link>
                <Link to="/diseases">Diseases </Link>
                <Link to="/records">Records </Link>
                <Link to="/doctors">Doctors </Link>
        </header>
    );
}
export {Header};