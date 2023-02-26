-module(string_to_integer).

-export([my_atoi/1]).

-spec my_atoi(S :: unicode:unicode_binary()) -> integer().
my_atoi(S) ->
    String = erlang:binary_to_list(S),
    case string:to_integer(string:strip(String, left)) of
        {error, _} -> 0;
        {Int, _} when Int > 2147483647 -> 2147483647;
        {Int, _} when Int < -2147483647 -> -2147483648;
        {Int, _} -> Int
    end.