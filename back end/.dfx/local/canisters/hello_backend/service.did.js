export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({
    'greet' : IDL.Func([], [IDL.Text], ['query']),
    'inc' : IDL.Func([], [], []),
    'show' : IDL.Func([], [IDL.Text], []),
  });
  return NFT;
};
export const init = ({ IDL }) => { return []; };
