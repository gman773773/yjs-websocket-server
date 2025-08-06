import { WebSocketServer } from 'ws'
import http from 'http'

export const setupWSConnection = (conn, req) => {
  conn.on('message', message => {
    console.log(`📨 Message from ${req.socket.remoteAddress}:`, 
message.toString())
  })

  conn.on('close', () => {
    console.log(`❌ Connection from ${req.socket.remoteAddress} closed`)
  })

  conn.send('🧠 Connection established with Yjs WebSocket Server')
}

const port = process.env.PORT || 10000

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('🧠 Yjs WebSocket server is running')
})

const wss = new WebSocketServer({ server })

wss.on('connection', (conn, req) => {
  console.log(`🧠 New connection from ${req.socket.remoteAddress}`)
  setupWSConnection(conn, req)
})

server.listen(port, () => {
  console.log(`✅ y-websocket server running on port ${port}`)
})

