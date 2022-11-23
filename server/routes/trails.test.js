const server = require('../server')
const request = require('supertest')
const db = require('../db/trailsDb')
jest.mock('../db/trailsDb')

jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get trails', () => {
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
