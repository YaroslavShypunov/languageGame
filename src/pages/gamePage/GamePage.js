import { Box, Container, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import MainComponent from '../../components/MainComponent';
import GameBoxComponent from './components/GameBoxComponent';
import FirstPathJpg from '../../backgrounds/path1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import BottomCharakterComponent from './components/BottomCharakterComponent';
import { SET_HINT, SET_NEW_NAME } from '../../reducers/WordReducer';

const useStyles = makeStyles((theme) => ({
    wordBox: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightgray' 
    }
}))

const GamePage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { charatkers, activeCharakter, fullName, timeNow } = useSelector(state => state.WordReducer);
    useEffect(() => {
        const name = prompt("Podaj swoje imię");
        dispatch(SET_NEW_NAME(name || 'data'))
    const showLetter = setInterval(() => {
        const d = new Date();
        const currentTime = d.getTime();
        if(((currentTime - timeNow)/1000) > 5){
            dispatch(SET_HINT(activeCharakter)) 
        }
        if (activeCharakter === 'finish') {
            clearInterval(showLetter)
        }
    }, [5000])
    return () => {
        clearInterval(showLetter) 
    }
     // eslint-disable-next-line
    }, [dispatch])
    useEffect(() => {
        if (activeCharakter === 'finish'){
            const results = charatkers.map((item) => ([
                item.name,
                item.left,
                item.top,
                item.opacity,
                `${item.time / 1000} s`,
            ]))
            results.unshift(['Nazwa', 'Pozycja od lewej strony', 'Pozycja od góry', 'Nieprzezroczystość', 'czas']);
            let csvContent = "data:text/csv;charset=utf-8,"
                + results.map(e => e.join(",")).join("\n");
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `${fullName}.csv`);
            document.body.appendChild(link);
            link.click();
            alert('Skończyłeś gre, jeśli chcesz powtórzyć runde, przeładuj strone')
        }
        // eslint-disable-next-line
     }, [activeCharakter])
    console.log({ charatkers});
    return (
        <MainComponent>
            <Container>
                <GameBoxComponent
                    img={FirstPathJpg}
                />
                <Box className={classes.wordBox}>
                    {charatkers?.length ? charatkers.map((item, key) =>
                        <BottomCharakterComponent {...item} key={key} activeCharakter={activeCharakter} />
                    ) : ''}

                </Box>
            </Container>
        </MainComponent>
    )
}


export default GamePage;