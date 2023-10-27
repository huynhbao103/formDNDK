// đổi màu nút ĐN ĐK
function changeColor(id) {
    if (id === 'DN') {
      document.getElementById('DN').style.color = 'red';
      document.getElementById('DN').style.borderBottom = '2px solid red';
      document.getElementById('DK').style.color = 'gray';
      document.getElementById('DK').style.borderBottom = 'none';
    } else {
      document.getElementById('DN').style.color = 'gray';
      document.getElementById('DN').style.borderBottom = 'none';
      document.getElementById('DK').style.color = 'red';
      document.getElementById('DK').style.borderBottom = '2px solid red';
    }
  }
              // đổi chỗ ĐN và ĐK
        function switchForm() {
            var loginForm = document.getElementById('loginForm');
            var registerForm = document.getElementById('registerForm');
            if (loginForm.style.display === "none") {
                registerForm.style.display = "none";
                loginForm.style.display = "block";
                loginForm.style.borderBottom = "none";     
            } else {
                loginForm.style.display = "none";
                registerForm.style.display = "block";  
                ;   
    
            }
        
          }
          
        //   xác nhận tên
        function validateName() {
            var name = document.getElementById("name").value;
            document.getElementById("nameError").style.color = "red";
            
            if (name.length < 3) {
                document.getElementById("nameError").innerText = "Vui lòng nhập họ và tên của bạn!";
            } else {
                document.getElementById("nameError").innerText = "";
            }
          }
        //   xác nhận SDT
        function validatePhoneNumber(phone) {
            var regex = /^0[0-9]{9,10}$/; // Số điện thoại phải bắt đầu bằng số 0 và có từ 10 đến 11 chữ số
            return regex.test(phone);
          }
          function validatePhone() {
            var phone = document.getElementById("phone").value;
            document.getElementById("phoneError").style.color = "red";

            if (phone.length < 1 ) {
                document.getElementById("phoneError").innerText = "Vui lòng nhập số điện thoại của bạn!";
             } else{
                if  (!validatePhoneNumber(phone)) {
                    document.getElementById("phoneError").innerText ="Số điện thoại không tồn tại!";
                    return false;
            } else {
                document.getElementById("phoneError").innerText = "";

            }
        }
    }
            //    xác nhân email
          function validateEmail() {
            var email = document.getElementById("email").value;
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            document.getElementById("emailError").style.color = "red";
          
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").innerText = "Vui lòng nhập email hợp lệ!";
            } else {
                document.getElementById("emailError").innerText = "";
            }
          }
        // xác nhận mật khẩu 
          function validatePassword(password1) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
            return regex.test(password1);
          }
        function validatePassword1() {
            var password1 = document.getElementById("password1").value;
            document.getElementById("passwordError1").style.color = "red";
            if(password1.length<1){
                document.getElementById("passwordError1").innerText = "Vui lòng nhập mật khẩu của bạn!";
            } else{

            if  (!validatePassword(password1)) {
                document.getElementById("passwordError1").innerText ="Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt!";
                return false;
             } else{
                document.getElementById("passwordError1").innerText = "";
             }
            }
        }
          
        // xác nhận lại mật khẩu
        function validatePassword2 () {
            var password2 = document.getElementById("password2").value;
            var password1 = document.getElementById("password1").value;
            

            document.getElementById("passwordError2").style.color = "red";

            if (password2.length<1) {
                document.getElementById("passwordError2").innerText = "Vui lòng nhập lại mật khẩu của bạn!";
            } else {
                if  (password1!=password2) {
                    document.getElementById("passwordError2").innerText ="Mật khẩu không trùng khớp!";
                    return false;
                 } else{
                    document.getElementById("passwordError2").innerText = "";
                 }              
            }
        }





       