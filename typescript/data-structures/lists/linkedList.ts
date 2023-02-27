namespace LinkedList {
  type Empty = null;

  type List<T> =
    | Empty
    | { element: T; next: List<T> };

  const empty = null;

  const is_empty = <T>(list: List<T>): list is Empty => list === empty;

  const head = <T>(list: List<T>): T | Empty => list?.element || null;
  const tail = <T>(list: List<T>): List<T> => list?.next || null;

  const cons = <T>(el: T, list: List<T>): List<T> => ({
    element: el,
    next: list,
  });

  const map = <T>(f: (_: T) => T, list: List<T>): List<T> => {
    if (is_empty(list)) {
      return empty;
    }

    const head = f(list.element);
    const tail = map(f, list.next);

    return cons(head, tail);
  };

  const rev_map = <A, B>(f: (_: A) => B, list: List<A>): List<B> => {
    const aux = (list: List<A>, accu: List<B> = empty): List<B> => {
      if (is_empty(list)) {
        return accu;
      }

      const head = f(list.element);
      const tail = cons(head, accu);

      return aux(list.next, tail);
    };

    return aux(list);
  };

  const filter = <T>(f: (_: T) => boolean, list: List<T>): List<T> => {
    if (is_empty(list)) {
      return empty;
    }

    const tail = filter(f, list.next);

    return f(list.element) ? cons(list.element, tail) : tail;
  };

  const length = <T>(list: List<T>, accu = 0): number => {
    if (is_empty(list)) {
      return accu;
    }

    return length(list.next, accu + 1);
  };

  const nth = <T>(list: List<T>, at: number, accu = 0): T | Empty => {
    if (is_empty(list)) {
      return empty;
    }

    if (at == accu) {
      return list.element;
    }

    return nth(list.next, at, accu + 1);
  };
}
