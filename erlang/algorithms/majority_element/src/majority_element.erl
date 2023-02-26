-module(majority_element).

-export([majority_element/1]).

-spec majority_element(Nums :: [integer()]) -> integer().
majority_element(Nums) when is_list(Nums) ->
  Frequency = (length(Nums) - 1) div 2,
  reduce_while(Nums,
               #{},
               fun(X, Acc) ->
                  case maps:get(integer_to_list(X), Acc, 0) >= Frequency of
                    true -> {halt, X};
                    false ->
                      {cont, maps:update_with(integer_to_list(X), fun(V) -> V + 1 end, 1, Acc)}
                  end
               end).

reduce_while([], _Acc, _Func) ->
  none;
reduce_while([H | T], Acc, Func) ->
  case Func(H, Acc) of
    {halt, Result} ->
      Result;
    {cont, NewAcc} ->
      reduce_while(T, NewAcc, Func)
  end.
