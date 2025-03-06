import {getRequestConfig} from 'next-intl/server';
import {getMessages} from '../app/i18n';

// 设置支持的语言
const locales = ['en'];

export default getRequestConfig(async () => {
  // 获取消息，只有英语
  const messages = await getMessages();
  
  return {
    locale: 'en',
    messages: messages,
    timeZone: 'Asia/Shanghai'
  };
});
 