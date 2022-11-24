const server = require('../server')
const request = require('supertest')
const db = require('../db/trailsDb')
jest.mock('../db/trailsDb')

jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('/GET/api/v1/trails', () => {
  test('return trails in json', () => {
    db.getTrails.mockReturnValue(
      Promise.resolve([
        { gradeIcon: 'grade-5.png', trailName: 'Moustache' },
        { gradeIcon: 'grade-4.png', trailName: 'Tombstone' },
      ])
    )
    return request(server)
      .get('/api/v1/trails')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.status).toBe(200)
      })
  })
  // test('returns 500 and logs error message when error', () => {
  //   db.getTrails.mockImplementation(() => Promise.reject('No trails for you'))
  //   return request(server)
  //     .get('/api/v1/trails')
  //     .then((res) => {
  //       expect(res.status).toBe(500)
  //       expect(console.error).toHaveBeenCalledWith('No trails for you')
  //     })
  // })
})
