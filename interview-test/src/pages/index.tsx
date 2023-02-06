import CalendarIcon from "@/components/Icons/CalendarIcon";
import PersonIcon from "@/components/Icons/Person";
import StarIcon from "@/components/Icons/StarIcon";
import Image from "next/image";

const arr = [1, 2, 3, 4];

export default function Home() {
  return (
    <>
      <div className="flex justify-center lg:mx-auto mx-5">
        <div className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6 mt-6 ">
          {arr.map((i: any) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

const Card = () => {
  return (
    <div className="shadow-md rounded-lg xl:w-[320px] md:w-[232px] w-[307px]">
      <div className="flex flex-col relative">
        <Wish />
        <div>
          <img
            className="object-cover"
            width="auto"
            src="https://img3.wallspic.com/previews/2/7/4/8/98472/98472-palm_islands-caribbean-beach-palm_tree-coast-x750.jpg"
          />
          {/* <Image
            src="https://img3.wallspic.com/previews/2/7/4/8/98472/98472-palm_islands-caribbean-beach-palm_tree-coast-x750.jpg"
            alt="image"
            width={320}
            height={200}
          /> */}
        </div>
        <div className="p-4">
          <div className="content_header flex flex-col items-start gap-y-1.5">
            <p className="text-xs font-bold">Kolonie</p>
            <h2
              className="font-bold"
              style={{ height: "50px", fontSize: "18px" }}
            >
              Zimowy wyjazd w Alpy dla dzieci 14-16
            </h2>
            <div
              style={{ height: "50px" }}
              className="mb-3 flex justify-start items-end"
            >
              25.09.2022-31.9.2022
            </div>
          </div>
          <div className="content_body text-xs flex justify-between">
            <div style={{ color: "#747474" }}>
              <div className="flex self-end">
                <div>
                  <CalendarIcon />
                </div>
                <div className="ml-1.5">4 dni</div>
              </div>
              <div className="flex self-end">
                <div>
                  <PersonIcon />
                </div>
                <div className="ml-1.5">Polska</div>
              </div>
            </div>
            <div
              style={{ fontSize: "21px", color: "#042675" }}
              className="font-bold flex self-end"
            >
              <p>211</p>
              <p className="h-full text-xs self-start">zl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wish = ({ isWished }: any) => {
  return (
    <div
      style={{ width: "32px", height: "32px" }}
      className="absolute bg-gray-200 rounded-full flex justify-center items-center right-4 top-4"
    >
      <StarIcon />
    </div>
  );
};
