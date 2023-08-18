import { getRequest } from '../../common.apis'
import { AuthResponse } from './auth.types'

const loginWithGoogle = async (): Promise<AuthResponse | Error> => {
  try {
    const response = await getRequest<AuthResponse>('/auth2/authorize/google')

    return response
  } catch (error) {
    return error as Error
  }
}

export default loginWithGoogle