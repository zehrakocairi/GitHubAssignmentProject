export const getRepositoriesOfUser = async ()  => {
    const url = ' https://api.github.com/users/JakeWharton/repos'
      const res = await fetch(`${url}`)
    if (!res.ok) throw new Error('Failed to fetch user info')
    return res.json()
  }