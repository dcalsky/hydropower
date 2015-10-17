import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Console = React.createClass({
    render(){
        return(
            <div className="console">
                <header>
                    <Navbar />
                </header>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
});

export default Console;