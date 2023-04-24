import formidable from 'formidable'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { saveFiles } from '../../../services/file/db'
import context from '../../../services/context/context'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user, db } = await context(req)

  switch (req.method) {
    case 'POST':
      try {
        const parsedFiles = await parseForm(req)

        const files = parsedFiles.map((file) => ({
          filepath: file.filepath,
          name: file.originalFilename || 'file',
          extension: path.extname(file.newFilename).toLowerCase(),
          id: path.basename(file.newFilename, path.extname(file.newFilename)),
          owner: user.name,
          userPermission: {},
          orgPermission: {},
        }))

        await saveFiles(files, db)

        return res.json(files)
      } catch (error) {
        return res.status(400).send(error)
      }

    default:
      return res.status(405)
  }
}

const parseForm = (req: NextApiRequest) =>
  new Promise<Array<formidable.File>>((resole, reject) => {
    const form = formidable({
      uploadDir: path.join('./', 'uploads'),
      keepExtensions: true,
    })

    form.parse(req, (err, _, files) => {
      if (err) {
        return reject(err)
      }
      return resole(Object.values(files))
    })
  })

export const config = {
  api: {
    bodyParser: false,
  },
}
