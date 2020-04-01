import React from 'react';
import './Navbar.css'
import Logo from './Logo';
import {Link, Grid }from '@material-ui/core/';



class Navbar extends React.Component {

    componentWillMount() {
        console.log(" ##componentWill MOUNT##", this.props);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(" ##componentWill UPDATE##", this.props);
    }

    render() {
        console.log(" ##RENDER##", this.props);
        const menu = ['Home', 'Globos', 'Mesa de Dulces', 'Cotiza tu Diseño'];

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Logo/>
                    </Grid>
                    <Grid item xs={9}>
                        <ul className="navbar-nav ml-auto">
                            {
                                menu.map((item) =>
                                    (
                                        <Link href="#" >{item} </Link>
                                    )
                                )
                            }
                        </ul>
                    </Grid>

                </Grid>
            </div>

        );
    }
}

export default Navbar;