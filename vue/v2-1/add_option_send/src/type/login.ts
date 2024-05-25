//定义接口
export interface loginFormInit{
    ueserName:string,
    password:string|number
  }

  export  class loginData{
    ruleForm:loginFormInit={
        ueserName:'user',
        password:123456
    }
  }
