<template>
	<div>
		<h1>这是vuex测试页面</h1>
		 

		<el-row >
		  <el-col :span="3"><div style="height: 40px;line-height: 40px;">Vuex中State：</div></el-col>
		  <el-col :span="6"><el-input v-model="currentVal" placeholder="请输入内容"></el-input></el-col>
		  <el-col :span="3"><el-button plain icon="el-icon-plus" @click='addNum'>加</el-button></el-col>
		</el-row> 
		<el-row >
		  <el-col :span="3"><div style="height: 40px;line-height: 40px;">Vuex中getters：</div></el-col>
		  <el-col :span="6"><el-input v-model="computeVal" placeholder="请输入内容"></el-input></el-col>
		  <el-col :span="3"><el-button plain icon="el-icon-minus"@click='subNum'>减</el-button></el-col>
		</el-row> 

		
	</div>	
</template>

<script>
	//1.引入vuex辅助函数
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

	export default {

		data(){
			return{
			}
		},
		methods: {
			/*addNum(){
				debugger;
				//添加了各自的命名空间
				this.$store.dispatch('moduleA/addFun',1);
			},
			subNum(){
				debugger;
				this.$store.dispatch('moduleA/subFun',1);
			}*/

			//如果使用mapActions 时候，是要求带参数的，不能够直接的映射，否则n会被当成event，需要如下写法
			...mapActions({addFun: 'moduleA/addFun',subFun: 'moduleA/subFun'}),
			addNum(){
				debugger;
				this.addFun(3);
			},
			subNum(){
				debugger;
				this.subFun(3);
			}
		},
		computed: {
			/*currentVal(){
				return this.$store.state.moduleA.count
			},*/
			/*computeVal(){
				return this.$store.getters['moduleA/getStateCount']
			}*/
			...mapState({
					//用了modules之后，mapstate那样写找不到，要这样写，把对应的module加上
					currentVal: function(state){debugger;return state.moduleA.count}
					//currentVal: 'moduleA.count'  这样写找不到对应的module
					//若没有用module 可以这样写：currentVal: 'count' 
				}),

			...mapGetters({
					computeVal: 'moduleA/getStateCount' 
				})
		}
	}
</script>

<style type="text/css">
	
</style>