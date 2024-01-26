export declare module ServiceJson {
  export interface Service {
    title: string
    content: string[]
    src: string
    button: string
  }

  export interface Language {
    title: string
    content: string
    services: Service[]
  }
}

export declare module ContactJson {
  export interface Contact {
    title: string
    name: string
    surname: string
    phone: string
    email: string
    address: string
    send: string
  }
}

export declare module AboutJson {
  export interface Service {
    title: string
    content: string
  }

  export interface About {
    question: string
    aboutUs: string
    services: Service[]
  }
}

export declare module HomeJson {
  export interface Home {
    title: string
    detail: string[]
    button: string
  }
}

export declare module NavbarJson {
  export interface Navbar {
    home: string
    about: string
    services: string
    contact: string
  }
}
