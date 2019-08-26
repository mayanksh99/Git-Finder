class GitHub {
    constructor() {
        this.client_id = 'b4da4598fd6f90e19dc6';
        this.client_secret = '687fe9b0cecb43e4277c3bf2d7988ac2a42fc9a4';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}