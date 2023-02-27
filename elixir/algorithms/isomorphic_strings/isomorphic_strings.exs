defmodule Solution do
  @spec is_isomorphic(s :: String.t(), t :: String.t()) :: boolean
  def is_isomorphic(s, t) do
    morph(s) == morph(t)
  end

  def morph(s) do
    {encoded_chars, _} = Enum.map_reduce(String.graphemes(s), %{}, &map_char/2)
    Enum.join(encoded_chars)
  end

  defp map_char(char, char_mapper) do
    case Map.has_key?(char_mapper, char) do
      true ->
        {char_mapper[char], char_mapper}

      false ->
        cur_letter_idx = map_size(char_mapper)
        {cur_letter_idx + 1, Map.put(char_mapper, char, cur_letter_idx + 1)}
    end
  end
end
