import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <header>
          <nav>
            <img className='homo-logo' src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' alt='homo-logo'/>
            <ul className='list'> 
              <li><Link>Home</Link></li>
              <li><Link>Products</Link></li>
              <li><Link>Cart</Link></li>
              <li><Link>Logout</Link></li>
            </ul>
          </nav>
      </header>
      <main>
        <section>
            <h1>Enchanting Treasures Await Your Click</h1>
            <p>
               Step into a world of wonder at NXT Tendz. Here, every click unlocks the gates to a realm filled with magical trinkets, captivating artifacts, and whimsical creations. Embark on a journey where imagination meets reality, where dreams take shape in the form of extraordinary products.
            </p>
            <p>
            For merchants, we offer a seamless way to showcase your products to a global audience. Manage your inventory, track orders, and reach customers like never before. Our robust seller dashboard empowers you to grow your business efficiently.

Whether you're looking for the perfect outfit, the latest gadgets, or home decor inspirations,  has got you covered. Experience the future of online shopping today!
            </p>
        </section>
        <aside>

        </aside>
      </main>
    </div>
  )
}

