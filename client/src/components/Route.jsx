import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Home from './home/Home'
import CreatePost from './post/CreatePost'
import UpdatePost from './post/UpdatePost'
import DisplayPost from './post/DisplayPost'
import About from './about/About'
import Contact from './contact/Contact'
import Login from './login/Login'
import Signup from './login/Signup'


function Routes() {
    return (
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/update/:id" component={UpdatePost} />
                <Route exact path="/display/:id" component={DisplayPost} />
                <Route exact path="/create" component={CreatePost} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        
    )
}

export default Routes
