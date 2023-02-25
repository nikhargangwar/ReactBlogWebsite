import React from 'react';
import Card from  '..';
import { fireEvent, render,screen, waitFor } from '@testing-library/react';


describe('testing for card component',()=>{

    it('should render correctly with not liked', () => {
        const { container } = render(
          <Card
            id={2}
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
          id={2}
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
          id={2}
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
      it('should toggle like on click',async () => {
        render(
          <Card
          id={2}
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        
      const getBlackHeart =  screen.getByAltText('blackHeart') as HTMLImageElement;
        
        expect(getBlackHeart.src).toContain('heart-black.svg');
        fireEvent.click(getBlackHeart);

       await waitFor(()=>{
        const getRedHeart = screen.getByAltText('redHeart')  as HTMLImageElement;
        expect(getRedHeart.src).toContain('heart-red.svg');
        fireEvent.click(getRedHeart);
       }) 
       
       await waitFor(()=>{
        expect(getBlackHeart.src).toContain('heart-black.svg');
      }) 
      });

      it('should increment claps on click', async() => {
        render(
          <Card
          id={2}
            image="abstract.png"
            date="2nd Januray, 2018"
            readingTime="2 mins"
            title="The future of abstract art and the culture ..."
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
            claps={10}
            liked={false}
          />
        );
        const clap = screen.getByTestId('clap');
        const clapButton = screen.getByTestId('clap-button');
        expect(clap.innerHTML).toContain('10');
        fireEvent.click(clapButton);
       // console.log(clap.innerHTML)
        await waitFor(()=>{
          expect(clap.innerHTML).toContain('11')
        });
        fireEvent.click(clapButton);
        await waitFor(()=>{
          expect(clap.innerHTML).toContain('12')
        });
        
      });

      
    //   it('should decrement claps on second click', () => {
    //     const { container } = render(
    //       <Card
    //       id={2}
    //         image="abstract.png"
    //         date="2nd Januray, 2018"
    //         readingTime="2 mins"
    //         title="The future of abstract art and the culture ..."
    //         description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
    //         claps={10}
    //         liked={false}
    //       />
    //     );
    //     const clap = container.querySelector('.clap');
    //     const clapButton = container.querySelector('.clap-button');
    //     expect(clap.innerHTML).toContain('10');
    //     fireEvent.click(clapButton);
    //     expect(clap.innerHTML).toContain('11');
    //     fireEvent.click(clapButton);
    //     expect(clap.innerHTML).toContain('12');
    //   });



    // -------------------------
    
    
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
      
});