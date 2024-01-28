'use client'
import React from 'react'
import Container from '@/components/templates/Container'
import { Input } from '@/components/atoms'

const Setting = () => {
  return (
    <Container>
      <div className="flex flex-col shadow-lg p-8 gap-4 min-h-screen w-full">
        <h2 className="text-2xl text-primary font-bold">Setting</h2>
        {/* <form className="w-full">
          <fieldset className="flex flex-col gap-4 p-4">
            <legend className="font-bold text-primary">
              Clinical Information
            </legend>
            <label className="text-base">
              Clinic Name
              <Input
                desing="primary"
                size="sm"
                id="name"
                value=""
                onChange={() => {}}
                placeholder=""
              />
            </label>
            <label className="text-base">
              Address
              <Input
                desing="primary"
                size="sm"
                id="name"
                value=""
                onChange={() => {}}
                placeholder=""
              />
            </label>
            <label className="text-base">
              Phone
              <Input
                desing="primary"
                size="sm"
                id="name"
                value=""
                onChange={() => {}}
                placeholder=""
              />
            </label>
          </fieldset>
        </form> */}
      </div>
    </Container>
  )
}

export default Setting
