import {json} from '@sveltejs/kit'
import {WebClient} from '@slack/web-api'
import {SLACK_BOT_TOKEN} from '$env/static/private'

export async function POST({request}){
    const web = new WebClient(SLACK_BOT_TOKEN)
    const body = await request.json()
    try {
        console.log(body)
    const response = await web.chat.postMessage({
      channel: 'C0B8K3MC9LG',
      text: `<@${body.user_id}> has been banned permanently for trying to get free stardusts... be good kids ^^ (ofc as a joke)`,
    });
    console.log('Message sent: ', response.ts);
  } catch (error) {
    console.error('Error sending message:', error);
  }
    return json({status: true})
}