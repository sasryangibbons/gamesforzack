import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <div id='outer'>
            <MainNavigation />
            <main id='page-wrap' className={classes.main}>{props.children}</main>
        </div>
    );
};

export default Layout;