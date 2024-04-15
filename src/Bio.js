const Biography = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl pt-20">Education</h2>
        <ul>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Trained as a molecular biologist at Penn University.</li>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Received a Bachelor's of Science degree in 1959.</li>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Received a PhD in 1963.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl pt-16">Career</h2>
        <ul>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Joined staff of National Institutes of Health, where Dr. Steers would work as a biomedical researcher.</li>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">This was done in collaboration with Christian B. Anfinsen (Nobel Prize Winner in 1972).</li>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">In 1984, Dr. Steers was appointed Deputy Science Director for intramural research in the NIDDK.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl pt-16">Retirement</h2>
        <ul>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Retired in 1994</li>
          <li className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Took up writing full-time in his favorite avocation, history.</li>
        </ul>
      </div>
    </div>
   );
}
 
export default Biography;