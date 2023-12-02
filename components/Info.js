import React from 'react'


const Info = () => {
    return <header>
        <img src='../images/me.jpeg' className='header-img' />
        <HeaderInfo />
    </header>
}


const HeaderInfo = () => {
    return (
        <div className='header-info'>
            <h3 className='name'> Tina Bals </h3>
            <h4 className='career'> Frontend Developer </h4>
            <h6 className='website'> Tinabals.website </h6>
            <div className='social'>
                <div className='mail-container'>
                    <img src='../images/mail.png' className='social-img' />
                    <p className='social-text-one'> Email </p>
                </div>
                <div className='linkedin-container'>
                    <img src='../images/linkedIn.png' className='social-img' />
                    <p className='social-text-two'> Linked In </p>
                </div>
            </div>
        </div>
    )
}
export default Info