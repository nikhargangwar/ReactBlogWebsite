import './Card.css';
// import cardImage from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';
import clapIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/clapping.svg';
import heartBankIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-black.svg';
import heartRedIcon from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-red.svg';
import { getFormattedDateFromUtcDate, updateBlogData } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';

import { useContext, useState } from 'react';
import { BlogPostContext } from '../../context/BlogPostContext';

interface propTypes {
  id:number;
  date: string;
  readingTime: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
  image: string;
}


function Card({id,date,readingTime,title,description,claps,liked,image}:propTypes){

  const {allBlogData,setAllBlogData} = useContext(BlogPostContext)

// const [isLiked,setIsLiked]=useState(liked);

const clickHandler =async()=>{
  if (allBlogData) {
  try {
    await makeRequest(UPDATE_BLOG_DATA(id), {
      data: { claps: claps + 1 },
    });
    updateBlogData(
      {
        id,date,readingTime,title,description,claps:claps+1,liked,image
      },
      allBlogData,
      setAllBlogData
    );  } catch (e) {
    // TODO: Handle error
  }
}
}

// const imagePath =cardImage+image;

const heartClickHandler=async()=>{
  if (allBlogData) {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: { liked: !liked },
      });
      updateBlogData(
        {
          id,date,readingTime,title,description,claps,liked:!liked,image
        },
        allBlogData,
        setAllBlogData
      );
    } catch (e) {
      // TODO: Handle error
    }
  }
}

return(
    <div className="cardMain" data-testid="blog-post">
    <div className="cardImage">
      <img src={image} />
    </div>
    <div className="cardTime">
      <h5>{getFormattedDateFromUtcDate(date)}</h5>
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
        <img className="clap-button" data-testid="clap-button" onClick={clickHandler} src={clapIcon} />
        <h5 className="clap" data-testid="clap">{claps}</h5>
      </div>
      {liked ? <img className='like' onClick={heartClickHandler} src={heartRedIcon} alt="redHeart" />:<img className='like' onClick={heartClickHandler} src={heartBankIcon} alt="blackHeart" />}
      
    </div>
  </div>
)
}

export default Card;