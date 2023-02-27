defmodule ListNode do
  @type t :: %__MODULE__{val: integer, next: ListNode.t() | nil}
  defstruct val: 0, next: nil
end

defmodule Solution do
  def is_palindrome(list) do
    {reversed_head, length} = reverse(list, nil, 0)
    half = div(length, 2)
    check(list, reversed_head, 0, half)
  end

  def reverse(list, reversed_head \\ nil, i) do
    if list == nil do
      {reversed_head, i}
    else
      reversed_list = %ListNode{val: list.val, next: reversed_head}
      reverse(list.next, reversed_list, i + 1)
    end
  end

  def check(nil, nil, _, _) do
    true
  end

  def check(list, reversed_head, i, len) when i == len do
    list.val == reversed_head.val
  end

  def check(list, reversed_head, i, len) do
    if list.val != reversed_head.val do
      false
    else
      check(list.next, reversed_head.next, i + 1, len)
    end
  end
end
