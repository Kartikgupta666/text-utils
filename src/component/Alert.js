import React from 'react';

function Alert(props) {
    return (
        <div>
            {props.alert && (<div className=" position-relative float-end alert alert-success alert-dismissible fade show" role="alert">
                <strong>{props.alert.msg}</strong>
            </div>)}
        </div>

    );
}

export default Alert;
