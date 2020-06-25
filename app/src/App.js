import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotificationContenxt from './context/NotificationContenxt'

import Home from './pages/Home'
import Books from './pages/Books'
import CreateBook from './pages/CreateBook'
import SingleBook from './pages/SingleBook'
import UpdateBook from './pages/UpdateBook'

import Navigation from './components/Navigation'
import Notification from './components/Notification'

function App()
{
    let notifyContext = useContext(NotificationContenxt)

    let [notify, setNotify] = useState(notifyContext)

    let NotificationUI = (notify.show) ? <Notification /> : ''

    useEffect(() => {
        let comp = setTimeout(() => setNotify({...notify, show: false}), 3000)
        return () => clearTimeout(comp)
    })

    return (
            <NotificationContenxt.Provider value={{notify, setNotify}}>
                <Router>
                    {/* Notifications */}
                    { NotificationUI }
                    {/* Navigation */}
                    <Navigation />
                    {/* Content */}
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route exact path="/books"> <Books /> </Route>
                        <Route exact path="/books/:id"> <SingleBook /> </Route>
                        <Route exact path="/books/update/:id"> <UpdateBook /> </Route>
                        <Route path="/create-book"> <CreateBook /> </Route>
                    </Switch>
                </Router>
            </NotificationContenxt.Provider>
    )
}

export default App;