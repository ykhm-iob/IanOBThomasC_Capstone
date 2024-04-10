const Appearances = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">TV Appearances</h2>
        <ul>
          <li>BookNotes with Brian Lamb</li>
          <li>Hard Cover History on the History Channel</li>
          <li>Washington Journal (C-SPAN)</li>
          <li>C-Span's Book TV</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Radio Appearances</h2>
        <ul>
          <li>Several radio appearances in locations such as: CHI, MIA, DEN, MA, KY, PHIL, ROC</li>
          <li>Radio appearance on the Canadian Broadcasting Corporation</li>
          <li>Radio appearance on PBS Morning Edition with Bob Edwards</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Other Appearances</h2>
        <ul>
          <li>Appeared in four TV productions on the History Channel in regards to Lincoln's assassination.</li>
          <li>Appeared on the Today Show, interviewed by Matt Lauer.</li>
          <li>Had his book(s) discussed by Robert Novak on CNN's "Crossfire".</li>
        </ul>
      </div>
    </div>
   );
}
 
export default Appearances;