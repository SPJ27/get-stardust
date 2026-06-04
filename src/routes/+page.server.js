import { WebClient } from '@slack/web-api'
import { SLACK_BOT_TOKEN } from '$env/static/private'

const CHANNEL_ID = 'C0B8K3MC9LG'

export const actions = {
  default: async ({ request }) => {
    const web = new WebClient(SLACK_BOT_TOKEN)
    const formData = await request.formData()
    const user_id = formData.get('user_id')

    try {
      await web.conversations.invite({
        channel: CHANNEL_ID,
        users: user_id
      })
      console.log(`User ${user_id} invited to channel ${CHANNEL_ID}`)
    } catch (error) {
      console.error('Error inviting user to channel:', error)
    }

    try {
      await web.chat.postMessage({
        channel: CHANNEL_ID,
        text: `<@${user_id}> has been banned permanently for trying to get free stardusts... be good kids ^^ (ofc as a joke)`
      })
      return { success: true }
    } catch (error) {
      console.error('Error sending message:', error)
      return { success: false }
    }
  }
}