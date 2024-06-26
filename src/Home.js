import author_headshot from './Resources/ed-steers-headshot.jpg';
import recent_book from './Resources/id-09.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex flex-col gap-36 text-center">
      <div className="pt-6">
        <img className="rounded-2xl w-2/6 mx-auto m-4 md:max-w-56 lg:max-w-64" src={author_headshot} alt="Headshot of Portfolio Owner, Ed Steers Jr." />
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Ed Steers Jr.</h2>
        <p className="text-subtitleColor mx-5 text-sm lg:text-lg">A renown author in American history, including Abraham Lincoln, John Wilkes Booth, and World War II</p>
        <Link to ="/about"><button className="button">More About Me!</button></Link>
      </div>
      <div className="">
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Latest Release</h2>
        <h3 className="text-titleColor text-2xl font-medium lg:text-4xl">Rationing During WWII (2021)</h3>
        <Link to ="/books/B09JJHRWF3"><img className="rounded-2xl w-2/6 mx-auto md:max-w-56 m-4 lg:max-w-64" src={ recent_book } alt="Cover of Ed Steers Jr. most recent release." /></Link>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto line-clamp-6
        tracking-wide leading-relaxed pt-3
        md:line-clamp-none focus:line-clamp-none">"World War II saw changes to every American's life from the home front to the battlefront. To fight a two-ocean war required enormous resources and production numbers never before seen in history. Edward Grey, Britain's Foreign Secretary, likened the United States to a giant boiler stating: 'Once the fire is lighted there is no limit to the power it can generate.' Even Grey was amazed at the final output of America's industrial and agricultural sectors. In nearly every category America outproduced the Axis powers. The demands of the military were such that a program of rationing and price controls were essential if victory was to be achieved. 'Use It Up, Wear It Out, Make It Do Or Do Without' is the story of how America achieved a successful balance between the war front and the home front to win final victory."</p>
        <Link to="/books"><button className="button mb-4">See All Books!</button></Link>
      </div>
    </div>
  );
}
 
export default Home;