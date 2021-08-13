import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Home from './home/Home'
import CreatePost from './post/CreatePost'
import UpdatePost from './post/UpdatePost'
import DisplayPost from './post/DisplayPost'
import About from './about/About'
import Contact from './contact/Contact'


function Routes() {
    return (
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/update" component={UpdatePost} />
                <Route exact path="/display" component={DisplayPost} />
                <Route exact path="/create" component={CreatePost} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        
    )
}

export default Routes
