import { useState, useEffect } from "react";
import { Github, Star, GitFork, Eye, TrendingUp } from "lucide-react";

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  total_stars: number;
  total_forks: number;
}

export const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // GitHub API public access
        const response = await fetch("https://api.github.com/users/eminemahjoub");
        
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }

        const userData = await response.json();
        
        // Fetch repos for additional stats
        const reposResponse = await fetch("https://api.github.com/users/eminemahjoub/repos?per_page=100&sort=updated");
        const repos = reposResponse.ok ? await reposResponse.json() : [];
        
        const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
        
        setStats({
          followers: userData.followers || 0,
          following: userData.following || 0,
          public_repos: userData.public_repos || 0,
          total_stars: totalStars,
          total_forks: totalForks,
        });
        
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load stats");
        setLoading(false);
      }
    };

    fetchGitHubStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchGitHubStats, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#2d2d2d] rounded-lg p-6 border border-orange-500/20">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="bg-[#2d2d2d] rounded-lg p-6 border border-red-500/20">
        <p className="text-red-400 text-sm">Failed to load GitHub statistics</p>
        <p className="text-gray-400 text-xs mt-2">Please check your internet connection</p>
      </div>
    );
  }

  const statItems = [
    {
      label: "Repositories",
      value: stats.public_repos,
      icon: Github,
      color: "text-blue-400",
    },
    {
      label: "Stars",
      value: stats.total_stars,
      icon: Star,
      color: "text-yellow-400",
    },
    {
      label: "Forks",
      value: stats.total_forks,
      icon: GitFork,
      color: "text-green-400",
    },
    {
      label: "Followers",
      value: stats.followers,
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ];

  return (
    <div className="bg-[#2d2d2d] rounded-lg p-6 border border-orange-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Github className="w-5 h-5 text-orange-400" />
        <h3 className="text-white font-bold text-lg">GitHub Statistics</h3>
        <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Live
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-gray-400 text-xs">{item.label}</span>
              </div>
              <div className={`text-2xl font-bold ${item.color}`}>
                {item.value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <a
          href="https://github.com/eminemahjoub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-2 transition-colors"
        >
          <Github className="w-4 h-4" />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

