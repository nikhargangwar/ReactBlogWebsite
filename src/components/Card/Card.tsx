import './Card.css';
// import cardImage from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';
import clapIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/clapping.svg';
import heartBankIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-black.svg';
import heartRedIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-red.svg';

import { useState } from 'react';

interface propTypes {
  date: string;
  readingTime: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
  image: string;
}


function Card({date,readingTime,title,description,claps,liked,image}:propTypes){

const [countClap,setCountClap]= useState(claps);
const [isLiked,setIsLiked]=useState(liked)
const clickHandler =()=>{
  setCountClap(countClap+1);
}

// const imagePath =cardImage+image;

const heartClickHandler=()=>{
  setIsLiked(!isLiked);
}

console.log(image);

return(
    <div className="cardMain">
    <div className="cardImage">
      <img src={require(`../../assets/images/${image}`)} />
    </div>
    <div className="cardTime">
      <h5>{date}</h5>
      <h5>{readingTime}</h5>
    </div>
    <div className="cardTitle">
      <h3>{title}</h3>
    </div>
    <div className="cardDescription">
      <h5>
       {description}
      </h5>
    </div>
    <hr id="cardLine" />
    <div className="cardReaction">
      <div className="clapCount">
        <img onClick={clickHandler} src={clapIcon} />
        <h5>{countClap}</h5>
      </div>
      {isLiked ? <img onClick={heartClickHandler} src={heartRedIcon} alt="images" />:<img onClick={heartClickHandler} src={heartBankIcon} alt="images" />}
      
    </div>
  </div>
)
}

export default Card;