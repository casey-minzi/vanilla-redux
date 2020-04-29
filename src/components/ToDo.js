import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

function ToDo({ text, onBtnClick }) {
    return (
        <li>
            {text} <button onClick={onBtnClick}>Delete</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id))}
};

export default connect(null, mapDispatchToProps)(ToDo);
