
import { useState } from 'react';
import './FormContainer.css'
const FormContainer = (props) =>{
    const [nameError,setNameError] = useState("Empty");
    const [numberError,setNumberError] = useState("Empty");
    const [dateError, setDateError] = useState("Empty");
    const [cvcError, setCVCError] = useState("Empty");

    function containsNumber(_string) {
      return /\d/.test(_string);
    }

    const handleSubmit = (e) =>{
      if(nameError == "" && numberError == "" && dateError == "" && cvcError == ""){
        return true;
      }
      e.preventDefault();
    }

    const handleName = () =>{
        let nameInput = document.querySelector("#name");
        let nameErrorDiv = document.querySelector("#nameError");

         if (nameInput.value == "") {
           nameErrorDiv.innerHTML = "Name is empty";
           nameInput.classList.add("error");
           setNameError("Name is empty");
           props.setName(nameInput.value);
         } else if (containsNumber(nameInput.value)) {
           nameErrorDiv.innerHTML = "Only characters allowed";
           nameInput.classList.add("error");
           setNameError("Only Characters Allowed");
           props.setName(nameInput.value);
         } else {
           nameErrorDiv.innerHTML = "";
           nameInput.classList.remove("error");
           setNameError("");
           props.setName(nameInput.value);
         }
    }

    const handleNumber = () =>{
        let numberInput = document.querySelector("#number");
        let numberErrorDiv = document.querySelector("#numberError");
        let numberInputValue = numberInput.value;

        if (numberInputValue == '') {
          numberErrorDiv.innerHTML = "Card number is empty";
          numberInput.classList.add("error");
          setNumberError("Card number is empty");
        } else if (!(/^\d+$/.test(numberInputValue))) {
          numberErrorDiv.innerHTML = "Wrong format, only numbers";
          numberInput.classList.add("error");
          setNumberError("Wrong format, only numbers");
        }else if(numberInputValue.length < 16) {
            numberErrorDiv.innerHTML = "Enter full card number";
            numberInput.classList.add("error");
            setNumberError("Enter full card number");
        } else {
          numberErrorDiv.innerHTML = "";
          numberInput.classList.remove("error");
          setNumberError("");
        }
        numberInputValue =
          numberInputValue + "0".repeat(16 - numberInputValue.length);
        let spacedText = numberInputValue.match(/.{1,4}/g);
        props.setNumber(spacedText.join(' '));
    }

    const handleDate = () =>{
        let monthInput = document.querySelector("#month");
        let yearInput = document.querySelector("#year");
        let dateErrorDiv = document.querySelector("#dateError");

        if (monthInput.value == "" && yearInput.value == "") {
          dateErrorDiv.innerHTML = "Can't be blank";
          monthInput.classList.add("error");
          yearInput.classList.add("error");
          setDateError("Can't be blank");
        } else if (monthInput.value == "") {
          dateErrorDiv.innerHTML = "Can't be blank";
          monthInput.classList.add("error");
          yearInput.classList.remove("error");
          setDateError("Can't be blank");
        } else if (yearInput.value == "") {
          dateErrorDiv.innerHTML = "Can't be blank";
          yearInput.classList.add("error");
          monthInput.classList.remove("error")
          setDateError("Can't be blank");
        }else if (
          !/^\d+$/.test(monthInput.value) &&
          !/^\d+$/.test(yearInput.value)
        ) {
            dateErrorDiv.innerHTML = "Only numbers allowed";
            monthInput.classList.add("error");
            yearInput.classList.add("error");
            setDateError("Only numbers allowed");
        }else if (!/^\d+$/.test(monthInput.value)) {
            dateErrorDiv.innerHTML = "Only numbers allowed";
            monthInput.classList.add("error");
            yearInput.classList.remove("error");
            setDateError("Only numbers allowed");
        }else if (!/^\d+$/.test(yearInput.value)) {
            dateErrorDiv.innerHTML = "Only numbers allowed";
            yearInput.classList.add("error");
            monthInput.classList.remove("error");
            setDateError("Only numbers allowed");
        }else{
            dateErrorDiv.innerHTML = "";
            yearInput.classList.remove("error");
            monthInput.classList.remove("error");
            setDateError("");
        }
        props.setDate(monthInput.value + "/" + yearInput.value);
    }

    const handleCVC =  () =>{
        let cvcInput = document.querySelector("#cvc");
        let cvcErrorDiv = document.querySelector("#cvcError");

        if(cvcInput.value == ""){
            cvcErrorDiv.innerHTML = "Shouldn't be empty";
            cvcInput.classList.add("error");
            setCVCError("Shouldn't be empty");
        }else if (!(/^\d+$/.test(cvcInput.value))) {
            cvcErrorDiv.innerHTML = "Only digits allowed";
            cvcInput.classList.add("error");
            setCVCError("Only digits allowed");
        }else if(cvcInput.value.length < 3){
            cvcErrorDiv.innerHTML = "Atleast 3 digits";
            cvcInput.classList.add("error");
            setCVCError("Atleast 3 digits");
        }else{
            cvcErrorDiv.innerHTML = "";
            cvcInput.classList.remove("error");
            setCVCError("");
        }

        props.setCVC(cvcInput.value);
    }

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit} action="/submit" className="form">
          <div className="input">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. John Appleseed"
              onChange={handleName}
            />
            <p className="errorText" id="nameError"></p>
          </div>
          <div className="input">
            <label htmlFor="number">CARD NUMBER</label>
            <input
              type="text"
              id="number"
              name="number"
              minLength="16"
              maxLength="16"
              placeholder="e.g. 1234 5678 9000 0000"
              onChange={handleNumber}
            />
            <p className="errorText" id="numberError"></p>
          </div>
          <div className="input-wrapper">
            <div className="dateInputsWrapper">
              <label htmlFor="month">EXP. DATE (MM/YY)</label>
              <div className="dateInputs">
                <input
                  type="text"
                  name="month"
                  id="month"
                  minLength="2"
                  maxLength="2"
                  placeholder="MM"
                  onChange={handleDate}
                />
                <input
                  type="text"
                  name="year"
                  id="year"
                  minLength="2"
                  maxLength="2"
                  placeholder="YY"
                  onChange={handleDate}
                />
              </div>
              <p className="errorText" id="dateError"></p>
            </div>
            <div className="cvcInput">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                minLength="3"
                maxLength="3"
                placeholder="e.g. 123"
                onChange={handleCVC}
              />
              <p className="errorText" id="cvcError"></p>
            </div>
          </div>
          <button type="submit" id="submit">
            Confirm
          </button>
        </form>
      </div>
    );
}

export default FormContainer;