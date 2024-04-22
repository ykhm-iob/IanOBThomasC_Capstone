import { Link } from 'react-router-dom';

const About = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl font-medium pt-5 pb-3 lg:pb-5 lg:text-5xl">About Me</h2>
        <p className="text-paragraphColor tracking-wide	leading-relaxed text-ellipsis text-sm max-w-sm px-10
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto line-clamp-6 
        md:line-clamp-none hover:line-clamp-none">Dr. Steers was trained at University of PA to be a molecular biologist in 1963, graduating with a PhD from the University of Pennsylvania. He would go on to 
         become a biomedical researcher in collobration with a Nobel Prize winner, before retiring 
         as a history writer. It is here where Dr. Steers would release multiple books, and have 
        multiple guest appearances on radio and TV shows...</p>
        <Link to="/about/Biography"><button className="button">Biography Page</button></Link>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium pb-3 lg:pb-5 lg:text-5xl">Appearances</h2>
        <p className="text-paragraphColor tracking-wide	leading-relaxed text-ellipsis text-sm max-w-sm px-10
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto line-clamp-6 
        md:line-clamp-none hover:line-clamp-none">Dr. Steers has had multiple appearances over the years, including but not limited to:
        <br /> Over 13 televised appearances, including educational and radio programs.
        <br /> Multiple interviews, including one on The Today Show.
        <br /> His book(s) discussed on CNN. </p>
        <Link to="/about/Appearances"><button className="button">Appearances Page</button></Link>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium pb-3 lg:pb-5 lg:text-5xl">Contact Info</h2>
        <p className="text-paragraphColor tracking-wide leading-relaxed text-sm lg:text-lg">Send me an email at: ed@edsteers.com</p>
      </div>
    </div>
   );
}
 
export default About;