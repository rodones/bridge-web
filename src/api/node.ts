import { axios, Result } from "./base";

export type Node = {
  id: number;
  name: string;
  createdAt: string;
  key: string;
};

export const getNodes = (): Promise<Node[]> =>
  axios.get<Result<Node[]>>("/nodes").then((res) => res.data.data);

export const getNode = (id: number): Promise<Node> =>
  axios.get<Result<Node>>(`/nodes/${id}`).then((res) => res.data.data);

export const deleteNode = (id: number): Promise<Node> =>
  axios.delete<Result<Node>>(`/nodes/${id}`).then((res) => res.data.data);

export const updateNode = (
  id: number,
  properties: Pick<Node, "name">,
): Promise<Node> =>
  axios
    .put<Result<Node>>(`/nodes/${id}`, properties)
    .then((res) => res.data.data);

export const createNode = (properties: Pick<Node, "name">): Promise<Node> =>
  axios.post<Result<Node>>(`/nodes`, properties).then((res) => res.data.data);
