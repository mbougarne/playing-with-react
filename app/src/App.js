import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationContext from './context/MenuContext'
import NotificationContenxt from './context/NotificationContenxt'

import Home from './pages/Home'
import Books from './pages/Books'
import CreateBook from './pages/CreateBook'
import SingleBook from './pages/SingleBook'
import UpdateBook from './pages/UpdateBook'

import Navigation from './components/Navigation'
import Icon from './components/FontIcon'
import Notification from './components/Notification'

function App()
{
    let { isVisible } = useContext(NavigationContext)
    let notifyContext = useContext(NotificationContenxt)

    let [showMenu, setMenu] = useState(isVisible)
    let [notify, setNotify] = useState(notifyContext)

    let NavigationMenu = (showMenu) ? <Navigation /> : ''
    let NotificationUI = (notify.show) ? <Notification /> : ''

    useEffect(() => {
        let comp = setTimeout(() => setNotify({...notify, show: false}), 3000)
        return () => clearTimeout(comp)
    })

    return (
        <NavigationContext.Provider value={[showMenu, setMenu]}>
            <NotificationContenxt.Provider value={{notify, setNotify}}>
                <Router>
                    {/* Notifications */}
                    {
                        NotificationUI
                    }
                    {/* Bars */}
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
            </NotificationContenxt.Provider>
        </NavigationContext.Provider>
    )
}

export default App;