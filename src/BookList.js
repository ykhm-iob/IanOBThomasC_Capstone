import { Link } from 'react-router-dom';

const BookList = (props) => {
const books = props.books

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./Resources', false, /\.(png|jpe?g|svg)$/));

  return ( 
    <div className="grid grid-cols-3 gap-5 md:gap-10 md:gap-y-0
    text-center">
      <div>
        {books.map((books) => (
          <div key={books.id}>
            <Link to={`/books/${books.id}`}>
            <img className="mx-auto" src={images[ books.cover ]} alt="Book Cover" />
            </Link>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default BookList;