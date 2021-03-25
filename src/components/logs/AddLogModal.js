import React, { useRef, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModal = () => {
    const message = useRef('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message.current.value === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            console.log(message.current.value, tech, attention);
            message.current.value = '';
        }
    }

    return (
        <div id="add-log-modal" className="modal modal-fixed-footer" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input name="message" type="text" ref={message} />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={(e) => setTech(e.target.value)}>
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" value={attention} ref={(e) => setAttention(attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal


