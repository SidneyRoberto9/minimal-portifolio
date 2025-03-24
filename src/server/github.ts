import axios from 'axios';

import { tryCatch } from '@/server/tryCatch';
import { IPortfolioItem } from '@/domain/portfolio';
import { GithubRepoResponse } from '@/domain/github';
import { portfolioData } from '@/data/portfolio.data';

export const getGithubRepoData = async (): Promise<IPortfolioItem[]> => {
  const result = await tryCatch(
    axios.get("https://api.github.com/users/sidneyroberto9/repos", {
      params: {
        sort: "created",
        direction: "desc",
        per_page: 6,
      },
    })
  )

  if (result.error) {
    console.error("Error fetching GitHub repository data:", result.error)
    return portfolioData
  }

  return filterGithubRepoData(result.data.data)
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
