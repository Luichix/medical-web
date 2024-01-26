import { Appointment, GetAppointment, GetKanban } from '@/interfaces/reminder'

class EventAPI {
  private static readonly baseURL = ''

  private static headers = {
    'Access-Control-Allow-Origin': '*',
    crossorigin: 'anonymous',
    'Content-Type': 'application/json',
  }

  private static createURL(
    type: string,
    endpoint: string,
    params?: { [key: string]: string | boolean | Date }
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

  static async addAppointment({ appointment }: { appointment: Appointment }) {
    const response = await fetch(`${this.baseURL}/calendar/add-appointment/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(appointment),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })

    return response.json()
  }

  static async getAppointment({ params }: { params: GetAppointment }) {
    const response = await fetch(
      this.createURL('calendar', 'get-appointments', {
        client: params.clinic,
        inWeeks: true,
        startDate: '2023-02-05',
        endDate: '2023-04-09',
      })
    )
    return response.json()
  }

  static async deleteAppointment(idAppointment: string): Promise<void> {
    if (!idAppointment) {
      throw new Error('id appointment are required')
    }
    const response = await fetch(
      `${this.baseURL}/calendar/delete-appointments?id=${idAppointment}`,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )
    console.log(
      '🚀 ~ file: Event.ts:67 ~ EventAPI ~ deleteAppointment ~ response:',
      response
    )

    if (!response.ok) {
      console.error(`Error al borrar la anotación: ${await response.text()}`)
    }

    return response.json()
  }

  static async updateAppointment({
    idAppointment,
    appointment,
  }: {
    idAppointment: string
    appointment: Appointment
  }): Promise<void> {
    if (!idAppointment) {
      throw new Error('id appointment are required')
    }

    const response = await fetch(
      `${this.baseURL}/calendar/update-appointment?id=${idAppointment}`,
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(appointment),
      }
    )
    console.log('🚀 ~ file: Event.ts:94 ~ EventAPI ~ response:', response)
    return response.json()
  }

  static async addKanban({ appointment }: { appointment: Appointment }) {
    const response = await fetch(`${this.baseURL}/kanban/add-kanban/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(appointment),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
    console.log(
      '🚀 ~ file: Event.ts:26 ~ EventAPI ~ addAppointment ~ response:',
      response
    )

    return response.json()
  }

  static async getKanban({ params }: { params: GetKanban }) {
    const response = await fetch(`${this.baseURL}/kanban/get-kanban`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params),
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
    console.log(
      '🚀 ~ file: Event.ts:122 ~ EventAPI ~ getKanban ~ response:',
      response
    )

    return response.json()
  }

  static async deleteKanban(idAppointment: string): Promise<void> {
    if (!idAppointment) {
      throw new Error('id appointment are required')
    }
    const response = await fetch(
      `${this.baseURL}/kanban/delete-kanban?id=${idAppointment}`,
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

  static async updateKanban({
    idAppointment,
    appointment,
  }: {
    idAppointment: string
    appointment: Appointment
  }): Promise<void> {
    if (!idAppointment) {
      throw new Error('id appointment are required')
    }

    const response = await fetch(
      `${this.baseURL}/kanban/update-kanban?id=${idAppointment}`,
      {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(appointment),
      }
    )

    return response.json()
  }
}

export default EventAPI
