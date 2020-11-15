import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { SET_NEW_CHARACTER } from '../../../reducers/WordReducer';

const useStyles = (left, top, found, opacity, hint) => makeStyles((theme) => ({
    char: {
        fontSize: 40,
        color: found ? 'lightgey' : hint ? 'blue' : 'white',
        textShadow: '0 0 10px rgba(0,0,0,0.9)',
        fontWeight: 'bold',
    },
    charBox: {
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        opacity: found ? 1 : `0.${opacity}`,
        zIndex: 1,
    }

}))

const CharakterComponent = ({ left, top, name, id, found, opacity, newId, activeCharakter, hint }) => {
    const classes = useStyles(left, top, found, opacity, hint)();
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
        if (id === activeCharakter) {
            const d = new Date();
            const startTime = d.getTime();
            dispatch(SET_NEW_CHARACTER(newId, startTime))
        }
    }, [activeCharakter, dispatch, id, newId])
    return (
        <Button className={classes.charBox} onClick={handleClick}>
            <Typography className={classes.char}>{name}</Typography>
        </Button>
    )
}


export default CharakterComponent;