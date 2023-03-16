//--========== Import du Style ==========--//
import './Home.css'

//--========== Import Outils React ==========--//
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles, displayArticles } from '../../Actions/articles';
import {v4 as uuidv4} from 'uuid';

//--========== Import des Composants ==========--//
import Card from '../../Components/Card/Card'

export default function Home() {

    const articlesList = useSelector((state) => state.articles)

    console.log(articlesList);

    const dispatch = useDispatch();

    useEffect(() => {
        if(articlesList.length === 0) {
            dispatch(fetchArticles());
        }
    },[]);

  return (

    <>

        <h1 className="home-title">
            Tout les Articles
        </h1>

        <div className="container-cards">

            {articlesList.map((item) => (

                <Card 
                key={item.id}>

                    <h2>{item.title}</h2>

                    <a href="#">Lire L'article</a>

                </Card>

                )
            )}

        </div>

    </>
  )
}
