#include <stdio.h>
#include <stdlib.h>

typedef struct BinaryTree {
  int data;
  struct BinaryTree *left;
  struct BinaryTree *right;
} Node;

Node *make_node(int data) {
  Node *node = (Node *)malloc(sizeof(Node));

  node->data = data;
  node->left = NULL;
  node->right = NULL;

  return node;
}

void insert_node(Node *tree, int data) {
  Node *node = make_node(data);

  if (tree == NULL) {
    tree = node;
    return;
  }

  Node *current = tree;
  Node *parent = NULL;

  for (;;) {
    parent = current;

    if (data <= parent->data) {
      current = current->left;

      if (current == NULL) {
        parent->left = node;
        return;
      }
    } else {
      current = current->right;

      if (current == NULL) {
        parent->right = node;
        return;
      }
    }
  }
}

void preOrderPrint(Node *node) {
  if (node == NULL)
    return;

  printf("%d ", node->data);

  preOrderPrint(node->left);
  preOrderPrint(node->right);
}

void inOrderPrint(Node *node) {
  if (node == NULL)
    return;

  inOrderPrint(node->left);

  printf("%d ", node->data);

  inOrderPrint(node->right);
}

void postOrderPrint(Node *node) {
  if (node == NULL)
    return;

  preOrderPrint(node->left);
  preOrderPrint(node->right);

  printf("%d ", node->data);
}

int main(void) {
  Node *tree = make_node(0);

  insert_node(tree, 2);
  insert_node(tree, 4);
  insert_node(tree, 12);
  insert_node(tree, 8);
  insert_node(tree, 22);
  insert_node(tree, 14);

  inOrderPrint(tree);
}
