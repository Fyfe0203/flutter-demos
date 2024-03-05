/*
 * @Author: freeser freeser@126.com
 * @Date: 2023-12-07 18:05:24
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-12-07 18:08:38
 * @Description:
 * @FilePath: /nuxt3-ai-aide/public/remove-error.js
 */
window.onload = function() {
    const tar =  document.querySelector('#__NUXT_DATA__');
    tar && tar.parentNode.removeChild(tar)
}
