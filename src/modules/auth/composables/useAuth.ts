import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const isLoggedIn = useLocalStorage('is-logged-in', false)
const showingLoginDialog = ref(false)

const showLoginDialog = () => {
  showingLoginDialog.value = true
}

const logIn = () => {
  showingLoginDialog.value = false
  isLoggedIn.value = true
}

const logOut = () => {
  isLoggedIn.value = false
}

export const useAuth = () => {
  return {
    isLoggedIn,
    showingLoginDialog,
    showLoginDialog,
    logIn,
    logOut,
  }
}
