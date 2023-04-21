class Auth {
  async login(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    console.log('response', response)
    return response.json() // parses JSON response into native JavaScript objects
  }

  async logout(url = '') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '',
      },
    })
    console.log('response', response)
    return response.json() // parses JSON response into native JavaScript objects
  }

  async acceptConsent(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '',
      },
      body: JSON.stringify(data),
    })
    return response.json() // parses JSON response into native JavaScript objects
  }

  /**
 *
 * headers: new Headers({
        'Authorization': 'Basic '+btoa('username:password'),
        'Content-Type': 'application/x-www-form-urlencoded'
    }),


    */

  async getInfo(token: any) {
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const urlencoded = new URLSearchParams()
    urlencoded.append('token', token)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      // body: urlencoded,
    }
    const response = await fetch('/me', requestOptions)
    return response.json()
  }

  async getToken(url = '', code: any) {
    const urlencoded = new URLSearchParams()
    console.log(code)
    urlencoded.append('code', code)
    urlencoded.append('client_id', 'medihub')
    urlencoded.append('client_secret', '')
    urlencoded.append('grant_type', 'authorization_code')
    urlencoded.append('redirect_uri', '')
    urlencoded.append('code_verifier', '')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlencoded,
      redirect: 'follow',
    })
    return response.json()
  }
}

export default Auth
