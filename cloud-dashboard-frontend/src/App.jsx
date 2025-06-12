import { useEffect, useState } from 'react';
import { HttpAgent, Actor } from '@dfinity/agent';
import Hero from './components/Hero';
import StatTiles from './components/StatTiles';
import Leaderboard from './components/Leaderboard';
import Timeline from './components/Timeline';
import { idlFactory } from './declarations/cloud_dashboard/cloud_dashboard.did.js';

function useDashboardActor() {
  const [actor, setActor] = useState(null);
  useEffect(() => {
    const agent = new HttpAgent();
    const canisterId = import.meta.env.VITE_CANISTER_ID_CLOUD_DASHBOARD;
    setActor(Actor.createActor(idlFactory, { agent, canisterId }));
  }, []);
  return actor;
}

export default function App() {
  const actor = useDashboardActor();
  const [stats, setStats] = useState(null);
  const [burners, setBurners] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (!actor) return;
    async function fetchData() {
      try {
        const s = await actor.getTokenStats();
        const b = await actor.getTopBurners();
        const e = await actor.getRecentBurnEvents();
        const total = await actor.getTotalBurned();
        setStats({ ...s, totalBurned: total });
        setBurners(b);
        setEvents(e);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [actor]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Hero />
      <StatTiles stats={stats} />
      <Leaderboard burners={burners} />
      <Timeline events={events} />
    </div>
  );
}
