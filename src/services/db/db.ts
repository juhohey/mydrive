import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

export type TDatabase = {}
const adapter = new FileSync('db.json')
const db = low(adapter)

export default db
