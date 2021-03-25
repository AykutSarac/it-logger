import React, { useRef, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';


const EditLogModal = () => {
    const firstName = useRef('');
    const lastName = useRef('');

    const onSubmit = () => {
        if (firstName.current.value === '' || lastName === '') {
            M.toast({ html: 'Please enter the first and last name' })
        } else {
            console.log(firstName.current.value, lastName.current.value);

            // Clear Fields
            lastName.current.value = '';
            firstName.current.value = '';
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input name="firstName" type="text" ref={firstName} />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input name="lastName" type="text" ref={lastName} />
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

export default EditLogModal;


