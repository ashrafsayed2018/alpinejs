document.addEventListener('alpine:init', () => {
  // Alpine.data
  Alpine.data('dropdown', () => {
    return {
      open: false,
      toggle() {
        this.open = !this.open
      },
    }
  })

  Alpine.store('currentUser', {
    username: 'admin',
    password: 'admin',
    posts: [
      {
        title: 'Post 1',
        description: 'Post 1 description',
        image: 'https://picsum.photos/200/300',
      },
      {
        title: 'Post 2',
        description: 'Post 2 description',
        image: 'https://picsum.photos/200/300',
      },
    ],
  })
})
