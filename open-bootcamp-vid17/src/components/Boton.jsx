import React from 'react';
import Button from '@mui/material/Button';
import PropTypes  from 'prop-types';

// import { Button } from '@mui/base';
// import { Button } from '@mui/base/Button';

// import { Button } from '@mui/base/Button';

export const Boton = ({text="Botón",color="primary"}) => {
    return (
        <>
            <Button variant='contained' color={color}>{text}</Button>
            
            
            {/*  */}
            {/* <Button
                backgroundColor="#ff0505"
                label="xxxxxxxxx"
                onClick={() => {}}
                primary
                size="large"
            />

            <Button
                label="Button"
                onClick={() => {}}
                primary
            >
            {text}
            </Button>

            <Button
                backgroundColor="#ff0505"
                label="Button"
                onClick={() => {}}
                primary
                size="large"
            >
                Eliminar
            </Button> */}
        </>
    )
};

Boton.propTypes={
    text:PropTypes.string,
    color: PropTypes.oneOf(["primary","secondary","warning","success"])
}


