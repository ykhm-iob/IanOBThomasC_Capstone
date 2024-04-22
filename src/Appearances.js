const Appearances = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-20">TV Appearances</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 pb-9
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Dr. Ed Steers had a number of TV appearances, which includes but is not limited to:
        <br />The BookNotes with Brian Lamb
        <br />Hard Cover History on the History Channel
        <br />The Washington Journal (C-SPAN)
        <br />C-Span's Book TV.</p>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-16">Radio Appearances</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 pb-9
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Dr. Ed Steers also had appearances on multiple radio shows, which include:
        <br />An appearance on several radio locations such as: CHI, MIA, DEN, MA, KY, PHIL, ROC.
        <br />A radio appearance on the Canadian Broadcasting Corporation.
        <br />A radio appearance on the PBS Morning Edition with Bob Edwards. 
        </p>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-16">Other Appearances</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 pb-9
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Dr. Ed Steers had a few other appearances and/or mentions, including but not limited to:
        <br />Appearing in four TV productions on the History channel in regards to Lincoln's assassination.
        <br />Appearing on the Today Show, where he would be interviewed by Matt Lauer.
        <br />Finally, his book(s) were discussed by Robert Novak on CNN's "Crossfire".
        </p>
      </div>
    </div>
   );
}
 
export default Appearances;