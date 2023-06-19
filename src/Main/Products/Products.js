import React from 'react';
import Card from './Card/Card';
import './Products.css';

export default function Products(){
    return (
        <>
            <section className="product">
                <div className="container py-5">
                    <div className='row py-1 d-flex'>
                        <div className="col-lg-5 m-auto text-center">                                
                            <h1 style={{fontSize: 40}}>Our Products</h1>
                            <h6 style={{color: 'darkblue', fontSize: 25}}>Check Our Latest Collection</h6>
                        </div>
                        <div className='cards'>
                            <Card imagePath="./shoes3.avif" name="White Shoes" price="$ 29.99" />
                            <Card imagePath="./shirt3.avif" name="Black Shirt" price="$ 25.49" />        
                            <Card imagePath="./pants1.avif" name="Blue Jeans" price="$ 35.99" />
                        </div>

                        <div className='cards'>
                            <Card imagePath="./pants2.avif" name="Jeans & Jacket" price="$ 59.99" />
                            <Card imagePath="./shoes1.avif" name="Suede Shoes" price="$ 25.49" />        
                            <Card imagePath="./shirt2.avif" name="White Shirt" price="$ 45.49" />
                        </div>

                        <div className='cards'>
                            <Card imagePath="./shoes3.avif" name="White Shoes" price="$ 29.99" />
                            <Card imagePath="./pants1.avif" name="Blue Pants" price="$ 35.49" />        
                            <Card imagePath="./shirt3.avif" name="Black Shirt" price="$ 25.99" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}