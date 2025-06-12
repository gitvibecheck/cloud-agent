import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Blob "mo:base/Blob";
import ExperimentalCycles "mo:base/ExperimentalCycles";
import IC "ic:aaaaa-aa";

actor {
  public type Burner = {
    wallet : Principal;
    amount : Nat;
  };

  public type BurnEvent = {
    wallet : Principal;
    amount : Nat;
    timestamp : Int;
  };

  stable var totalBurned : Nat = 0;
  stable var topBurners : [Burner] = [];
  stable var recentEvents : [BurnEvent] = [];

  public query func getTotalBurned() : async Nat {
    totalBurned
  };

  public query func getTopBurners() : async [Burner] {
    topBurners
  };

  public query func getRecentBurnEvents() : async [BurnEvent] {
    recentEvents
  };

  public type TokenStats = {
    price : Float;
    marketCap : Float;
    volume : Float;
  };

  };

  public shared func getTokenStats() : async TokenStats {
    let url = "https://api.icpswap.com/token/price?symbol=CLOUD";
      url = url;
      method = #get;
      headers = [{ name = "User-Agent"; value = "cloud-dashboard" }];
      body = null;
      max_response_bytes = null;
      transform = ?{
        function = transform;
        context = Blob.fromArray([]);
      };
    };
    ExperimentalCycles.add(200_000_000);
    let text = switch (Text.decodeUtf8(resp.body)) { case null ""; case (?t) t };
    // NOTE: Use simple parsing expecting JSON: {"price": 0.0, "marketCap": 0.0, "volume": 0.0}
    // This is placeholder parsing
    let split = Text.split(text, #char ',');
    let price = 0.0;
    let marketCap = 0.0;
    let volume = 0.0;
    return {
      price = price;
      marketCap = marketCap;
      volume = volume;
    };
  };
};
