import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const[employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage
    }).then(() => {
      getEmployees();
      setName('');
      setAge(0);
      setCountry('');
      setPosition('');
      setWage(0);
    })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
  })}


  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/employees/${id}`)
      .then(() => {
        setEmployeeList(prev => prev.filter(emp => emp.id !== id));
    })
      .catch(err => {
        console.log(err);
        alert("Failed to delete employee");
      })
    };

  return (
    <div className="App">
      <div className='information'>
    <lavel>Name:</lavel>
    <input type = "text"
    value={name} 
    onChange = {(event) => {
      setName(event.target.value);
      }} 
      />
    <label>Age:</label>
    <input type = "number" 
     value={age}
     onChange = {(event) => {
      setAge(event.target.value);
      }} 
    />
    <label>Country:</label>
    <input type = "text" 
     value={country}
     onChange = {(event) => {
      setCountry(event.target.value);
      }} 
      />
    <label>position</label>
    <input type = "text" 
     value={position}
     onChange = {(event) => {
      setPosition(event.target.value);
      }} 
    />
    <label>Wage (year):</label>
    <input type = "number" 
     value={wage}
     onChange = {(event) => {
      setWage(event.target.value);
      }} 
    />
    <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className='employees'>
      <button onClick={getEmployees}>Show Employees</button>

      {employeeList.map((val, key) => {
        return(
        <div className='employee' key={val.id ?? key}>
        <h3>Name: {val.name}</h3> 
        <h3>Age: {val.age}</h3> 
        <h3>Country: {val.country}</h3> 
        <h3>position: {val.position}</h3> 
        <h3>wage: {val.wage}</h3> 
        <button className='delete-btn' onClick={() => deleteEmployee(val.id)}>Delete</button>
        </div>
        
        )
      })}
      </div>
    </div>
  );
}

export default App;
