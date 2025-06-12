export default function Timeline({ events }) {
  return (
    <div className="my-8">
      <h2 className="font-pixel text-xl mb-2">Recent Burns</h2>
      <ul className="space-y-2">
        {events?.map((e, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded">
            <div className="flex justify-between">
              <span className="truncate mr-2">{e.wallet.toString()}</span>
              <span>{e.amount}</span>
            </div>
            <div className="text-sm text-gray-400">
              {new Date(Number(e.timestamp / 1000000n)).toLocaleString()}
            </div>
          </li>
        )) || <li className="text-gray-400">Loading...</li>}
      </ul>
    </div>
  );
}
