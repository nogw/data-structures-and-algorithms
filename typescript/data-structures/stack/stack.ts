namespace Stack {
  type Stack<T> = {
    max_capacity: number;
    values: T[];
  };

  const newStack = <T>(max_capacity: number): Stack<T> => ({
    max_capacity,
    values: [],
  });

  const length = <T>(stack: Stack<T>): number => {
    return stack.values.length;
  };

  const isEmpty = <T>(stack: Stack<T>): boolean => {
    return length(stack) === 0;
  };

  const push = <T>(value: T, stack: Stack<T>): Stack<T> => {
    if (stack.max_capacity == length(stack)) {
      return stack;
    }

    return { ...stack, values: [value, ...stack.values] };
  };

  const pop = <T>(stack: Stack<T>): Stack<T> => {
    if (isEmpty(stack)) {
      return stack;
    }

    const [, ...values] = stack.values;
    return { ...stack, values };
  };

  const peek = <T>(stack: Stack<T>): T | [] => {
    if (isEmpty(stack)) {
      return [];
    }

    const [value] = stack.values;
    return value;
  };
}
