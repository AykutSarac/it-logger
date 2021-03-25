import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)
        fetch('/techs')
            .then(res => res.json())
            .then(setTechs)
            .then(() => setLoading(false))

        // eslint-disable-next-line
    }, [setLoading, setTechs]);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    { !loading && techs.map((tech, index) => <TechItem tech={tech} key={index} /> )}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
