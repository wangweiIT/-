import vue from 'vue'
import vueI18n from 'vue-i18n'

import cn from '../assets/language/cn.json'
import en from '../assets/language/en.json'

vue.use(vueI18n);

//配置语言
const i18n = new vueI18n({
	locale: 'cn',
	messages: {
		cn,en
	}

})


export default i18n