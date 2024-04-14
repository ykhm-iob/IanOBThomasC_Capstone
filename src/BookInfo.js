import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);

  const axiosTest = async () => {
    try {
      const { data: response } = await axios.post("https://us-east-1.aws.data.mongodb-api.com/app/data-xpont/endpoint/books");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const data = axiosTest();
  console.log(data);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./Resources', false, /\.(png|jpe?g|svg)$/));

  return ( 
    <div className="flex flex-col gap-36 text-center">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { book && (
        <article className="flex flex-col gap-20 text-center">
          <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Book Info</h2>
          <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">{ book.title }</h2>
          <img className="mx-auto" src={images[ book.cover ]} alt="Book Cover" />
          <p>Synopsis: {book.body }</p>
          <p>Written By: { book.author }</p>
          <div>{ book.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BookInfo;