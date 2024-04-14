import useFetch from "./useFetch";
import BookList from "./BookList";

const Books = () => {
  
  const { data: book, error, isPending } = useFetch('http://localhost:8000/books/');
  const totalBooks = book.length;
  console.log();
  
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./Resources', false, /\.(png|jpe?g|svg)$/));


  return ( 
    <div className="flex text-center flex-col">
      <h2 className="text-titleColor text-3xl font-medium lg:text-5xl m-5 pb-5">Books From Ed Steers Jr.</h2>
      <div className="">
        <BookList books={book} />
      </div>
    </div>
   );
}
 
export default Books;