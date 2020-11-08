import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = (id, activeCharakter) => makeStyles((theme) => ({
    charakter: {
        fontSize: 20,
        color: id === activeCharakter ? 'red' : 'black' 
    }
}))

const BottomCharakterComponent = ({ name, id, activeCharakter}) => {
    const classes = useStyles(id, activeCharakter)();
    return (
        <Typography variant='overline' className={classes.charakter}>{name}</Typography>
    )
}


export default BottomCharakterComponent;