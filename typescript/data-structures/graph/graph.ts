import { pipe } from "../../utils/pipe";

type Edge = {
  name: string;
  weight: number;
};

type Vertex = {
  name: string;
  nodes: Edge[];
  weight: number;
};

type Graph = {
  vertices: { [key: string]: Vertex };
};

const createVertex = (name: string, nodes: Edge[]): Vertex => ({
  name,
  nodes,
  weight: 1,
});

const createGraph = (): Graph => ({
  vertices: {},
});

const insert = (vertex: Vertex, graph: Graph): Graph => {
  graph.vertices[vertex.name] = vertex;
  return graph;
};

const findPointsOfShortestWay = (
  from: string,
  to: string,
  graph: Graph
): string[] => {
  const arrayWithVertex: string[] = [];
  let nextVertex: string = to;

  while (nextVertex !== from) {
    let minWeight: number = Number.MAX_VALUE;
    let minVertex = "";

    for (const { name, weight } of graph.vertices[nextVertex].nodes) {
      if (weight + graph.vertices[name].weight < minWeight) {
        minWeight = weight + graph.vertices[name].weight;
        minVertex = name;
      }
    }

    arrayWithVertex.push(minVertex);

    nextVertex = minVertex;
  }

  return arrayWithVertex;
};

const dijkstra = (from: string, to: string, graph: Graph): string[] => {
  const nodes: { [key: string]: number } = {};

  for (const { name } of Object.values(graph.vertices)) {
    if (name === from) {
      graph.vertices[name].weight = 0;
    } else {
      graph.vertices[name].weight = Number.MAX_VALUE;
    }
    nodes[name] = graph.vertices[name].weight;
  }

  while (Object.keys(nodes).length !== 0) {
    const visited: string[] = Object.keys(nodes).sort(
      (a, b) => graph.vertices[a].weight - graph.vertices[b].weight
    );

    const current: Vertex = graph.vertices[visited[0]];

    for (const { name, weight } of current.nodes) {
      const currentWeight: number = current.weight + weight;

      if (currentWeight < graph.vertices[name].weight) {
        graph.vertices[name].weight = currentWeight;
      }
    }

    delete nodes[visited[0]];
  }

  const toWeight: number = graph.vertices[to].weight;

  const arrayWithVertex: string[] = findPointsOfShortestWay(
    from,
    to,
    graph
  ).reverse();

  arrayWithVertex.push(to, toWeight.toString());

  return arrayWithVertex;
};

const gr = pipe(
  (d: Graph) =>
    insert(
      createVertex("A", [
        { name: "B", weight: 10 },
        { name: "D", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("B", [
        { name: "A", weight: 1 },
        { name: "C", weight: 1 },
        { name: "E", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("C", [
        { name: "B", weight: 1 },
        { name: "F", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("D", [
        { name: "A", weight: 1 },
        { name: "E", weight: 1 },
        { name: "G", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("E", [
        { name: "B", weight: 1 },
        { name: "D", weight: 1 },
        { name: "F", weight: 1 },
        { name: "H", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("F", [
        { name: "C", weight: 1 },
        { name: "E", weight: 1 },
        { name: "I", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("G", [
        { name: "D", weight: 1 },
        { name: "H", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("H", [
        { name: "E", weight: 1 },
        { name: "G", weight: 1 },
        { name: "I", weight: 1 },
      ]),
      d
    ),
  (d: Graph) =>
    insert(
      createVertex("I", [
        { name: "F", weight: 1 },
        { name: "H", weight: 1 },
      ]),
      d
    )
)(createGraph());

console.log(dijkstra("A", "G", gr));
