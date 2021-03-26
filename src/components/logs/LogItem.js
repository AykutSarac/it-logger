import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteLog, setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js';


const LogItem = ({ log, deleteLog, setCurrent, state: { current } }) => {

    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: `Deleted log by ${log.tech}`})
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>{ log.message }</a>
                <br/>
                <span className="grey-text">
                    <span className="black-text">ID #{log.id} </span>
                    last updated by
                    <span className="black-text"> {log.tech} </span>
                    on{' '}
                    <Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

const mapStateToProps = (state) => ({
    state: state.log
});

LogItem.propTypes = {
    state: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { deleteLog, setCurrent })(LogItem);
