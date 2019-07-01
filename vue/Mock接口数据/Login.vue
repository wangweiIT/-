<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="right" label-width="auto" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input v-model.number="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" checked label="记住密码" style="float:left"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="primary" @click.native.default="submitForm('ruleForm')" :loading="loading">登录</el-button>
        <!-- <el-button @click.native.prevent="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>

    排名： {{rating}}
  </div>
</template>
<script>
//import { requestLogin } from '../api/servce';
export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        account: 'admin',
        checkPass: '123456'
      },
      loading: false,
      checked: true,
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      rating:""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //1.打开loading图标
          this.loading = true
          //2.调用接口验证用户名和密码是否正确
          let params = { username: this.ruleForm.account, password: this.ruleForm.checkPass }
          this.$http.post("/api/login",params).then(resp => {
            debugger;
            this.loading = false
            let { code, msg, user } = resp.data
            if (code !== 200) {
              //element-ui 提示框
              this.$message({
                message: msg, //内容
                type: 'info' //主题
              });
              console.log(`code:${code};msg:${msg}`)
            } else {
              //将用户信息写入缓存中去
              sessionStorage.setItem('user', JSON.stringify(user))
             this.$router.push({ name: 'elementUI' })
              //this.$router.push({name: 'vueTest'})
              //this.$router.push({name: 'i18nPage'})
            }
          }).catch(err => {
            console.log(err)
          })
          //alert('submit!');
        } else {
          console.log('error submit!!')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created () {
    debugger;
     this.$http.post('/api/postReq',{
       name: '小红',
       age: 12
     }).then(resp =>{
       debugger;
       console.log(resp)
       if(resp.data.errno === 0){
          this.rating = resp.data.data.no
       }
     })
       .catch(err =>{
        console.log(err)
       })
  }
}
</script>
<style scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.remember {
  margin: 0px 0px 35px 0px;
}

</style>
