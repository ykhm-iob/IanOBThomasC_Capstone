const PageList = ({ pages, title, handleTest }) => {
// const pages = props.pages;
// const title = props.title;

  return (
    <div className="page-list">
      <h2>{ title }</h2>
      {pages.map((page) => (
        <div className="page-preview" key={page.id}>
          <h2>{ page.title }</h2>
          <p>Preview: { page.body } </p>
          <button onClick={() => handleTest(page.id)}>Test Button</button>
        </div>
      ))}
    </div>
  );
}
 
export default PageList;