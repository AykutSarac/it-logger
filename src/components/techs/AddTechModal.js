import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

const EditLogModal = ({ addTech }) => {
    const [technician, setTechnician] = useState({
        firstName: '',
        lastName: ''
    });

    const onSubmit = () => {
        if (technician.firstName === '' || technician.lastName === '') {
            M.toast({ html: 'Please enter the first and last name' })
        } else {

            addTech(technician);

            M.toast({ html: `Added new tech ${technician.firstName} ${technician.lastName}` });

            // Clear Fields
            setTechnician({
                firstName: '',
                lastName: ''
            });
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input name="firstName" type="text" value={technician.firstName} onChange={(e) => setTechnician({ ...technician, firstName: e.target.value })} />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input name="lastName" type="text" value={technician.lastName} onChange={(e) => setTechnician({ ...technician, lastName: e.target.value })} />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>


            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

export default connect(null, { addTech })(EditLogModal);


