import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButtonImg(m.chat,`Njing Akwoakwo`, wm, res, [['Darkjoke','.darkjoke']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler
