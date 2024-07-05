import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import bannerImg from '../assets/restauranfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/*banner tests */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <BrowserRouter to="/booking"><button aria-label='On Click'>Reserve Table</button></BrowserRouter>
                </div>

                {/*banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>

        </header>
    );
};

export default Header;