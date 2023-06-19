import React from 'react';
import './Header.css';

export default function Header(){

    return (
        <>
          <nav className="navigation navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">CutFitters</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 my-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active"  href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="./products.html">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" >
                            Categories
                        </a>
                        
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Sale</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="./about.html">About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="px-2 search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn0" type="submit">Search</button>
                    </form>
                </div>
            </div>
          </nav>
        </>
    );
}