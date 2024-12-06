import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return ( 
        <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox heading='Affordable Books' backgroundColor="bg-blue-100">Learn how our project helps to make books more affordable in
            our local area.</InfoBox>
            <InfoBox heading='Community'>Learn how our project helps to build a community of bookworms</InfoBox>
          </div>
        </div>
      </section>
    );
}
 
export default InfoBoxes;