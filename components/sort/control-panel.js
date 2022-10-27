import styles from '../../styles/sort/control-panel.module.scss'

import { Status } from '../../constants/status'
import { render } from 'react-dom'

const ControlPanel = ({status, setStatus, count}) => {
    const switchStatus = () => {
        switch(status) {
            case Status.START:
                setStatus(Status.RUNNING)
                return
            case Status.RESTART:
                setStatus(Status.START)
                return
        }
    }
    const renderButton = () => {
        switch (status) {
            case Status.RESTART:
                return (
                    <button type='button' onClick={()=>{switchStatus()}}>
                        <img  className={styles.restart} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIKdmlld0JveD0iMCAwIDI0IDI0IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDIgMiBMIDQuOTM5NDUzMSA0LjkzOTQ1MzEgQyAzLjEyNjI2ODQgNi43NDgyMTQzIDIgOS4yNDI3MDc5IDIgMTIgQyAyIDE3LjUxNCA2LjQ4NiAyMiAxMiAyMiBDIDE3LjUxNCAyMiAyMiAxNy41MTQgMjIgMTIgQyAyMiA2LjQ4NiAxNy41MTQgMiAxMiAyIEwgMTIgNCBDIDE2LjQxMSA0IDIwIDcuNTg5IDIwIDEyIEMgMjAgMTYuNDExIDE2LjQxMSAyMCAxMiAyMCBDIDcuNTg5IDIwIDQgMTYuNDExIDQgMTIgQyA0IDkuNzk0MDA5MiA0LjkwMDQ3NjcgNy43OTcyNzU3IDYuMzQ5NjA5NCA2LjM0OTYwOTQgTCA5IDkgTCA5IDIgTCAyIDIgeiI+PC9wYXRoPjwvc3ZnPg=="/>
                    </button>
                )
            case Status.START:
                return (
                    <button type='button' className={styles.start} onClick={()=>{switchStatus()}}></button>
                )
        }
    }
    return (
        <div className={styles.container}>
            <h1>
                count: {count}
            </h1>
            {renderButton()}
        </div>
    )
}

export default ControlPanel