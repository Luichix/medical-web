import { gql } from '@apollo/client'
import { client } from '@/contexts/GraphqlContext'

export class GraphQueries {
  async getPatient(uid: string) {
    // * --------------
    // * Graphql Query
    const GET_PATIENTS_DATA = gql`
      query GetPatients($uid: String!) {
        getPatients(uid: $uid) {
          uid
          _id
          registrationDate
          clinicalRecord {
            annotations {
              text
            }
            pathologicalHistory {
              date
              title
            }
            drugReaction {
              title
              description
            }
            bloodTransfusion {
              title
              description
              type
              level
              date
            }
            trauma {
              title
              description
              type
              level
              date
              fileURL
            }
            surgicalIntervention {
              title
              description
              date
            }
            heritageHistory {
              hierarchy
              name
              disease
              patient
              description
            }
            habits {
              title
              description
            }
          }
          patientInformation {
            basicInformation {
              birthDate
              ethnicity
              lastName
              maritalStatus
              name
              sex
            }
            ocupationAndLifeStyle {
              workingHours
              recreationTime
              doExercises
              exercicesFrequency
              typeofExcercices
            }
            sanitaryServices {
              description
            }
          }
        }
      }
    `
    // * ------------------------
    // * Graphql Query variables
    const patients_variables = {
      uid: uid,
    }

    // * ----------------------
    // * Request Graphql Query
    try {
      const { data } = await client.query({
        query: GET_PATIENTS_DATA,
        variables: patients_variables,
      })
      console.log(data)
      return {
        data: data,
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }
}
