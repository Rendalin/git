const event = {
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' }
    ],
    message: 'text',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                text: `Hi ${name}. ${this.message}`,
                email
            }))
    }
}