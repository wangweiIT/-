<template>
	<div id="i18n">
		<div style="margin-top: 15px;">
		    <el-select v-model="selectLanguage" slot="prepend" placeholder="请选择语言" @change="changeLanguage">
		      <el-option  v-for="item in items" :key="item.value" :label="item.label" :value="item.value" ></el-option>
		    </el-select>
		    <el-button slot="append" icon="el-icon-search"></el-button>
			<!-- 显示所选择的语言 -->
		    {{this.$t('commons.message')}}

		</div>	

		<!-- 使用插槽 -->
		<slotchild>
			<template slot="child" slot-scope="users">
				{{users.message}}示例：
				<ul>
					<li v-for="(user,index) in users.stus" :key="index">{{user}}</li>
				</ul>
			</template>
		</slotchild>
	</div>
</template>

<script>
	//引入组件
	import slotchild from './Slot'

	export default {
		data(){
			return {
				selectLanguage: "",
				items:[{
				          value: 'cn',
				          label: '中文'
				        },
				        {
				          value: 'en',
				          label: '英文'
				        }
				],
				//message: this.$t('commons.message') 
			}
		},
		created(){
			debugger;
			//判断当前使用的语言环境 通过路由meta中的字段
			if(this.$route.meta.language) {
				this.$i18n.locale = this.$route.meta.language
			}
		},
		methods: {
			//切换语言
			changeLanguage(){  
				debugger;
				if(this.selectLanguage !==""){
					this.$i18n.locale = this.selectLanguage
					//this.message = this.$t('commons.message')
				}
			}
		},
		components:{
			slotchild
		}
	}
</script>


<style>
	
</style>