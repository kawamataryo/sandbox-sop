import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import * as path from 'path';
import { fileURLToPath } from 'url';

const app = new App()

app
.use(logger())
.get(
  '/',
  (_, res) => {
    res.status(200).sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'index.html'))
  }
)
.listen(3030, () => console.log(`Listening on http://localhost:3030`))
