import {getRequestConfig} from 'next-intl/server';
import {getMessages, locales} from '../app/i18n';

export default getRequestConfig(async ({locale}) => {
  // 获取消息
  const messages = await getMessages(locale);
  
  return {
    locale,
    messages,
    timeZone: 'Asia/Shanghai'
  };
});
 