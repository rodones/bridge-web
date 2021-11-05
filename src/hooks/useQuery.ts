import { useLocation } from "react-router-dom";

function useQuery(): Record<string, string> {
  const { search } = useLocation();
  return Object.fromEntries(new URLSearchParams(search));
}

export default useQuery;
