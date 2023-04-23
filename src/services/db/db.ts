import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

export type TDatabase = ReturnType<low>
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ files: [] }).write()

export default db
