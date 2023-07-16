import Debug "mo:base/Debug";
import Principal "mo:base/Principal";


actor class NFT(){
  let myArray = ["https://ipfs.io/ipfs/QmYRD4XRRtiJmAALnX8huWDUuYL265jvcpkyEiMaXyWWMm", "https://ipfs.io/ipfs/QmX5im73JpS7XiJaHCF5Y2PJzY6FvnG27UwB4XTNnqfMoC", "https://ipfs.io/ipfs/QmVT9Kf9iPNwwTb3fazLa6EKMrVETWGGYsaWpJ9uwcjN9F", "https://ipfs.io/ipfs/QmaRKugJiTSmx8nFNFW1XKNTkPMfWB1QmDjsqN8fwCfycB", "https://ipfs.io/ipfs/QmWmEH2eDmEcvn8HG4La22e8TfkbBHoQffxKJJGNmc9Laf", "https://ipfs.io/ipfs/QmPXS4njBKRnLSPR96nQfpqwUXXYj62d1TaUpMmNJ4bbJ4", "https://ipfs.io/ipfs/QmSy3qpffbmz1SFzGhfQ4LgRYMpFddFNVEj3zvk759p7JD", "https://ipfs.io/ipfs/QmYRD4XRRtiJmAALnX8huWDUuYL265jvcpkyEiMaXyWWMm", "https://ipfs.io/ipfs/QmduBi7bUkmgqexRuw3hfMnY269kUbSgV1BDJM6VBK4Hxu", "https://ipfs.io/ipfs/QmZEa3VcQiRjP4kpMWe5cNFLKNU7KEdomqB3VoEHAdbf5K", "https://ipfs.io/ipfs/QmTYQ9VttjmPKpvoR2ZSY3UtWzmqWazC7JE2e9b1jpfSsa", "https://ipfs.io/ipfs/QmTqgJqKhxfUA6sPbPzWnutcAhRxEZp4wXUF2GBcytHXNN"];


let request_headers = [
        { name = "Host"; value = ":443" },
        { name = "User-Agent"; value = "exchange_rate_canister" },
    ];

  stable var counter = 0;
  public query func greet() : async Text {
    return myArray[counter];
  };

  public func inc() : async () {
	counter += 1;
};

public func show() : async Text{
	let firstHeaderName = request_headers[0].name;
	return firstHeaderName;
};

};
