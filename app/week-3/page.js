import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-left text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}
