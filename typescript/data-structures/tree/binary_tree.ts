namespace Tree {
  type Empty = null;

  type Tree<A> =
    | Empty
    | { value: A; left: Tree<A>; right: Tree<A> };

  const empty = null;

  const is_empty = <A>(tree: Tree<A>): tree is Empty => tree === empty;

  const is_balanced = <A>(tree: Tree<A>): number => {
    if (is_empty(tree)) return 0;

    const left = is_balanced(tree.left);
    if (left === -1) return -1;

    const right = is_balanced(tree.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) {
      return -1;
    } else {
      return Math.max(left, right) + 1;
    }
  };

  const insert = <A>(value: A, tree: Tree<A>): Tree<A> => {
    if (is_empty(tree)) {
      return { value, left: empty, right: empty };
    }

    switch (true) {
      case tree.value === value:
        return tree;
      case tree.value > value:
        return {
          value: tree.value,
          left: insert(value, tree.left),
          right: tree.right,
        };
      case is_empty(tree.left):
        return {
          value: tree.value,
          left: insert(value, tree.left),
          right: tree.right,
        };
      case tree!.left!.value > value:
        return {
          value: tree.value,
          left: insert(value, tree.right),
          right: tree.left,
        };
      default:
        return {
          value: tree.value,
          left: tree.left,
          right: insert(value, tree.right),
        };
    }
  };


  const from_list = <A>(list: A[]): Tree<A> => {
    return list.reduceRight((acc: Tree<A>, el: A) => insert(el, acc), null);
  };

  const search = <A>(tree: Tree<A>, value: A): A | null => {
    if (is_empty(tree)) {
      return null;
    }

    if (tree.value === value) {
      return tree.value;
    }

    if (tree.value > value) {
      return search(tree.left, value);
    }

    if (!is_empty(tree.left) && tree.left.value > tree.value) {
      return search(tree.left, value);
    }

    return search(tree.right, value);
  };

  (() => {
    const tree = from_list([3, 0, 5, 4, 2, 1, 6, 7]);

    console.log(search(tree, 1));
    console.log(tree);
  })();
}