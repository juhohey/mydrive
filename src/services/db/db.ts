import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const users = [
  { name: 'alice', id: 'alice' },
  { name: 'bob', id: 'bob' },
]

export type TDatabase = ReturnType<low>
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ files: [], users }).write()

export default db
