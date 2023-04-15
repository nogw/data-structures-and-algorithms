#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct Queue {
  int head, tail;
  int capacity;
  int *array;
  int size;
} Queue;

Queue *make_queue(int capacity) {
  struct Queue *queue = malloc(sizeof(struct Queue));

  queue->head = queue->tail = -1;
  queue->capacity = capacity;
  queue->array = malloc(queue->capacity * sizeof(int));
  queue->size = 0;

  return queue;
}

unsigned is_empty(Queue *queue) { return (queue->size == 0); }

unsigned is_full(Queue *queue) { return (queue->size == queue->capacity); }

void enqueue(Queue *queue, int data) {
  if (is_full(queue))
    return;

  queue->tail = (queue->tail + 1) % queue->capacity;
  queue->array[queue->tail] = data;

  if (queue->head == -1)
    queue->head = queue->tail;

  queue->size += 1;
}

int dequeue(Queue *queue) {
  if (is_empty(queue))
    return INT_MIN;

  int data = queue->array[queue->head];

  if (queue->head == queue->tail) {
    queue->head = queue->tail = -1;
    queue->size = 0;
  } else {
    queue->head = (queue->head + 1) % queue->capacity;
    queue->size -= 1;
  }

  return data;
}

void print_queue(Queue *queue) {
  int *arr = queue->array;
  int size = queue->size;

  for (int k = 0; k < size; k++)
    printf("%d ", arr[k]);
}

int main(void) {
  Queue *queue = make_queue(16);

  enqueue(queue, 0);
  enqueue(queue, 1);
  enqueue(queue, 2);
  enqueue(queue, 3);
  enqueue(queue, 4);
  enqueue(queue, 5);
  enqueue(queue, 6);
  enqueue(queue, 7);

  printf("dequeued: %d\n", dequeue(queue));
  printf("dequeued: %d\n", dequeue(queue));

  print_queue(queue);

  return 0;
}
