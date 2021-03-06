import * as React from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert,Modal,KeyboardAvoidingView,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class SignupLoginScreen extends React.Component{
    constructor(){
      super();
      this.state={
        emailId:'',
        password:'',
      }
    }
  
    userSignUp = (emailId, password) =>{

       firebase.auth().createUserWithEmailAndPassword(emailId, password)
       .then(()=>{
         db.collection('users').add({ 
           email_id:this.state.emailId, 
         })

         return  Alert.alert(
              'User Added Successfully',
              '',
              [
                {text: 'OK'},
              ]
          );
       })
       .catch((error)=> {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         return Alert.alert(errorMessage)
       });
   }
  
  userLogin = (emailId, password)=>{
     firebase.auth().signInWithEmailAndPassword(emailId, password)
     //.then(()=>{
       //this.props.navigation.navigate('Donate Books')
     //})
     .catch((error)=> {
       var errorCode = error.code;
       var errorMessage = error.message;
       return Alert.alert(errorMessage)
     })
   }
  
  
    render(){
      return(
        <View style={styles.container}>
          <View style={{justifyContent: 'center',alignItems: 'center'}}>
  
          </View>
            
          <View style={{justifyContent:'center', alignItems:'center'}}>
            {/* <SantaAnimation/> */}
            <Text style={styles.title}>Barter System</Text>
          </View>
          <View>
              <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              keyboardType ='email-address'
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            />
            <TextInput
            style={styles.loginBox}
            secureTextEntry = {true}
            placeholder="Enter Password"
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          />
          <TouchableOpacity
             style={[styles.button,{marginBottom:20, marginTop:20}]}
             onPress = {()=>{
               this.userLogin(this.state.emailId, this.state.password)
             }}
             >
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
  
           <TouchableOpacity
             style={styles.button}
             onPress={()=>
                this.userSignUp(this.state.emailId,this.state.password)
            }
             >
             <Text style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity>
        </View>
      </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })

