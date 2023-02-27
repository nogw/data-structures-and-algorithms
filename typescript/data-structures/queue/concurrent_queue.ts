namespace ConcurrentQueue {
  type Lock = Promise<void>;

  type ConcurrentQueue<T> = {
    max_capacity: number;
    buffer: Array<T>;
    head: number;
    tail: number;
    enqueueLock: Lock;
    dequeueLock: Lock;
  };

  const newConcurrentQueue = <T>(max_capacity: number): ConcurrentQueue<T> => ({
    max_capacity,
    buffer: new Array<T>(max_capacity),
    head: 0,
    tail: 0,
    enqueueLock: Promise.resolve(),
    dequeueLock: Promise.resolve(),
  });

  const isEmpty = <T>(queue: ConcurrentQueue<T>): boolean => {
    return queue.head === queue.tail;
  };

  const isFull = <T>(queue: ConcurrentQueue<T>): boolean => {
    return (queue.tail + 1) % queue.max_capacity === queue.head;
  };

  const acquireLock = (lock: Lock): Promise<void> => {
    return lock.then(() => {
      return new Promise(resolve => {
        resolve();
      });
    });
  };

  const releaseLock = (lock: Lock): void => {
    lock.then(() => { return });
  };

  const enqueue = <T>(value: T, queue: ConcurrentQueue<T>): Promise<void> => {
    return acquireLock(queue.enqueueLock).then(() => {
      if (isFull(queue)) {
        throw new Error('Queue is full');
      }

      queue.buffer[queue.tail] = value;
      queue.tail = (queue.tail + 1) % queue.max_capacity;

      releaseLock(queue.enqueueLock);
    });
  };

  const dequeue = <T>(queue: ConcurrentQueue<T>): Promise<T> => {
    return acquireLock(queue.dequeueLock).then(() => {
      if (isEmpty(queue)) {
        throw new Error('Queue is empty');
      }

      const result = queue.buffer[queue.head];
      queue.head = (queue.head + 1) % queue.max_capacity;

      releaseLock(queue.dequeueLock);

      return result;
    });
  };

  const queue = newConcurrentQueue<number>(10);

  enqueue(1, queue)
    .then(() => enqueue(2, queue))
    .then(() => enqueue(3, queue))
    .then(() => console.log(queue))
    .catch(err => console.error(err.message));
}

