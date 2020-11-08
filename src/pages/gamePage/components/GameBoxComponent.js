import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { FINISH_WORD } from '../../../constants';
import CharakterComponent from './CharakterComponent';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cont: {
        height: 700,
        position: 'relative',
    }
}))

const GameBoxComponent = ({ img }) => {
    const classes = useStyles();
    const { charatkers, activeCharakter } = useSelector(state => state.WordReducer);

    return (
        <Box className={classes.cont}>
            <img className={classes.img} src={img} alt='background' />
            {charatkers?.length ? charatkers.map((item, key) => <CharakterComponent hint={item.hint} newId={key + 1 < charatkers.length ? charatkers[key + 1].id : FINISH_WORD} key={key}  {...item} activeCharakter={activeCharakter} />) : ''}

        </Box>
    )
}


export default GameBoxComponent;