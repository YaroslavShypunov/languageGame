import React from 'react'
import { Link } from 'react-router-dom';
import MainComponent from '../../components/MainComponent';
import { GAME_ROUTE } from '../../constants/routes';

const MainPage = (props) => {

    return (
        <MainComponent>
            <>
                {/*    */}
                <div style={{ margin: "auto" }} className="centerSection">
                    {/* */}
                    <h3 style={{ textAlign: "center" }} >Spróbuj zapamiętać alfabet cyrylicy</h3>
                    <h2>А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Э Ю Я</h2>
                    <h2>A B V G D E JO Ż Z I J K L M N O P R S T Y F H C CZ SH Ś E JU JA</h2>
                </div>
                {/*  */}
                <div style={{ margin: '70px auto' }} id="buttonSection" >
                    <Link to={GAME_ROUTE}>
                        <button className="button">Przejdź dalej</button>
                    </Link>
                </div>
            </>
        </MainComponent>
    )
}


export default MainPage;