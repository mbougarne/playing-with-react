import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationContext from './context/MenuContext'

import Home from './pages/Home'
import Books from './pages/Books'
import CreateBook from './pages/CreateBook'
import SingleBook from './pages/SingleBook'
import UpdateBook from './pages/UpdateBook'

import Navigation from './components/Navigation'
import Icon from './components/FontIcon'

function App()
{
    let { isVisible } = useContext(NavigationContext)
    let [showMenu, setMenu] = useState(isVisible)

    let NavigationMenu = (showMenu) ? <Navigation /> : ''

    return (
        <NavigationContext.Provider value={[showMenu, setMenu]}>
            <Router>

                <div className="nav-toggle-container" onClick={() => setMenu(showMenu = !showMenu)}>
                    <Icon name="fas fa-bars"/>
                </div>

                {NavigationMenu}

                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route exact path="/books"> <Books /> </Route>
                    <Route exact path="/books/:id"> <SingleBook /> </Route>
                    <Route exact path="/books/update/:id"> <UpdateBook /> </Route>
                    <Route path="/create-book"> <CreateBook /> </Route>
                </Switch>
            </Router>
        </NavigationContext.Provider>
    )
}

export default App;