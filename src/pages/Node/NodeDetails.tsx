import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Node } from "../../api";

export interface NodeDetailsProps {
  node: Node;
}

export const NodeDetails = ({ node }: NodeDetailsProps): JSX.Element => {
  return (
    <div>
      <div>{node.id}</div>
      <div>{node.name}</div>
      <div>{node.createdAt}</div>
      <div>{node.key}</div>
    </div>
  );
};

const NodeDetailsWrapper = (): JSX.Element => {
  const { id: idStr } = useParams<{ id: string }>();
  const id = Number(idStr);

  const node = useSelector((state) => state.node.data.find((n) => n.id === id));

  return node ? <NodeDetails node={node} /> : <p>no</p>;
};

export default NodeDetailsWrapper;
