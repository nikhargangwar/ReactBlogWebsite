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
const [isLiked,setIsLiked]=useState(liked);
const [flag,setFlag]= useState(false);

const clickHandler =()=>{
  setCountClap(countClap+1);
  // if(!flag)
  // {setCountClap(countClap+1);
  // setFlag(true);
  // }
  // else{
  //   setCountClap(countClap-1);
  //   setFlag(false);
  // }
   
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
        <img className="clap-button"onClick={clickHandler} src={clapIcon} />
        <h5 className="clap">{countClap}</h5>
      </div>
      {isLiked ? <img className='like' onClick={heartClickHandler} src={heartRedIcon} alt="redHeart" />:<img className='like' onClick={heartClickHandler} src={heartBankIcon} alt="blackHeart" />}
      
    </div>
  </div>
)
}

export default Card;