import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
    return (
        <div>
            <h2>Detail</h2>
            {toDo?.text} created at: {toDo?.id}
        </div>
    )
}

function mapStateToProps (state, ownProps) {
    const {match: {params : {id}}} = ownProps;
    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps) (Detail);
