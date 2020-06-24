import React from 'react'

import '../css/Notification.css'

export default () =>
{
    let isSuccess = true
    let classesNames = 'notification-bar ' + (isSuccess ? ' success' : ' error')
    // let classesNames = (isSuccess) ? `notification-bar success` : 'notification-bar error'
    // <div className={'notification-bar ' + (isSuccess ? ' success' : ' error')}>

    return (
        <div className={classesNames}>
            <div className="row">
                <div className="col-12">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis enim ea, tempora dignissimos molestias error non doloremque itaque dolorem doloribus
                    </p>
                </div>
            </div>
        </div>
    )
}