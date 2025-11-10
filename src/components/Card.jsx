import buttonsData from "../data.json";
import { ButtonsListings } from "../components/ButtonsListings";
import photoUser from "../assets/images/118926595.jpeg";
export function Card() {
  return (
    <>
      <div className="flex flex-col max-w-xl items-center gap-6 bg-Grey-800 mx-auto">
        <img src={photoUser} alt="" className="max-w-40 rounded-full" />
        <span className="text-Green font-bold text-lg">Durango, México</span>
        <p className="text-white opacity-80 font-medium">
          "Front-end developer and avid gamer"
        </p>
        <ButtonsListings buttonsData={buttonsData} />
      </div>
    </>
  );
}
