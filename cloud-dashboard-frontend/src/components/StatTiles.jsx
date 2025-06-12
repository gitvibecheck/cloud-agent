export default function StatTiles({ stats }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="font-pixel text-xl">Total Burned</h2>
        <p className="mt-2 text-2xl">{stats?.totalBurned ?? '...'}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="font-pixel text-xl">Price</h2>
        <p className="mt-2 text-2xl">{stats?.price ?? '...'}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="font-pixel text-xl">Market Cap</h2>
        <p className="mt-2 text-2xl">{stats?.marketCap ?? '...'}</p>
      </div>
    </section>
  );
}
