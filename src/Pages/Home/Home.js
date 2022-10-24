import React, { Component } from 'react';
import '../Home/Home.css'
import '../../index.css'
import BackgroundImage from '../../Pictures/HomePage.png';
import searchI from '../../Pictures/Terdekatku/Search.png';

import Nasi from '../../Pictures/nasi.png';
import Minuman from '../../Pictures/minuman.png';
import Seafood from '../../Pictures/seafood.png';
import Other from '../../Pictures/other.png';

import WarunkMulya from '../../Pictures/Terdekatku/Warunk_Mulya/WarunkMulya.png';
// import StarMulya from '../../Pictures/Terdekatku/Warunk_Mulya/star.png'
import dot from '../../Pictures/Terdekatku/dot.png';

import MeatGuy from '../../Pictures/Terdekatku/MeatGuy.png';
import verif from '../../Pictures/Terdekatku/verified.png';

import JardinCafe from '../../Pictures/Terdekatku/Jardin.png';
import verif02 from '../../Pictures/Terdekatku/verified.png';

import info from '../../Pictures/info1.png';
import info01 from '../../Pictures/info2.png';

class Home extends Component {
    render() {
      return (
        <div className='home'>
            <img src={BackgroundImage} alt=''/>
            <div className="image-container">
                <h2 className='tahukah'>Tahukah Kamu?</h2>

                <div className='search-box'>
                  <img className='search-icon' src={searchI} alt='' />
                  <input type='text'/>
                </div>

                <h3 className='destinasi'>Kuliner.Go mempunyai lebih dari 1000 destinasi</h3>
                <h2 className='kategori'>Pilihan Kategori</h2>
                <h5>Temukan makanan dan minuman terbaik di daerah anda</h5>

                <div className='menu-image'>
                  <img className='nasi' src={Nasi} alt='' /> 
                    <h3 className='nasi-text'>Aneka Nasi</h3>
                    <p className='nasi-text02'>Lihat aneka nasi terbaik di daerah anda</p>
                  <img className='minuman' src={Minuman} alt='' />
                    <h3 className='minuman-text'>Minuman</h3>
                    <p className='minuman-text02'>Lihat minuman terbaik di daerah anda</p>
                  <img className='seafood' src={Seafood} alt='' />
                    <h3 className='seafood-text'>Seafood</h3>
                    <p className='seafood-text02'>Lihat minuman terbaik di daerah anda</p>
                  <img className='other' src={Other} alt=''/>
                </div>
                <h2 className='restoran-terdekat-text'>Restoran Terdekat</h2>
                <h5 className='restoran-terdekat-text02'>Temukan restoran terdekat di daerah anda</h5>

                <div className='terdekatku-container'>
                  <img className='terdekatku01' src={WarunkMulya} alt='' />
                  <h3 className='warunk-mulya'>
                    Warunk Mulya 
                    <img className='dot-icon-warunk-mulya' src={dot} alt=''/>
                    <h3 className='buah-batu'>
                      Buah Batu
                    </h3>
                    {/* <img className='star-01' src={StarMulya} alt=''/> */}
                  </h3>

                  <img className='terdekatku02' src={MeatGuy} alt='' />
                  <h3 className='meat-guy'>
                    Meatguy Steakhouse
                    <img className='dot-icon-meatguy' src={dot} alt=''/>
                    <img className='verified-icon' src={verif} alt='' />
                    <h3 className='pesona-bali'>
                      Pesona Bali
                    </h3>
                  </h3>

                  <img className='terdekatku03'src={JardinCafe} alt=''/>
                  <h3 className='jardin-cafe'>
                    Jardin Cafe
                    <img className='dot-icon-meatguy' src={dot} alt=''/>
                    <img className='verified-icon' src={verif02} alt='' />
                    <h3 className='martadinata'>
                      Martadinata
                    </h3>
                  </h3>
                    

                 
                </div>
                <div className='info'>
                  <img className='info-image' src={info} alt='' />
                </div>
                <div className='info01'>
                  <img className='info-image01' src={info01} alt='' />
                </div>
            </div>
        </div>      
      )
    }
  }

export default Home;
