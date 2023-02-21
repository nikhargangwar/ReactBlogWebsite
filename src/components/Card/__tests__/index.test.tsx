import React from 'react';
import Card from  '..';
import { fireEvent, render } from '@testing-library/react';


describe('testing for card component',()=>{
    it('should toggle like on click', () => {
        const { container } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        expect(container).toMatchSnapshot();
       
      });
      it('should render correctly with liked', () => {
        const { container } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={true}
          />
        );
        expect(container).toMatchSnapshot();
      });
      it('should render correctly with 0 claps', () => {
        const { container } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={0}
            liked={false}
          />
        );
        expect(container).toMatchSnapshot();
      });

      // One of the way to test
      it('should toggle like on click', () => {
        const { getByAltText } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        
      const getBlackHeart = () => getByAltText('blackHeart') as HTMLImageElement;
        const getRedHeart = () => getByAltText('redHeart')  as HTMLImageElement;
        expect(getBlackHeart().src).toContain('heart-black.svg');
        fireEvent.click(getBlackHeart());

        expect(getRedHeart().src).toContain('heart-red.svg');
        fireEvent.click(getRedHeart());
        expect(getBlackHeart().src).toContain('heart-black.svg');
      });

      it('should increment claps on click', () => {
        const { container } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        const clap = container.querySelector('.clap');
        const clapButton = container.querySelector('.clap-button');
        expect(clap.innerHTML).toContain('10');
        fireEvent.click(clapButton);
        expect(clap.innerHTML).toContain('11');
      });

      
      it('should decrement claps on second click', () => {
        const { container } = render(
          <Card
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        const clap = container.querySelector('.clap');
        const clapButton = container.querySelector('.clap-button');
        expect(clap.innerHTML).toContain('10');
        fireEvent.click(clapButton);
        expect(clap.innerHTML).toContain('11');
        fireEvent.click(clapButton);
        expect(clap.innerHTML).toContain('12');
      });
    
    
    // it('should toggle like on click', () => {
    //     const { container } = render(
    //       <Card
    //         image="abstract.png"
    //         date="2nd Januray, 2018"
    //         readingTime="2 mins"
    //         title="The future of abstract art and the culture ..."
    //         description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
    //         claps={10}
    //         liked={false}
    //       />
    //     );
       // expect(container).toMatchSnapshot();
        // const like = container.querySelector('.like');
        // expect(like).toHaveAttribute('src', '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-black.svg');
        // fireEvent.click(like);
        // expect(like).toHaveAttribute('src', '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-black.svg');
        // fireEvent.click(like);
        // expect(like).toHaveAttribute('src', '/Users/nikhar_gangwar/reactWebsitePractice/my-app/src/assets/Icons/heart-black.svg');



        // const like = container.queryBy('.like');


// console.log(like);
//        expect(like.src).toContain('heart-black.svg');
//         fireEvent.click(like[0]);
//         expect(like.src).toContain('heart-red.svg');
//         fireEvent.click(like);
//         expect(like.src).toContain('heart-black.svg');
//       });
      
})  