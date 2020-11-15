import { Box, Container, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import MainComponent from '../../components/MainComponent';
import GameBoxComponent from './components/GameBoxComponent';
import FirstPathJpg from '../../backgrounds/path1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import BottomCharakterComponent from './components/BottomCharakterComponent';
import { SET_ALL, SET_HINT, SET_NEW, SET_NEW_NAME } from '../../reducers/WordReducer';
import wordArrayGenerate from '../../functions/wordArrayGenerate';
import { useHistory } from 'react-router-dom';
import { WORDS } from '../../constants';

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
    const history = useHistory();
    const dispatch = useDispatch();
    const { allCharatkers, charatkers, activeCharakter, fullName, timeNow, needWords, now } = useSelector(state => state.WordReducer);
   
    useEffect(() => {
        // const name = prompt("Podaj swoje imię");
        // dispatch(SET_NEW_NAME(name || 'data'))
    const showLetter = setInterval(() => {
        const d = new Date();
        const currentTime = d.getTime();
        console.log({ timeNow})
        console.log((currentTime - timeNow) / 1000)
        if(((currentTime - timeNow)/1000) > 5){
            dispatch(SET_HINT(activeCharakter)) 
            clearInterval(showLetter)
        }
    }, [1000])
    return () => {
        clearInterval(showLetter) 
    }
     // eslint-disable-next-line
    }, [dispatch, timeNow])
    useEffect(() => {
        if (charatkers[charatkers.length - 1].found){
            console.log('workw')
            if (now >= needWords){
                const arr = [...allCharatkers, ...charatkers]
                const results = arr.map((item) => ([
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
                history.push('/') 
            } else {
                if(now !== 0){
                    dispatch(SET_ALL(charatkers));
                }
                dispatch(SET_NEW(wordArrayGenerate(WORDS[now], now)));
            }
        }
        // eslint-disable-next-line
    }, [charatkers])
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