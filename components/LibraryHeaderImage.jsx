import Image from "next/image";

const LibraryHeaderImage = ({image}) => {
    return (     
    <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[400px] w-full"
              width={0}
              height={0}
              sizes="1vw"
            />
          </div>
        </div>
      </section> );
}
 
export default LibraryHeaderImage;