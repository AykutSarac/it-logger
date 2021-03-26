import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TechItem from './TechItem'
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);


    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {(!loading && techs !== null) && techs.map((tech, index) => <TechItem tech={tech} key={index} />)}
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
