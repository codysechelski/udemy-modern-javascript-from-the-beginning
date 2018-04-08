class GitHub {
  constructor() {
    this.client_id = '239f3d5ed3be9cf19aff';
    this.client_secret = '383518ff8af9b6159a05f8c50dccb7033979cccd';
  }

  async getUser(user) {
    try {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const profile = await profileResponse.json();
      return {
        profile
      }
    } catch (error) {
      
    }
  }
}