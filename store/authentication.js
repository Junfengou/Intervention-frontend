export const state = () => ({
  user: null,
  word: 'word',
  message: '',
})

export const mutations = {
  checkUserLoggedIn(state, payload) {
    state.user = payload
    if (payload?.message === 'Unauthorized') {
      state.message = 'Please log in'
    } else {
      state.message = 'Successfully logged in'
    }
    console.log('payload: ', payload)
    // console.log(state.user)
    // console.log(state.message)
  },
}

export const actions = {
  // check if the current user is logged in by hitting this route
  async checkUserLoggedIn({ commit }) {
    try {
      const res = await fetch('http://localhost:7000/users/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      const content = await res.json()
      commit('checkUserLoggedIn', content)
    } catch (e) {
      console.error(e)
    }
  },

  // work
  async logUserOut() {
    try {
      await fetch('http://localhost:7000/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      await this.$router.push('/signin')
    } catch (e) {
      console.error(e)
    }
  },
}

export const getters = {
  //   getWord: (state) => state.thisWord,
  getUser: (state) => state.user?.name,
  getMsg: (state) => state.message,
}
