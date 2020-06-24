import { createContext } from 'react'

let notification = {
    show: false,
    success: false,
    message: ''
}

const NotificationContenxt = createContext(notification)

export default NotificationContenxt