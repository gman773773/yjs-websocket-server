import { setupWSConnection } from './src/y-websocket.js'
import * as http from 'http'
import { WebSocketServer } from 'ws'

const port = process.env.PORT || 10000
const server = http.createServer()

const wss = new WebSocketServer({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

server.listen(port)

console.log(`✅ y-websocket server running on port ${port}`)

