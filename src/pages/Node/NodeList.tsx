import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNodes } from "../../store/node/node.actions";

const NodeList = (): JSX.Element => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.node.data);

  useEffect(() => {
    dispatch(getNodes());
  }, []);

  return (
    <div>
      {nodes.map(({ id, key, createdAt, name }) => (
        <div key={id}>
          <Link
            to={`/nodes/${id}`}
          >{`${id} - ${name} - ${createdAt} - ${key}`}</Link>
        </div>
      ))}
    </div>
  );
};

export default NodeList;
