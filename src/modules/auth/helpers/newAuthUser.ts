import type { IAuthUser } from '../interfaces/IAuthUser'

export const newAuthUser = (): IAuthUser => {
  return {
    username: '',
    userRoles: [],
  }
}
