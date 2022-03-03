import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import MainHeader from '../components/MainHeader'

function Home() {
    return (
        <div className='parent'>
            <div className='child'>
                <div>
                    <MainHeader />
                </div>
                <div>
                    <Header />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Home