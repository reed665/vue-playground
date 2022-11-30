import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { IAuthUser } from '../interfaces/IAuthUser'
import { newAuthUser } from '../helpers/newAuthUser'

const authUser = useLocalStorage('logged-in-user', newAuthUser())
const isLoggedIn = computed(() => !!authUser.value.username)
const showingLoginDialog = ref(false)

const showLoginDialog = () => {
  showingLoginDialog.value = true
}

const logIn = (data: IAuthUser) => {
  authUser.value = { ...data }

  showingLoginDialog.value = false
}

const logOut = () => {
  authUser.value = newAuthUser()
}

export const useAuth = () => {
  return {
    isLoggedIn,
    showingLoginDialog,
    authUser,
    showLoginDialog,
    logIn,
    logOut,
  }
}
