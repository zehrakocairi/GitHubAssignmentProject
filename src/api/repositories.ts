export const getRepositoriesOfUser = async (username:string)  => {
  const url = `https://api.github.com/users/${username}/repos`
  const res = await fetch(`${url}`)
  if (!res.ok) throw new Error('Failed to fetch user info')
  return res.json()
}

export const getRepoDetail = async (owner:string, name:string) => {
  const url = `https://api.github.com/repos/${owner}/${name}`
  const res = await fetch(`${url}`)
  if (!res.ok) throw new Error('Failed to fetch user info')
  return res.json()
}

export const getRepoCommitsDetail = async (owner:string, name:string) => {
  const url = `https://api.github.com/repos/${owner}/${name}/commits`
  const res = await fetch(`${url}`)
  if (!res.ok) throw new Error('Failed to fetch user info')
  return res.json()
}