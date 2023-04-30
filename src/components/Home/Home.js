import React, { useEffect } from 'react';
import SearchArea from './SearchArea/SearchArea';
import Categories from './Categories/Categories';
import Working from './Working/Working';
import FeatureProviders from './FeaturesProviders/FeatureProviders';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Statics from './Statics/Statics';
import RecentArticles from './RecentArticles/RecentArticles';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../redux/actions/categoryAction';

const Home = () => {
//     const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(getCategory)
//     // console.log("dispatched");
//   },[])
    return (
        <div className='home' id='home'>
            <SearchArea/>
            <Categories/>
            <Working/>
            <FeatureProviders/>
            <WhyChooseUs/>
            <Statics/>
        </div>
    )
}

export default Home;