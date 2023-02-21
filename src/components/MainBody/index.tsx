/* eslint-disable react/jsx-key */
import './MainBody.css';
import { useState } from 'react';
import Card from '../Card' // Import
import {stockData} from '../../assets/data';
// import * as cardImage from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';
// const imgAdd = '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';

function MainBody() {

  return (


    <div className="cardArea">
     {
      stockData.map((task)=>

        <Card 
          date={task.date}
          readingTime={task.readingTime}
          title = {task.title}
          description={task.description}
          claps={task.claps}
          liked={task.liked}
          image={task.image}
        />
      )
     }
      
    </div>
  );
}

export default MainBody;
