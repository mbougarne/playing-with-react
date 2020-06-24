import React, {useContext} from 'react'

import NotificationContext from '../context/NotificationContenxt'

import '../css/Notification.css'

export default () =>
{
    let {notify} = useContext(NotificationContext)

    let classesNames = 'notification-bar ' + (notify.success ? ' success' : ' error')
    // let classesNames = (isSuccess) ? `notification-bar success` : 'notification-bar error'
    // <div className={'notification-bar ' + (isSuccess ? ' success' : ' error')}>

    return (
        <div className={classesNames}>
            <div className="row">
                <div className="col-12">
                    <p>
                        {notify.message}
                    </p>
                </div>
            </div>
        </div>
    )
}