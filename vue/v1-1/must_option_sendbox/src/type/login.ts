//定义接口
export interface loginFormInit{
    ueserName:string,
    password:string|number
  }

  export  class loginData{
    ruleForm:loginFormInit={
        ueserName:'admin',
        password:123456
    }
  }
