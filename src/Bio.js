const Biography = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-20">Education</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">While not being in history, Dr. Ed Steers had a considerable education and would even go on to get a PhD. After receiving his general education, he would go on to be trained as a molecular biologist at Penn University. After four years, he would receive his Bachelor's of Science degree in 1959. Four years later, his PhD in 1963.
        </p>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-16">Career</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">After graduating with his PhD, Dr. Steers would join the staff of National Institutes of Health. From here, he would go on to work as a biomedical researcher which would be done in collaboration with Christian B. Anfinsen, who was a Nobel Prize winner in 1972. Sometime in 1984, Dr. Steers was appointed Deputy Science Director for intramural research in the NIDDK.
        </p>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl pb-3 font-medium lg:text-5xl pt-16">Retirement</h2>
        <p className="text-paragraphColor text-ellipsis text-sm max-w-sm px-10 pb-9
        sm:max-w-2xl sm:text-base md:max-w-2xl lg:text-lg lg:max-w-4xl mx-auto">Dr. Ed Steers would go on to retire in 1994.
          <br />From here, he would go on to take up writing full-time in his favorite avocation, history.
        </p>
      </div>
    </div>
   );
}
 
export default Biography;