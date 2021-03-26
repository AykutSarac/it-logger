import React from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {

    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({ html: `Deleted tech ${tech.firstName + " " + tech.lastName}`});
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem)
