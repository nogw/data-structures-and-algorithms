#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
  int data;
  struct Node *next;
  struct Node *prev;
} Node;

typedef struct List {
  struct Node *head;
  struct Node *tail;
} List;

Node *make_node(int data) {
  Node *node;

  node = malloc(sizeof(Node));
  node->data = data;
  node->next = NULL;
  node->prev = NULL;

  return node;
}

List *make_list() {
  List *list;

  list = malloc(sizeof(List));
  list->head = NULL;
  list->tail = NULL;

  return list;
}

void insert_head(List *list, int data) {
  Node *node = make_node(data);

  if (list->head == NULL) {
    list->head = node;
    list->tail = node;
    return;
  }

  node->next = list->head;
  list->head->prev = node;
  list->head = node;
}

void insert_tail(List *list, int data) {
  Node *node = make_node(data);

  if (list->head == NULL) {
    list->head = node;
    list->tail = node;
    return;
  }

  list->tail->next = node;
  node->prev = list->tail;
  list->tail = node;
}

unsigned is_empty(List *list) {
  return (list->head == NULL) && (list->tail == NULL);
}

void forward_print(List *list) {
  Node *node = list->head;

  for (;;) {
    if (is_empty(list))
      break;

    printf("%d->", node->data);

    if (node == list->tail)
      break;

    node = node->next;
  }

  printf("NULL\n");
}

void backward_print(List *list) {
  Node *node = list->head;

  for (;;) {
    if (is_empty(list))
      break;

    printf("%d->", node->data);

    if (node->prev == NULL)
      break;

    node = node->prev;
  }

  printf("NULL\n");
}

int main(void) {
  List *list = make_list();

  insert_head(list, 1);
  insert_head(list, 2);
  insert_head(list, 3);

  insert_tail(list, 4);
  insert_tail(list, 5);
  insert_tail(list, 6);

  forward_print(list);

  return 0;
}
