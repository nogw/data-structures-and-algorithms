#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
  int data;
  struct Node *next;
} Node;

void push_end(Node **head, int data) {
  Node *current = *head;

  while (current->next != NULL) {
    current = current->next;
  }

  current->next = (Node *)(malloc(sizeof(Node)));
  current->next->data = data;
  current->next->next = NULL;
}

void push_top(Node **head, int data) {
  Node *current = (Node *)(malloc(sizeof(Node)));

  current->data = data;
  current->next = *head;

  *head = current;
}

Node *split_at(Node **head, int data) {
  Node *current = *head;

  while (current != NULL && current->data != data) {
    current = current->next;
  };

  if (current == NULL) {
    return NULL;
  };

  return current;
}

void reverse_list(Node **head) {
  Node *prev = NULL;
  Node *curr = *head;
  Node *next;

  while (curr != NULL) {
    next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
  }

  *head = prev;
}

void delete_node(Node **head, int data) {
  if (*head == NULL) {
    return;
  }

  Node *curr = *head;
  Node *prev = NULL;

  while (curr != NULL) {
    if (curr->data == data) {
      if (prev != NULL) {
        prev->next = curr->next;
      } else {
        *head = curr->next;
      }

      free(curr);
      return;
    }

    prev = curr;
    curr = curr->next;
  }
}

void delete_after(Node **head, int data) {
  if (head == NULL) {
    return;
  }

  Node *curr = *head;

  while (curr->next != NULL) {
    if (curr->data == data) {
      Node *next = curr->next;
      curr->next = next->next;
      free(next);
      return;
    }

    curr = curr->next;
  }
}

void print_list(Node *head) {
  Node *current = head;

  if (head == NULL)
    printf("<empty>");

  for (; current != NULL; current = current->next) {
    printf("%d->", current->data);

    if (current->next == NULL)
      printf("NULL\n");
  }
}

int sizeof_list(Node *head) {
  if (head == NULL) {
    return 0;
  }

  Node *current = head;
  unsigned int length = 1;

  while (current->next != NULL) {
    length += 1;
    current = current->next;
  }

  return length;
}

int main(void) {
  Node *list = NULL;

  push_top(&list, 1);
  push_top(&list, 0);
  push_top(&list, 4);
  push_end(&list, 2);
  push_end(&list, 3);
  push_end(&list, 5);

  delete_node(&list, 4);
  delete_after(&list, 3);

  print_list(list);
}
