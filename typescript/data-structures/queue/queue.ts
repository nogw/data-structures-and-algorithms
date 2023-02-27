namespace Queue {
  type Queue<T> = {
    max_capacity: number;
    values: T[];
  };

  const newQueue = <T>(max_capacity: number): Queue<T> => ({
    max_capacity,
    values: [],
  });

  const isEmpty = <T>(queue: Queue<T>): boolean => {
    return length(queue) === 0;
  };

  const length = <T>(queue: Queue<T>): number => {
    return queue.values.length;
  };

  const enqueue = <T>(value: T, queue: Queue<T>): Queue<T> => {
    if (queue.max_capacity == length(queue)) {
      return queue;
    }

    return { ...queue, values: [...queue.values, value] };
  };

  const dequeue = <T>(queue: Queue<T>): [T, Queue<T>] | [] => {
    if (isEmpty(queue)) {
      return [];
    }

    const [value, ...values] = queue.values;
    return [value, { ...queue, values }];
  };

  const peek = <T>(queue: Queue<T>): T | [] => {
    if (isEmpty(queue)) {
      return [];
    }

    const [value] = queue.values;
    return value;
  };
}
