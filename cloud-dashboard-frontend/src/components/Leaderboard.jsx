export default function Leaderboard({ burners }) {
  return (
    <div className="my-8">
      <h2 className="font-pixel text-xl mb-2">Top Burners</h2>
      <ul className="space-y-2">
        {burners?.map((b, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded flex justify-between">
            <span className="truncate mr-2">{b.wallet.toString()}</span>
            <span>{b.amount}</span>
          </li>
        )) || <li className="text-gray-400">Loading...</li>}
      </ul>
    </div>
  );
}
