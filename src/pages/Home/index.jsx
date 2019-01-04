import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/astronauts"}>Astronauts</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <h1>B2C_WEBSITE - BEST PRACTICE REACT</h1>
                </main>
            </Fragment>
        );
    };
}

export default Home;