-module(is_palindrome).

-export([is_palindrome/1]).

-spec is_palindrome(X :: integer()) -> boolean().
is_palindrome(Number) when is_integer(Number) ->
  is_palindrome(Number, 0, 1).

is_palindrome(Number, Rev, Div) when Number >= Div ->
  Digit = Number div Div rem 10,
  is_palindrome(Number, Rev * 10 + Digit, Div * 10);
is_palindrome(Number, Rev, _) ->
  Number == Rev.
