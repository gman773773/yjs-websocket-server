import { WebSocketServer } from './src/bin/utils.js'

const port = process.env.PORT || 10000
console.log(`✅ y-websocket server running on port ${port}`)
WebSocketServer({ port })

