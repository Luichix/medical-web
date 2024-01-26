import { Consultation } from '@/interfaces/consult'

class ConsultAPI {
  private static readonly baseURL = ''

  private static headers = {
    'Access-Control-Allow-Origin': '*',
    crossorigin: 'anonymous',
    'Content-Type': 'application/json',
  }

  static async getConsultRecord(uid: string, ideRecord: string): Promise<[]> {
    const response = await fetch(
      `${this.baseURL}/consultation/get-record?uid=${uid}&id=${ideRecord}`
    )
    return response.json()
  }

  static async getConsultSummary(client: string) {
    const response = await fetch(
      `${this.baseURL}/consultation/get-summary?client=${client}`
    )
    return response.json()
  }

  static async addConsutRecord({
    consultRecord,
  }: {
    consultRecord: Consultation
  }) {
    console.log(
      '🚀 ~ file: Consult.ts:32 ~ ConsultAPI ~ consultRecord:',
      consultRecord
    )
    const response = await fetch(`${this.baseURL}/consultation/add-record/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(consultRecord),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })

    console.log('🚀 ~ file: Consult.ts:48 ~ ConsultAPI ~ response:', response)

    return response.json()
  }

  static async deleteConsultRecord(idRecord: string): Promise<void> {
    if (!idRecord) {
      throw new Error('idRecord_record are required')
    }
    const response = await fetch(
      `${this.baseURL}/consultation/delete-record?id=${idRecord}`,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )

    if (!response.ok) {
      console.error(`Error al borrar la anotación: ${await response.text()}`)
    }

    return response.json()
  }

  static async uploadFileLaboratory({
    dpi,
    file,
  }: {
    dpi: string
    file: File
  }) {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(
      `${this.baseURL}/laboratory-order/upload-file?dpi=${dpi}`,
      {
        method: 'POST',
        headers: {
          ...this.headers,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
      }
    )

    console.log('🚀 ~ file: Consult.ts:48 ~ ConsultAPI ~ response:', response)

    return response.json()
  }

  static async getFileLaboratory(path: string) {
    const response = await fetch(
      `${this.baseURL}/laboratory-order/get-file?path=${path}`,
      {
        method: 'POST',
        headers: this.headers,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
      }
    )

    return response.json()
  }
}

export default ConsultAPI
