namespace QueueTwoStacks {
  type Stack<A> = A[];

  type Queue<A> = {
    max_capacity: number;
    stackl: Stack<A>;
    stackr: Stack<A>;
  };

  const newQueue = <T>(max_capacity: number): Queue<T> => ({
    max_capacity,
    stackl: [],
    stackr: [],
  });

  const isFull = <T>(queue: Queue<T>): boolean => {
    return queue.stackl.length === queue.max_capacity;
  };

  const isEmpty = <T>(queue: Queue<T>): boolean => {
    return queue.stackl.length === 0 && queue.stackr.length === 0;
  };

  const stackl_to_stackr = <T>(queue: Queue<T>): Queue<T> => {
    if (isEmpty(queue) || queue.stackr.length > 0) {
      return queue;
    }

    const [head, ...tail] = queue.stackl;
    const rotate = { ...queue, stackl: tail, stackr: [head, ...queue.stackr] };

    return stackl_to_stackr(rotate);
  };

  const stackr_to_stackl = <T>(queue: Queue<T>): Queue<T> => {
    if (isEmpty(queue) || queue.stackl.length > 0) {
      return queue;
    }

    const [head, ...tail] = queue.stackr;
    const rotate = { ...queue, stackl: [head, ...queue.stackl], stackr: tail };

    return stackr_to_stackl(rotate);
  };

  const enqueue = <T>(value: T, queue: Queue<T>): Queue<T> => {
    if (isFull(queue)) {
      return queue;
    }

    return { ...queue, stackl: [value, ...queue.stackl] };
  };

  const dequeue = <T>(queue: Queue<T>): Queue<T> => {
    const rotate = stackl_to_stackr(queue);

    if (isEmpty(rotate)) {
      return queue;
    }

    const [, ...tail] = rotate.stackr;
    const newQueue = { ...queue, stackl: [], stackr: tail };

    return stackr_to_stackl(newQueue);
  };

  console.log(enqueue(1, enqueue(2, enqueue(3, newQueue(10)))));
}
