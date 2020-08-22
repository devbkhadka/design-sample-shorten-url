import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Statistics from '../components/Statistics'
import BoostYourLink from '../components/BoostYourLink'
import Footer from '../components/Footer'

function HomePage(props) {
    return (
        <>
            <section className="header">
                <NavBar className="app-gutter"/>
            </section>
            <section className="banner">
                <Banner />
            </section>
            <section className="statistics" style={{backgroundColor: "var(--grey)"}}>
                <Statistics className="app-gutter" />
            </section>
            <section>
                <BoostYourLink />
            </section>
            <section>
                <Footer className="app-gutter"/>
            </section>
        </>
        
    )
}

export default HomePage