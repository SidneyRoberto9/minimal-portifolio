import { useQuery } from '@tanstack/react-query';
import { getGithubRepoData } from '@/server/github';
import { PortfolioItem } from '@/components/PortfolioItem';
import { More } from '@/components/More';
import { Container } from '@/components/Container';

export const Portfolio = () => {
  const { data } = useQuery({
    queryKey: ["github", "repo"],
    queryFn: getGithubRepoData,
    initialData: [],
    gcTime: 60 * 60 * 24,
  })

  return (
    <Container>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <PortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              link={project.link}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
      <More />
    </Container>
  )
}
