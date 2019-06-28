const moduleA = {
	namespaced:true,
	state: {
		count: 1
	},
	getters: {
		getStateCount(state) {
			debugger
			return state.count + 1;
		}
	},
	mutations: {
		add(state, n=2) {
			debugger;
			state.count +=n;
		},
		sub(state, n=2){
			debugger;
			state.count -=n;
		}
	},
	actions: {
		addFun({commit}, n){ //对象结构，直接提取出 commit
			debugger;
			commit('add', n);
		},
		subFun(context, n){
			debugger;
			context.commit('sub', n);
		}
	}

}


export default moduleA