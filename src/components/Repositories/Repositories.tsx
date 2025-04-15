import { useQuery } from "@tanstack/react-query"
import { getRepositoriesOfUser } from "../../api/repositories"

const Repositories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['repositories'],
    queryFn: () => getRepositoriesOfUser(),
  })
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading repositories</div>

    return (
      <div>
        <div>
        <h1>Repositories</h1>
        </div>
        <div>
          {data.map((repo:any) => (
            <div key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Repositories
