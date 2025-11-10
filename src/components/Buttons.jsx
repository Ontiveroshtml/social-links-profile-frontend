export function Buttons({ item }) {
  return (
    <>
      <button className="bg-Grey-700 rounded-lg md:w-md p-4 w-sm text-white text-xl font-medium cursor-pointer hover:bg-Green hover:text-Grey-900">
        <a href={item?.url} target="_blank">{item?.title}</a>
      </button>
    </>
  );
}
