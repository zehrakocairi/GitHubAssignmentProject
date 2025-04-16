export interface GitHubUser {
    login: string
    id: number
  }
  
export interface GitHubRepoItem {
    id: number
    name: string
    description: string | null
    owner: GitHubUser
  }

  export interface GitHubRepoCommit {
    sha: string
    commit: {
      author: {
        name: string
        date: string 
      }
      message: string
    } 
  }
  
