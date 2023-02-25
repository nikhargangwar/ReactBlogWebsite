/* eslint-disable react/jsx-key */
import './MainBody.css';
import {useContext, useEffect, useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import Card from '../Card' // Import
import { clearConfigCache } from 'prettier';
import { isTypeAliasDeclaration } from 'typescript';
import { useNavigate } from 'react-router-dom';
import { BlogPostContext } from '../../context/BlogPostContext';

// import {stockData} from '../../assets/data';
// import * as cardImage from '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';
// const imgAdd = '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/images/';

interface BlogData {
  id: number;
  image: string;
  date: string;
  readingTime: string;
  title: string;
  description: string;
  claps: number;
  liked: boolean;
}

function MainBody() {
  // const [blogData, setBlogData] = useState<BlogData[]>();
  const {allBlogData,setAllBlogData} = useContext(BlogPostContext)
  const [error, setError] = useState();
  const navigate = useNavigate()

    useEffect(() => {
     
      makeRequest(GET_BLOG_DATA,{},navigate)
        .then((response) => {
          setAllBlogData(response);
        })
        .catch((e) => {
          setError(e.message);
        });
    }, []);

  if (error) {
    return (
      <div className="blogDataError" data-testid="error">
        <p>{error}</p>
      </div>
    );
  }


  return allBlogData ? (

    <div className="cardArea">
     {
      allBlogData.map((task)=>

        <Card key={task.id}
          id={task.id}
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
  ): (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );;
}


export default MainBody;