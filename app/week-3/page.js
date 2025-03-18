import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-800 flex flex-col items-center justify-start py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
