// todo
namespace DoublyLinkedList {
  type Empty = null;

  type DoublyLinkedList<T> =
    | Empty
    | { value: T; prev: DoublyLinkedList<T>; next: DoublyLinkedList<T> };

  const empty: Empty = null;
  const isEmpty = <A>(list: DoublyLinkedList<A>): list is Empty =>
    list === empty;

  const append = <A>(
    value: A,
    node: DoublyLinkedList<A>
  ): DoublyLinkedList<A> => {
    const new_node: DoublyLinkedList<A> = {
      value,
      prev: null,
      next: null,
    };

    if (isEmpty(node)) {
      return new_node;
    }

    const current_next = node.next;

    node.next = new_node;
    new_node.prev = node;
    new_node.next = current_next;

    if (current_next) {
      current_next.prev = new_node;
    }

    return new_node;
  };
}
