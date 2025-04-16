import { useQuery } from "@tanstack/react-query"
import { getRepositoriesOfUser } from "../../api/repositories"
import {GitHubRepositoryItem} from "../../models/modelStack"
import RepositoryItem from "../RepositoryItem/RepositoryItem"

const Repositories = () => {
  const { data, isLoading, error } = useQuery<GitHubRepositoryItem[]>({
    queryKey: ['repos'],
    queryFn: () => getRepositoriesOfUser('JakeWharton'),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading repositories</div>

  return (
    <div>
      <h1>Repositories</h1>
      <div>
        {data?.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
  }
  
  export default Repositories
