import { useLocalStorage } from '@vueuse/core'

const isLoggedIn = useLocalStorage('is-logged-in', false)

const logIn = () => {
  isLoggedIn.value = true
}

const logOut = () => {
  isLoggedIn.value = false
}

export const useAuth = () => {
  return {
    isLoggedIn,
    logIn,
    logOut,
  }
}
