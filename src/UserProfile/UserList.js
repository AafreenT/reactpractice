import { useState } from "react";
import { UserProfile } from "./UserProfile";

export function UsersList(){
    // define object array as a initial value of useState
    const [users, setUsers] = useState([   
        {
            id: '1',
            firstName: "Aafreen",
            lastName: "Khan",
            age: 25,
            gender: "female",
            isAdmin: true
        },
        {
            id: '2',
            firstName: "Tejal",
            lastName: "Khandave",
            age: 25,
            gender: "female",
            isAdmin: false
        },
        {
            id: '3',
            firstName: "Astha",
            lastName: "Mishra",
            age: 28,
            gender: "Famale",
            isAdmin: false
        }
    ] );

    // define usState to set the input value entered by the user in the Form 
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        gender:'',
    })

    // define onInputChange Function to execute the program when user enter the value in input field and 
    // set those value in the setForValue Veriable to use it
    const onInputChange = (e) =>{
        console.log(e.target.value, e.target.name)
        formValues[e.target.name] = e.target.value;
        setFormValues({...formValues})
    } 
    

    // define one addUser() to add the new user details in the previouly added record 
    // it call when we click the add button by onClick function 
    const addUser = ()=>{
        
        users.push({
            "id": users.length+1,
            "firstName": formValues.firstName,
            "lastName": formValues.lastName,
            "gender": formValues.gender
        })

        // after add the new user details we need to clear that data for new input...below code empty the input field
        setUsers([...users]);
        setFormValues({
            firstName: '',
            lastName: '',
            gender:'',
        })
    }

    // now this is a code which we will see in the output screen 
    // its a form fileds which display the firstName, lastName and Gender by using <input> tag
    return <div className="text-center">
       
         <input name="firstName" placeholder="First Name" value={formValues.firstName} onChange={onInputChange}></input>
        <input name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={onInputChange}></input>
        <input name="gender" placeholder="gender" value={formValues.gender} onChange={onInputChange}></input>
        <br></br>
        {/* addUser call from this  */}
        <button onClick={addUser}>Add User</button>
        {users.map(user=>{
            return <div key={user.id}>
                <UserProfile firstName={user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile> 
                <hr></hr>
                </div>
        })}
    </div>
}