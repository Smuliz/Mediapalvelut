import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import Home from './components/home';
import Blog from './views/Blog';
import history from './utils/history';
import Portfolio from '../src/views/Portfolio';
import WriteBlog from './views/WriteBlog';



const Routes = () => {
    return(
        <>
        <div>
        <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/write" component={WriteBlog} />
        </Switch>
        </Router>
        </div>
        </>
        
    )
}

export default Routes;