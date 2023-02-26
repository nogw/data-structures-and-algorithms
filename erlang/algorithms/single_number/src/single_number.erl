-module(single_number).

-export([single_number/1]).

-spec single_number(Nums :: [integer()]) -> integer().
single_number(Nums) when is_list(Nums) -> lists:foldl(fun(X, Acc) -> X bxor Acc end, 0, Nums).
