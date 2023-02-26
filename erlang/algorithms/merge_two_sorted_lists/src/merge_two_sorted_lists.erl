-module(merge_two_sorted_lists).

-export([merge_two_lists/2]).

-record(list_node, {val = 0 :: integer(), next = null :: null | #list_node{}}).

-spec merge_two_lists(#list_node{} | null, #list_node{} | null) -> #list_node{} | null.
merge_two_lists(null, L2) ->
  L2;
merge_two_lists(L1, null) ->
  L1;
merge_two_lists(#list_node{val = Val1, next = Next1},
                #list_node{val = Val2, next = Next2}) ->
  if Val1 < Val2 ->
       #list_node{val = Val1,
                  next = merge_two_lists(Next1, #list_node{val = Val2, next = Next2})};
     true ->
       #list_node{val = Val2,
                  next = merge_two_lists(#list_node{val = Val1, next = Next1}, Next2)}
  end.
