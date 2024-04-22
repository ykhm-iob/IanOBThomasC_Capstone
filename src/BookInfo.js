import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch(
    'https://us-east-1.aws.data.mongodb-api.com/app/data-xpont/endpoint/books?isbn=' 
    + id);

  
  
  const axiosTest = async () => {
    try {
      const { data: response } = await axios.get("https://us-east-1.aws.data.mongodb-api.com/app/data-xpont/endpoint/book");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const data = axiosTest();
  console.log(data);

  return ( 
    <div className="flex flex-col gap-36 text-center">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { book && (
        <article className="flex flex-col gap-10 text-center">
          <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Book Info</h2>
          <h2 className="text-titleColor text-sm max-w-sm text-3xl font-medium lg:text-5xl
          sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl">{ book.title }</h2>
          <img className="rounded-2xl w-2/6 min-w-36 mx-auto m-4 md:max-w-56 lg:max-w-64" src={ book.cover_img } alt="Book Cover" /> {/* {images[book.cover]} */}
          <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto 
        line-clamp-5 md:line-clamp-none hover:line-clamp-none"><b>Synopsis:</b> {book.description }</p>
          <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto"><b>Written By:</b> { book.author }</p>
          <a href={ book.url } target="_blank" rel="noreferrer"><button className="button">Amazon Page</button></a>
          <Link to="/books"><button className="button mb-4">Return To Books Page</button></Link>
        </article>
      )}
    </div>
   );
}
 
export default BookInfo;