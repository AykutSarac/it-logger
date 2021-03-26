import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions'
import { connect } from 'react-redux';

const EditLogModal = ({ current, updateLog }) => {
    const [currentLog, setCurrentLog] = useState({
        message: '',
        tech: '',
        attention: false
    });

    useEffect(() => {

        if (current !== null) {
            setCurrentLog(current);
        }
        
    }, [current]);

    const onSubmit = () => {
        if (currentLog.message === '' || currentLog.tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            updateLog({...currentLog, date: new Date()});
        }
    }

    return (
        <div id="edit-log-modal" className="modal modal-fixed-footer" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input name="message" type="text" value={currentLog.message} onChange={(e) => setCurrentLog({...currentLog, message: e.target.value})} />
                        <label htmlFor="message" className={currentLog?.message === '' ? null : 'active'}>
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={currentLog.tech} className="browser-default" onChange={(e) => setCurrentLog({...currentLog, tech: e.target.value})}>
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
                                <input type="checkbox" className="filled-in" checked={currentLog.attention} onChange={(e) => setCurrentLog({...currentLog, attention: e.target.checked})} />
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

const mapStateToProps = (state) => ({
    current: state.log.current
});


export default connect(mapStateToProps, { updateLog })(EditLogModal);


