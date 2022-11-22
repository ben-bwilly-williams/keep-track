const server = require('../server')
const request = require('supertest')
const db = require('../db/trailsDb')
jest.mock('../db/trailsDb')

describe('get trails', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
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
      })
  })
})

// describe('add trail', () => {
//   test('add trail then return in json', () => {
//     db.addTrail.mockReturnValue(
//       Promise.resolve({ gradeIcon: 'grade-5.png', trailName: 'Ginger Cougar' })
//     )
//     return request(server)
//       .get('/api/v1/trails')
//       .then((res) => {
//         // console.log(res.body)
//         expect(res.body).toBeInTheDocument()
//       })
//   })
// })
