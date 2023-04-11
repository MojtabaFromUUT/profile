import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
function App() {
    return (
        <>
            <nav>
                <ul>
                    <Link to={"/"}>Home</Link>
                    <br />
                    <Link to={"/books"}>BookList</Link>
                </ul>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/:id" element={<Book />} />
                </Routes>
            </nav>
        </>
    );
}

export default App;
