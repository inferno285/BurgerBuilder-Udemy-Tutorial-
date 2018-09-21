import React from 'react';

import Aux from '../../hoc/_Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main class={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;