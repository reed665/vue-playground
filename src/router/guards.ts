import type { NavigationGuard } from 'vue-router'
import { useAuth } from '@/modules/auth/composables'

export const userIsLoggedInGuard: NavigationGuard = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn.value)
    return false
}
