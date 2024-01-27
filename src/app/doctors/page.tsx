import React from 'react'
import Container from '@/components/templates/Container'
import { IoGrid } from 'react-icons/io5'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const doctors = [
  {
    name: 'Dr. Smith',
    title: 'Cardiologist',
    stars: 4,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
  },
  {
    name: 'Dr. Garcia',
    title: 'Pediatrician',
    stars: 3,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
  },
  {
    name: 'Dr. Brown',
    title: 'Dermatologist',
    stars: 4,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
  },
  {
    name: 'Dr. Taylor',
    title: 'Neurologist',
    stars: 5,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
  },
  {
    name: 'Dr. Williams',
    title: 'Orthopedic Surgeon',
    stars: 4,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
  },
  {
    name: 'Dr. Herradora',
    title: 'Internal Medicine Specialist',
    stars: 3,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png',
  },
  {
    name: 'Dr. Chavez',
    title: 'Oncology Specialist',
    stars: 4,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/11.png',
  },
  {
    name: 'Dr. Jhonson',
    title: 'Neurologist',
    stars: 5,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  },
  {
    name: 'Dr. Palacios',
    title: 'Orthopedic Surgeon',
    stars: 4,
    picture:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  },
]

const Doctors = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 w-full h-full  p-4 rounded-lg shadow-lg ">
        <h2 className="text-primary font-bold text-xl">Doctors</h2>
        <div className="flex flex-row w-full justify-between items-center">
          <button className="bg-primary text-secondary font-bold p-2 rounded-md">
            + Add Doctor
          </button>
          <div className="flex flex-row">
            <button>
              <IoGrid className="text-primary text-2xl" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 bg-secondary rounded-lg p-8 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col items-center  bg-white rounded-lg shadow-lg p-4 gap-4"
            >
              <div className="flex flex-col items-center">
                <figure className="w-16 h-16 rounded-full  border-2  border-primary">
                  <Image
                    className="rounded-full"
                    src={doctor.picture}
                    alt="doctor's picture"
                    width={64}
                    height={64}
                  />
                </figure>
                <span className="text-base font-bold text-xl">
                  {doctor.name}
                </span>
                <span className="text-base ">{doctor.title}</span>
              </div>
              <div className="flex flex-row gap-1">
                {Array(doctor.stars)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-tertiary" />
                  ))}
              </div>
              <button className="bg-primary p-2 text-secondary font-bold rounded-md">
                Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Doctors
