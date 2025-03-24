import axios from "axios"

import { portfolioData } from "@/data/portfolio.data"
import { GithubRepoResponse } from "@/interfaces/typesGithub"
import { IPortfolioItem } from "@/interfaces/typesPortfolio"

export const getGithubRepoData = async (): Promise<IPortfolioItem[]> => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/sidneyroberto9/repos?sort=created&direction=desc&per_page=20"
    )
    return filterGithubRepoData(data)
  } catch (error) {
    console.error("Error fetching GitHub repository data:", error)

    return portfolioData
  }
}

const filterGithubRepoData = (data: GithubRepoResponse[]) => {
  return data
    .filter((repo) => repo.topics.length > 0)
    .slice(0, 6)
    .map(
      (repo) =>
        ({
          title: repo.name,
          description: repo.description,
          stack: repo.topics,
          imgUrl: formatGithubProjectImageLink(repo.html_url),
          link: repo.homepage,
        }) as IPortfolioItem
    )
}

const formatGithubProjectImageLink = (url: string) => {
  return url
    .replace("github.com", "raw.githubusercontent.com")
    .concat("/refs/heads/master/.github/1440x1080.png")
}
