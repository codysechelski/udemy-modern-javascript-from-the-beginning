class GitHub {
  constructor() {
    this.client_id = '239f3d5ed3be9cf19aff';
    this.client_secret = '383518ff8af9b6159a05f8c50dccb7033979cccd';
    this.repost_count = 10;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {
    try {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repost_count}&sort-${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
      const profile = await profileResponse.json();
      const repos = await reposResponse.json();
      return {
        profile,
        repos
      }
    } catch (error) {
      
    }
  }
}