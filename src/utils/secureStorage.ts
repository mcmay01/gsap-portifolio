class SecureStorage {
  private getStorage() {
    return typeof window !== 'undefined' ? sessionStorage : null
  }

  async setToken(token: string): Promise<void> {
    this.getStorage()?.setItem('access_token', token)
  }

  async getToken(): Promise<string | null> {
    return this.getStorage()?.getItem('access_token') || null
  }

  async setRefreshToken(token: string): Promise<void> {
    this.getStorage()?.setItem('refresh_token', token)
  }

  async getRefreshToken(): Promise<string | null> {
    return this.getStorage()?.getItem('refresh_token') || null
  }

  async setUser(user: any): Promise<void> {
    this.getStorage()?.setItem('user', JSON.stringify(user))
  }

  async getUser(): Promise<any> {
    const user = this.getStorage()?.getItem('user')
    return user ? JSON.parse(user) : null
  }

  async clear() {
    this.getStorage()?.clear()
  }
}
export const secureStorage = new SecureStorage()
