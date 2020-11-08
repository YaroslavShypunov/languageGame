import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import '../sass/mainComponent.sass';

const MainComponent = ({ children}) => {

    return (
        <>
            <HeaderComponent />
            <section className="container">
                {children}
            </section>
            <FooterComponent />
        </>
    )
}


export default MainComponent;