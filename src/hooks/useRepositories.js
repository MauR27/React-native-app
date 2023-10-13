import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const fetchRepositories = async () => {
    const response = await global.fetch(
      "http://192.168.1.128:5000/api/repositories"
    );
    const repositories = await response.json();
    setRepositories(repositories);
  };
  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories: repositoryNodes };
};

export default useRepositories;
