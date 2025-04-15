const GITHUB_BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL

export const getUserInfo = async (username:string )  => {
  // const url = `${GITHUB_BASE_URL}/users/${username}`
  const url = 'https://api.github.com/users/JakeWharton'
    const res = await fetch(`${url}`)
  if (!res.ok) throw new Error('Failed to fetch user info')
  return res.json()
}