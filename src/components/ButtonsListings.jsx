import { Buttons } from "./buttons";

export function ButtonsListings({buttonsData}) {
  return (
    <>
      <ul className="flex flex-col justify-center items-center gap-6 ">
        {buttonsData.map((item) => (
          <ul key={item.title}>
            <Buttons item={item} />
          </ul>
        ))}
      </ul>
    </>
  );
}
