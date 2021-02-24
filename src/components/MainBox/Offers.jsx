import React from 'react';
import Flip from 'react-reveal/Flip';

const Offers = () => {
    return (
        <div>
            <div className="offers">
                <h1 style={{ fontSize: '35px', fontFamily: 'Nunito Sans, sans-serif', margin: '45px auto' }}>Offers</h1>
                <Flip bottom>
                    <div className="container" style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <div>
                            <img style={{ width: '300px', height: '200px', boxShadow: '5px 5px 5px black', cursor: 'pointer'}} src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt="">
                            </img>
                            <h3 style={{ fontWeight: 'bold' }}>Marina Villa</h3>
                            <p>4 bedrooms, big pull</p>
                        </div>
                        <div>
                            <img style={{ width: '300px', height: '200px', boxShadow: '5px 5px 5px black', cursor: 'pointer' }} src="https://www.engelvoelkers.com/images/2a17fd6a-5ab1-4dab-bc30-a78fa4f32a36/elegant-villa-with-private-pool-and-garden" alt="">
                            </img>
                            <h3 style={{ fontWeight: 'bold' }}>Victoria Villa</h3>
                            <p>3 bedrooms, big garden</p>
                        </div>
                        <div>
                            <img style={{ width: '300px', height: '200px', boxShadow: '5px 5px 5px black', cursor: 'pointer' }} src="https://www.myistria.com/UserDocsImages/app/objekti/795/slika_hd/19082020034916_Villas-near-Rovinj-Villa-Prestige-2.jpg?preset=carousel-1-webp" alt="">
                            </img>
                            <h3 style={{ fontWeight: 'bold' }}>Torontino Villa</h3>
                            <p>5 bedrooms and beautiful view</p>
                        </div>
                        <div>
                            <img style={{ width: '300px', height: '200px', boxShadow: '5px 5px 5px black', cursor: 'pointer' }} src="https://sun9-14.userapi.com/impf/c622621/v622621622/16293/mrm9ySrdTVA.jpg?size=604x396&quality=96&sign=018dd68e39fd7ac402ea2cb84919478f&type=album" alt="">
                            </img>
                            <h3 style={{ fontWeight: 'bold' }}>La Maison Villa</h3>
                            <p>4 bedrooms, big pull</p>
                        </div>
                    </div>
                </Flip>
            </div>
        </div>
    );
};

export default Offers;