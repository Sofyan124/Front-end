            let usernameinput = document.getElementById("usernameinput");
            let passwordinput = document.getElementById("passwordinput");
            let loginbutton = document.getElementById("loginbutton");
            let logoutbutton = document.getElementById("logoutbutton");
            let loginheader = document.getElementById("loginheader");
            let check = document.getElementById("check")
            let checklabel = document.getElementById("checklabel");
            let forgotpassword = document.getElementById("forgotpassword");
            let signlink = document.getElementById("signlink")
            let admin = document.getElementById("admin");
            
            admin.style.display = "none";
            logoutbutton.style.display = "none";

            function onlogin() {
                localStorage.setItem("username", usernameinput.value);
                logoutbutton.style.display = "block";
                if (usernameinput.value == "admin" && passwordinput.value == "admin") {
                    localStorage.setItem("role", "admin");
                    usernameinput.style.display = "none";
                    passwordinput.style.display = "none";
                    loginbutton.style.display = "none";
                    loginheader.style.display = "none";
                    check.style.display = "none";
                    checklabel.style.display = "none";
                    forgotpassword.style.display = "none";
                    signlink.style.display = "none";
                    admin.style.display = "block";
                } else {
                    alert("Login failed! Please check your username and password.");
                    localStorage.removeItem("username");
                    logoutbutton.style.display = "none";
                    usernameinput.value = "";
                    passwordinput.value = "";
                    usernameinput.focus();
                    passwordinput.focus();
                    return false;
                }
            }

            if(localStorage.getItem("username")){
                usernameinput.style.display = "none";
                passwordinput.style.display = "none";
                loginbutton.style.display = "none";
                loginheader.style.display = "none";
                check.style.display = "none";
                checklabel.style.display = "none";
                forgotpassword.style.display = "none";
                signlink.style.display = "none";
                logoutbutton.style.display = "block";
                if(localStorage.getItem("role") == "admin"){
                    admin.style.display = "block";
                } else {
                    admin.style.display = "none";
                    usernameinput.value = "none";
                    passwordinput.value = "none";
                }
            }

            function onlogout() {
                localStorage.clear();
                location.reload();
            }            