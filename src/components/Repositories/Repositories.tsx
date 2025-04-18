import { useQuery } from '@tanstack/react-query';
import { getRepositoriesOfUser } from '../../api/repositories';
import { GitHubRepoItem } from '../../models/modelStack';
import RepositoryItem from '../RepositoryItem/RepositoryItem';

type Props = {
  username?: string;
  queryFn?: () => Promise<GitHubRepoItem[]>;
};

const Repositories = ({ username = 'JakeWharton', queryFn }: Props) => {
  const { data, isLoading, error } = useQuery<GitHubRepoItem[]>({
    queryKey: ['repos', username],
    queryFn: queryFn || (() => getRepositoriesOfUser(username)),
  });
  
  if (error) return <div>Error loading repositories</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Repositories</h1>
      <div>
        {data?.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
