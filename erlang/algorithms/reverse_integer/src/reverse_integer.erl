-module(reverse_integer).

-export([reverse/1]).

-spec reverse(X :: integer()) -> integer().
reverse(X) when is_integer(X) ->
    limit_reverse(reverse(integer_to_list(X)));
reverse([45 | T]) ->
    list_to_integer([45 | lists:reverse(T)]);
reverse(X) ->
    list_to_integer(lists:reverse(X)).

-spec limit_reverse(X :: integer()) -> integer().
limit_reverse(X) when X > 2147483646 -> 0;
limit_reverse(X) when X < -2147483647 -> 0;
limit_reverse(X) -> X.