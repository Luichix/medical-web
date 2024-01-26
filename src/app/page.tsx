import React from 'react'
import { Container } from '@/components/templates/Container'
import {
  FaBell,
  FaEnvelope,
  FaEllipsisV,
  FaArrowDown,
  FaArrowUp,
  FaProcedures,
  FaHospital,
  FaBed,
  FaSyringe,
  FaSyncAlt,
  FaSlidersH,
} from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import CircleChart from '@/components/organisms/CircleChart'
import { LineChart } from '@/components/organisms/LineChart'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <div className="flex w-full  bg-gradient-to-br from-blue-100 to-blue-200">
          <div className="container mx-auto  p-8 bg-white rounded-lg shadow-lg">
            <div className="flex">
              {/* <!-- Content --> */}
              <div className="w-4/5 p-4">
                <div className="flex justify-between">
                  <div className="w-1/2 ">
                    <input
                      className="p-2 border rounded w-full"
                      placeholder="Buscar aqui..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaBell className="text-yellow-500" />
                    <FaEnvelope className="text-blue-400" />
                    <FaEllipsisV className="text-gray-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-4 mb-6">Tablero</h2>
                {/* <!-- Stats Grid --> */}
                <div className="flex flex-col lg:grid md:grid-cols-3 gap-4 mb-6 ">
                  {/* <!-- Doctors --> */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-sky-600">Doctores</h3>
                        <p className="text-xl font-bold">70</p>
                        <p className="text-sm text-gray-600">
                          Total de Doctores
                        </p>
                      </div>
                      <div className="text-sky-600">
                        <FaUserMd size={48} />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-xs flex gap-1 items-center">
                        <FaArrowUp />
                        45
                      </div>
                      <div className="text-xs flex gap-1 items-center">
                        <FaArrowDown />
                        25
                      </div>
                    </div>
                  </div>
                  {/* <!-- Patients --> */}
                  <div className="bg-white p-6 shadow-lg rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-purple-600">
                          Pacientes
                        </h3>
                        <p className="text-xl font-bold">570</p>
                        <p className="text-sm text-gray-600">
                          Total de Pacientes
                        </p>
                      </div>
                      <div className="text-purple-600">
                        <FaProcedures size={48} />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-xs flex gap-1 items-center">
                        <FaArrowUp />
                        432
                      </div>
                      <div className="text-xs flex gap-1 items-center">
                        <FaArrowDown /> 138
                      </div>
                    </div>
                  </div>
                  {/* <!-- Balance --> */}
                  <div className="col-start-3 row-start-1 bg-white p-6 shadow-lg rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-xl text-red-600">
                        Balance
                      </h3>
                      <span className="text-xs text-gray-600">
                        Ultimos 7 dias
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-lg font-bold text-green-600">
                          C$ 1200.00
                        </p>
                        <p className="text-sm text-gray-600">Ingresos</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-red-600">
                          C$ 500.00
                        </p>
                        <p className="text-sm text-gray-600">Egresos</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- More Stats --> */}

                  {/* <!-- Hospital Survey --> */}
                  <div className="col-span-2 bg-white p-6 shadow-lg rounded-lg flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-blue-800">
                        Estadisticas Hospitalarias
                      </h2>
                    </div>
                    <div className="flex flex-col sm:grid h-full items-center grid-cols-3 gap-4 ">
                      <div className="flex flex-col items-center text-center">
                        <FaHospital size={48} className="text-blue-600" />
                        <p className="text-xl font-bold">200</p>
                        <p className="text-sm text-gray-600">Personal Total</p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <FaBed size={48} className="text-teal-600" />
                        <p className="text-xl font-bold">836</p>
                        <p className="text-sm text-gray-600">Número de Camas</p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <FaSyringe size={48} className=" text-green-600" />
                        <p className="text-xl font-bold">120</p>
                        <p className="text-sm text-gray-600">
                          Cirugías Diarias
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Graphs and Reviews --> */}
                  {/* <!-- Analytics Overview --> */}
                  <div className="sr-only sm:not-sr-only col-span-2 bg-white p-6 shadow-lg rounded-lg">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-green-600 mb-2">
                        Análisis General
                      </h2>
                      {/* <!-- Navigation for Weekly, Monthly, Yearly --> */}
                      <div className="flex justify-between items-center mt-3">
                        <div>
                          <button className="text-sm bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2">
                            Semanal
                          </button>
                          <button className="text-sm bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-2">
                            Mensual
                          </button>
                          <button className="text-sm bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                            Anual
                          </button>
                        </div>
                        <div>
                          <button className="text-gray-500">
                            <FaSlidersH />
                          </button>
                          <button className="text-green-500 ml-2">
                            <FaSyncAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Chart placeholder --> */}
                    <LineChart />
                  </div>
                  {/* <!-- Reviews --> */}

                  <div className="row-start-2 col-start-3 row-span-2 max-w-sm mx-auto ">
                    {/* <!-- Reviews Section --> */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-800">
                          Revisiones
                        </h2>
                        <FaSyncAlt className=" text-green-500" />
                      </div>
                      {/* <!-- Placeholder for the circular progress chart --> */}
                      {/* <!-- Circular progress chart --> */}
                      <div style={{ position: 'relative' }}>
                        <CircleChart />
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <span className="text-lg font-bold text-blue-600">
                            Standard
                          </span>
                          <span className="text-lg font-bold text-blue-600">
                            100%
                          </span>
                        </div>
                      </div>

                      {/* <!-- Follow up by department Section --> */}
                      <div className="py-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Seguimiento por Departamento
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-5">
                            <span className="text-sm font-medium col-span-2">
                              Laboratorio
                            </span>
                            <div className="col-span-4 progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: '70%' }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">
                              70%
                            </span>
                          </div>
                          <div className="grid grid-cols-5">
                            <span className="text-sm font-medium col-span-2">
                              Cirugía
                            </span>
                            <div className="col-span-4 progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">
                              60%
                            </span>
                          </div>
                          <div className="grid grid-cols-5">
                            <span className="text-sm font-medium col-span-2">
                              Medicina Interna
                            </span>
                            <div className="col-span-4 progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: '80%' }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">
                              80%
                            </span>
                          </div>
                          <div className="grid grid-cols-5">
                            <span className="text-sm font-medium col-span-2">
                              Ortopedia
                            </span>
                            <div className="col-span-4 progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: '65%' }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">
                              65%
                            </span>
                          </div>
                          <div className="grid grid-cols-5">
                            <span className="text-sm font-medium col-span-2">
                              Pediatria
                            </span>
                            <div className="col-span-4 progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: '50%' }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium ml-2">
                              50%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Patient Satisfaction Section --> */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Satisfacción de Pacientes
                        </h3>
                        <span className="text-sm text-gray-500">
                          (% ultimo mes)
                        </span>
                        <div className="bg-gray-300 h-8 rounded-full mt-2">
                          <div
                            className="bg-teal-500 h-8 rounded-full text-right flex items-center justify-end"
                            style={{ width: '80%' }}
                          >
                            <span className="text-center text-white px-2">
                              80%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
