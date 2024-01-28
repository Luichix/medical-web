import { Patient, TypeRecord, UpdatePatient } from '@/interfaces/patient'

export enum TypeRecordEnum {
  patient = 'patient',
  annotations = 'annotations',
  bloodTransfusion = 'blood-transfusion',
  drugReaction = 'drug-reaction',
  habits = 'habits',
  heritageHistory = 'heritage-history',
  pathologicalHistory = 'pathological-history',
  surgicalIntervention = 'surgical-intervention',
  trauma = 'trauma',
}

export enum UpdatePatientEnum {
  basicInformation = 'basic-information',
  occupationLifeStyle = 'occupation-life-style',
  sanitaryServices = 'sanitary-services',
}

class PAtientAPI {
  private static readonly baseURL = ''

  private static headers = {
    'Access-Control-Allow-Origin': '*',
    crossorigin: 'anonymous',
    'Content-Type': 'application/json',
  }

  private static createURL(
    type: TypeRecord | UpdatePatient,
    endpoint: string,
    params?: { [key: string]: string },
  ): string {
    let url = `${this.baseURL}/${type}/${endpoint}`

    if (params) {
      url += '?'
      for (const [key, value] of Object.entries(params)) {
        url += `${key}=${value}&`
      }
      url = url.slice(0, -1)
    }

    return url
  }

  private static validateObject(object: any, keys: string[]): boolean {
    for (const key of keys) {
      if (!(key in object)) {
        console.error(`Key ${key} is missing in the object.`)
        return false
      }
    }
    return true
  }

  static async getAllPatient(): Promise<Patient[]> {
    const response = await fetch(
      `${this.baseURL}/patient/get-patient?uid=${'84584479'}`,
    )
    return response.json()
  }

  static async getPatient(uid: string): Promise<Patient[]> {
    const response = await fetch(
      `${this.baseURL}/patient/get-patient?uid=${uid}`,
    )
    return response.json()
  }

  static async addPatient(record: Record<string, string>): Promise<void> {
    if (!this.validateObject(record, Object.keys(record))) {
      throw new Error('Objects is not valid')
    }
    const response = await fetch(`${this.baseURL}/patient/add-patient`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(record),
    })

    return response.json()
  }

  static async deletePatient(uid: string): Promise<void> {
    if (!uid) {
      throw new Error('uid and id_record are required')
    }
    const response = await fetch(
      `${this.baseURL}/patient/delete-patient?uid=${uid}`,
      {
        method: 'DELETE',
        headers: this.headers,
      },
    )

    if (!response.ok) {
      console.error(`Error al borrar la anotación: ${await response.text()}`)
    }

    return response.json()
  }

  static async updatePatient(
    type: UpdatePatient,
    uid: string,
    idRecord: string,
    record: Record<string, string>,
  ): Promise<void> {
    if (!uid || !idRecord) {
      throw new Error('uid and id_record are required')
    }

    if (!this.validateObject(record, Object.keys(record))) {
      throw new Error('Objects is not valid')
    }

    const response = await fetch(
      this.createURL(type, 'update-patient', {
        uid,
        id_record: idRecord,
      }),
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(record),
      },
    )
    return response.json()
  }

  static async getRecords<T>(type: TypeRecord): Promise<T[]> {
    const response = await fetch(`${this.baseURL}${type}/`)
    return response.json()
  }

  static async addRecord(
    uid: string,
    type: TypeRecord,
    record: Record<string, string>,
  ): Promise<void> {
    if (!this.validateObject(record, Object.keys(record))) {
      throw new Error('Objects is not valid')
    }

    const body = {
      identifier: {
        uid: uid,
        id_record: '',
      },
      record: {
        ...record,
        id: '',
      },
    }

    const response = await fetch(`${this.baseURL}/${type}/add-record/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    })

    return response.json()
  }

  static async deleteRecord(
    uid: string,
    idRecord: string,
    type: TypeRecord,
  ): Promise<void> {
    if (!uid || !idRecord) {
      throw new Error('uid and id_record are required')
    }
    const response = await fetch(
      this.createURL(type, 'delete-records', {
        uid,
        id_record: idRecord,
      }),
      {
        method: 'DELETE',
        headers: this.headers,
      },
    )

    if (!response.ok) {
      console.error(`Error al borrar la anotación: ${await response.text()}`)
    }

    return response.json()
  }

  static async updateRecord(
    uid: string,
    type: TypeRecord,
    idRecord: string,
    record: Record<string, string>,
  ): Promise<void> {
    if (!uid || !idRecord) {
      throw new Error('uid and id_record are required')
    }

    if (!this.validateObject(record, Object.keys(record))) {
      throw new Error('Objects is not valid')
    }

    const body = {
      identifier: {
        uid: uid,
        id_record: idRecord,
      },
      record,
    }

    const response = await fetch(`${this.baseURL}/${type}/update-records/`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body),
    })
    return response.json()
  }
}

export default PAtientAPI
