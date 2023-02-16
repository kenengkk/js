let put1 = "LYZC_WC1";
        let put2 = "LYZC_WC2";
        let put3 = "LYZC_WC3";
        let put4 = "LYZC_WC4";
        let count = 0;
        let now = new Date(2023, 0, 30, 17, 0, 0);
        let tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        function km1(){
            let pwd1 = document.getElementById("pwd1").value;
            if(pwd1 == put1 && now < tomorrow || pwd1 == put2 || pwd1 == put3 || pwd1 == put4)
            {
                mui.alert("卡密输入正确，请进入");
                window.open("jrjjm.html");
            }  else{
                count++;
                if(count>=3){
                    mui.alert("输入次数过多，请稍后再试！","充值提示");  
                            }else{
                    mui.alert("卡密无效!","充值提示");  
                                 }
                            }
                    }
function aks(){
  if(djj.value == "显示"){
     djj.value = "隐藏";
     pwd1.type = "password"
  } else{
     djj.value = "显示"
     pwd1.type = "text"
  }
  }
