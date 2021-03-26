import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'


const TechSelectOptions = ({ getTechs, tech: { techs } }) => {

    useEffect(() => {
        getTechs();
    }, []);

    return (
        <Fragment>
            { techs !== null && techs.map((tech, index) => (
                <option key={index} value={`${tech.firstName + ' ' + tech.lastName}`}>{tech.firstName} {tech.lastName}</option>
            ))}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
