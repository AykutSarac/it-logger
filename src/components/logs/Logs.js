import React, { useState, useEffect } from 'react'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)
        fetch('/logs')
            .then(res => res.json())
            .then(setLogs)
            .then(() => setLoading(false))

        // eslint-disable-next-line
    }, [setLoading, setLogs]);

    if (loading) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? ( <p className='center'>No logs to show...</p> ) : ( logs.map((log, index) => <LogItem log={log} key={index} />) )}
        </ul>
    )
}

export default Logs
