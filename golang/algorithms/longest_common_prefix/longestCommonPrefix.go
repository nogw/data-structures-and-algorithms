package longestCommonPrefix

func longestCommonPrefix(strs []string) string {
	if len(strs) >= 1 {
		p := strs[0]

		for i := 0; i < len(strs); i++ {
			str := strs[i]

			if len(str) < len(p) {
				p = p[:len(str)]
			}

			for k := 0; k < len(p); k++ {
				if p[k] != str[k] {
					p = p[:k]
					break
				}
			}
		}

		return p
	}

	return ""
}
