import { App } from '@tinyhttp/app'
import { cors } from '@tinyhttp/cors'
import { logger } from '@tinyhttp/logger'

const app = new App()

app
.use(logger())
.get('/api/no-cors/',
  (_, res) => {
    res.status(200).send(`success. ${Date.now()}`)
  })
.get('/api/simple-cors/', cors(),
  (_, res) => {
    res.status(200).send(`success. ${Date.now()}`)
  })
.post('/api/simple-cors/', cors(),
  (_, res) => {
    res.status(200).send(`success. ${Date.now()}`)
  })
.options('/api/complex-cors/', cors())
.delete('/api/complex-cors/', cors(),
  (_, res) => {
    res.status(200).send(`success. ${Date.now()}`)
  })
.listen(3031, () => console.log(`Listening on http://localhost:3031`))
