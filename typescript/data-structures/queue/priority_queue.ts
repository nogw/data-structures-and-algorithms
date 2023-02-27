namespace PriorityQueue {
  type Value<A> = [number, A];

  type PriorityQueue<A> = {
    max_capacity: number;
    values: Value<A>[];
  };

  const newQueue = <T>(max_capacity: number): PriorityQueue<T> => ({
    max_capacity,
    values: [],
  });

  const isFull = <T>(queue: PriorityQueue<T>): boolean => {
    return queue.values.length === queue.max_capacity;
  };

  const isEmpty = <T>(queue: PriorityQueue<T>): boolean => {
    return queue.values.length === 0;
  };

  const enqueue = <A>(priority: number, value: A, queue: PriorityQueue<A>): PriorityQueue<A> => {
    if (isFull(queue)) {
      return queue;
    }

    const values: Value<A>[] = [...queue.values, [priority, value]];
    const sorted: Value<A>[] = values.sort((a, b) => a[0] - b[0]);

    return { ...queue, values: sorted };
  };

  const dequeue = <T>(queue: PriorityQueue<T>): [Value<T>, PriorityQueue<T>] | [] => {
    if (isEmpty(queue)) {
      return [];
    }

    const [value, ...values] = queue.values;
    return [value, { ...queue, values }];
  };

  console.log(enqueue(3, 30, (enqueue(2, 20, (enqueue(1, 10, (enqueue(4, 40, (newQueue(10))))))))))
}
