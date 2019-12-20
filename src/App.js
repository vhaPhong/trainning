import React, {useState} from 'react';
import {Button,Form} from 'react-bootstrap'


export default function FormInput (props) {
  const name = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const birthday = useInput('');
  const [showInfo, setShowInfo] = useState(false);
  let flag = true;


  function useInput (initialValue) {
    const [value,setValue] = useState(initialValue)

    function handleChange(event){
      setValue(event.target.value)
    }
    return {
      value,
      onChange: handleChange
    }
  }
  
  function checkNameInput(){
    let nameRegex = /^[A-Za-z0-9_-]{11,50}$/;
    if(!nameRegex.test(name.value)){
      alert('Wrong name!!!')
      return true;
    }
    return false;
  }

  function checkPhoneNumber(){
    let phoneRegex = /^[0-9]*$/;
    if(!phoneRegex.test(phone.value)){
      alert('Wrong number!!!')
      return true;
    }
    return false;
  }

  function checkEmailInput(){
    let emailRegex = /[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+/;
    if(!emailRegex.test(email.value)){
      alert('Wrong email!!!')
      return true;
    }
    return false;
  }



  function getDate(){
      let d = new Date();
      let date = d.getDate();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let currentDate = `${year}-${month}-${date}`
      // console.log(Date.parse(day));
      // console.log(Date.parse(currentDate));

      if(Date.parse(birthday.value) > Date.parse(currentDate)){
         flag = false;
      } else {
         flag = true;
      }
      return flag
}

  function checkDate(x){
    if(!x){
      alert('Wrong date time')
      return true;
    }
    return false;
  }

  function checkInput () {
    if(checkNameInput() || checkPhoneNumber() || checkEmailInput() || checkDate(flag)) {
      return false;
    } else {
      setShowInfo(true);
      alert('Success')
      return true;
    }
  }

  return (
    
    <div style={{width: '400px',margin:'50px'}}>
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder='Your Name'
            {...name}
          />
          <Form.Text className="text-muted">{(name.value.length >= 11) ? "Name is correct" : "Name isn't correct" }
          </Form.Text>
          {showInfo ? 
          <Form.Text style={{color: 'green'}}>
            Name: {name.value}
          </Form.Text> : null}
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder='Telephone Number'
            {...phone}
          />
          <Form.Text className="text-muted">{((phone.value.length >= 10)&&(phone.value.length <= 11)) ? "Phone is correct" : 'Phone must have 10-11 numbers'}</Form.Text>
          {showInfo ? 
          <Form.Text style={{color: 'green'}}>
            Phone: {phone.value}
          </Form.Text> : null}
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            placeholder='Your Email'
            {...email}
          />
          <Form.Text className="text-muted">Example: user1231@gmail.com</Form.Text>
          {showInfo ? 
          <Form.Text style={{color: 'green'}}>
            Email: {email.value}
          </Form.Text> : null}
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            onBlur={getDate}
            type="date"
            {...birthday}
          />
          {showInfo ? 
          <Form.Text style={{color: 'green'}}>
            Birthday: {birthday.value}
          </Form.Text> : null}
        </Form.Group>
        </Form>
      <Button type="submit" id="myBtn" onClick={checkInput}>Submit</Button>
    </div>
  );
}

