import React from 'react';
import recipies from '../recipes';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week specials!</h2>
                <button>Order Menu</button>
            </div>

            {/* menu cards*/}
            <div>
                {
                    recipies.map(recipe => <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Menu;