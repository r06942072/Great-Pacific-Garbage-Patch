import React from 'react';

function Button(props) {
    return (
        <div>
            <p>*Ya!! Arrive the target area</p>
            <form>
                <input type="reset" value="Arrival" onClick={props.handleClick}/>
            </form>
        </div>
    );
}

export default Button;