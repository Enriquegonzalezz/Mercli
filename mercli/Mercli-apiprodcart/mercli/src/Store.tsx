import Header from "./componentes/Header"
import Content from "./componentes/content"
import Footer from "./componentes/footer"
import "./Store.css"
function Store(){
    return (
        <>
        <main>
            <header><Header /></header>
            <main><Content /></main>
            <footer><Footer /></footer>
        </main>
        </>
    )
}

export default Store