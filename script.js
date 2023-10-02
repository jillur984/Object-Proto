// const student={
//     name:{
//         firstName:"Jillur",
//         lastName:"Rahman"
//     },
//     district:'mymensingh',
//     upazilla:'Muktagacha',
//     __proto__:{
//         address(){
//           return  `${this.district} ${this.upazilla}`;
//         }
//     }

//     }
   
//     console.log(student.address())


const Person={
    name:"",
    address:'',
    contact:'',
    pw:'',

    __proto__:{
        isSignin:false,
        register(name,address,contact,pw){
            this.name=name;
            this.address=address;
            this.contact=contact;
            this.pw=pw;
        },
        login(name,pw){
            if(this.name===name&&this.pw===pw){
                this.isSignin=true
            }
            else{
                console.log("your username & PW in not valid")
                this.isSignin=false
            }
        }
              
    }

}
Person.register("jillur","muktagacha",+880161178094,1234567890)
Person.login("jillur",12345690)
if(Person.isSignin){
    console.log("welcome",Person.name)
}
else{
    console.log("you are unauthorized")
}

console.log(Person)




