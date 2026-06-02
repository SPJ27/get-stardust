import { WebClient } from '@slack/web-api'
import { SLACK_BOT_TOKEN } from '$env/static/private'

export const actions = {
  default: async ({ request }) => {
    const web = new WebClient(SLACK_BOT_TOKEN)
    const formData = await request.formData()
    const user_id = formData.get('user_id')
    try {
      const response = await web.chat.postMessage({
        channel: 'C0B8K3MC9LG',
        text: `<@${user_id}> has been banned permanently for trying to get free stardusts... be good kids ^^ (ofc as a joke)`
      })
      return {
        success: true
      }
    } catch (error) {
      console.error('Error sending message:', error)

      return {
        success: false
      }
    }
  }
}