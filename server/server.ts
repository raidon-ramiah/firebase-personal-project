import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const server = express()

server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy', 'kia ora', 'konnichiwa']
  const index = Math.floor(Math.random() * greetings.length)
  res.json({ greeting: greetings[index] })
})

server.use(express.json())
server.use(cors('*' as CorsOptions))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
