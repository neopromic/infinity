import { auth } from '@/services/database/firebase'
import {
  type User as IUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  type AuthProvider,
  type UserCredential,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { writeUserData } from '@/services/database/utils/writeUserData'

type User = IUser | null
type ContextState = {
  user: User
  login: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signUpWithProvider: (provider: AuthProvider) => Promise<UserCredential>
  logout: () => void
}

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined)

export const FirebaseAuthProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const userCookies = Cookies.get('user')
    return userCookies ? JSON.parse(userCookies) : null
  })

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      const userToken = await user.getIdToken()

      Cookies.set('user', JSON.stringify(user), {
        expires: 7,
        sameSite: 'None',
      })
      Cookies.set('user_token', userToken, { expires: 7, sameSite: 'None' })

      setUser(user)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      const userToken = await user.getIdToken()

      if (user) {
        const userUID = user.uid
        const userEmail = user.email as string
        const userName = 'John Doe'

        await writeUserData({
          userId: userUID,
          email: userEmail,
          name: userName,
        })

        Cookies.set('user', JSON.stringify(user), {
          expires: 7,
          sameSite: 'None',
          secure: true,
        })
        Cookies.set('user_token', userToken, {
          expires: 7,
          sameSite: 'None',
          secure: true,
        })

        setUser(user)
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error)
    }
  }

  const logout = async () => {
    try {
      await auth.signOut()
      Cookies.remove('user')
      Cookies.remove('user_token')

      setUser(null)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  const signUpWithProvider = async (provider: AuthProvider) => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const userToken = await user.getIdToken()

      const userUID = user.uid
      const userEmail = user.email as string
      const userName = user.displayName || 'John Doe'

      await writeUserData({
        userId: userUID,
        email: userEmail,
        name: userName,
      })

      Cookies.set('user', JSON.stringify(user), {
        expires: 7,
        sameSite: 'None',
        secure: true,
      })
      Cookies.set('user_token', userToken, {
        expires: 7,
        sameSite: 'None',
        secure: true,
      })

      setUser(user)

      return result
    } catch (error) {
      console.error('Erro ao autenticar com provedor:', error)
      throw error // Retornar o erro para que o frontend possa lidar
    }
  }

  const value = { user, login, logout, signUp, signUpWithProvider }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userToken = await user.getIdToken()
        Cookies.set('user', JSON.stringify(user), {
          expires: 7,
          sameSite: 'None',
          secure: true,
        })
        Cookies.set('user_token', userToken, {
          expires: 7,
          sameSite: 'None',
          secure: true,
        })
      }
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

// Hook para utilizar o contexto de autenticação
export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext)

  if (context === undefined) {
    throw new Error('Yo! Parece que não temos uma autenticação válida!')
  }

  return context
}
