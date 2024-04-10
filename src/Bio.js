const Biography = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Education</h2>
        <ul>
          <li>Trained as a molecular biologist at Penn University.</li>
          <li>Received a Bachelor's of Science degree in 1959.</li>
          <li>Received a PhD in 1963.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Career</h2>
        <ul>
          <li>Joined staff of National Institutes of Health, where Dr. Steers would work as a biomedical researcher.</li>
          <li>This was done in collaboration with Christian B. Anfinsen (Nobel Prize Winner in 1972).</li>
          <li>In 1984, Dr. Steers was appointed Deputy Science Director for intramural research in the NIDDK.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Retirement</h2>
        <ul>
          <li>Retired in 1994</li>
          <li>Took up writing full-time in his favorite avocation, history.</li>
        </ul>
      </div>
    </div>
   );
}
 
export default Biography;