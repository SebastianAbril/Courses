import React from 'react';

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(msg);
    };
    return (
        <button
            className="CreateTodoButton"
            onClick={ () => onClickButton('Aqui se deberia abrir el modal')}
        >+</button>
    )
}

export { CreateTodoButton }