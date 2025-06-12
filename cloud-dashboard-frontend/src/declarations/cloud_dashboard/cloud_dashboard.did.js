export const idlFactory = ({ IDL }) => {
  const Burner = IDL.Record({ wallet: IDL.Principal, amount: IDL.Nat });
  const BurnEvent = IDL.Record({ wallet: IDL.Principal, amount: IDL.Nat, timestamp: IDL.Int });
  const TokenStats = IDL.Record({ price: IDL.Float64, marketCap: IDL.Float64, volume: IDL.Float64 });
  return IDL.Service({
    getTotalBurned: IDL.Func([], [IDL.Nat], ['query']),
    getTopBurners: IDL.Func([], [IDL.Vec(Burner)], ['query']),
    getRecentBurnEvents: IDL.Func([], [IDL.Vec(BurnEvent)], ['query']),
    getTokenStats: IDL.Func([], [TokenStats], []),
  });
};
export const init = ({ IDL }) => { return []; };
