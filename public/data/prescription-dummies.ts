const fecha = new Date()

export const headers = {
  es: {
    prescription: {
      title: 'Titulo',
      date: 'Fecha',
      description: 'Descripción',
      prescription: 'Receta',
    },
    exam: {
      title: 'Titulo',
      date: 'Fecha',
      description: 'Descripción',
      order: 'Orden',
      exam: 'Examen',
      download: 'Descargar',
    },
    oportunities: {
      title: 'Titulo',
      date: 'Fecha',
      description: 'Descripción',
      state: 'Estado',
      dowload: 'Descargar',
    },
  },
}

export const rows = {
  prescription: [
    {
      title: 'Fractura craneal',
      date: fecha.toLocaleDateString(),
      description: 'Accidente de automóvil, requirio 3 dias de hospitalizacion',
      prescription: '',
    },
    {
      title: 'Esguince tobillo',
      date: fecha.toLocaleDateString(),
      description: 'Esguince ocacionado por actividades deportivas',
      prescription: '',
    },
  ],
  exam: [
    {
      title: 'Fractura craneal',
      date: fecha.toLocaleDateString(),
      description: 'Accidente de automóvil, requirio 3 dias de hospitalizacion',
      order: '',
      exam: '',
      download: '',
    },
    {
      title: 'Esguince tobillo',
      date: fecha.toLocaleDateString(),
      description: 'Esguince ocacionado por actividades deportivas',
      order: '',
      exam: '',
      download: '',
    },
  ],
  oportunities: [
    {
      title: 'Fractura craneal',
      date: fecha.toLocaleDateString(),
      description: 'Dolor de estomago',
      state: '',
      download: '',
    },
    {
      title: 'Esguince tobillo',
      date: fecha.toLocaleDateString(),
      description: 'Dolor de cabeza',
      state: '',
      download: '',
    },
  ],
}
