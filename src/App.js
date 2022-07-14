import { useState } from "react";
import "./App.css";
import { Card } from "./component/Card";
import FormInput from "./component/FormInput";
import Heading from "./component/Heading";
import SubHeading from "./component/SubHeading";
import MyButton from "./component/MyButton";
import { getFormFields } from "./constants/formconstant";

const App = () => {
  const formFields = getFormFields("loginForm");
  const [values, setValues] = useState({
    name: "",
    surNname: "",
    email: "",
    age: "",
    favoriteColor: "",
    gender: "",
    notification: false,
  });

  const [printForm, setPrintForm] = useState(false);
  const [printValues, setprintValues] = useState({
    name: "",
    surNname: "",
    email: "",
    age: "",
    favoriteColor: "",
    gender: "",
    notification: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    setprintValues(values);
    setPrintForm(true);
    console.log(values);

    setValues({
      name: "",
      surNname: "",
      email: "",
      age: "",
      favoriteColor: "",
      gender: "",
      notification: false,
    });
    e.target.reset();
  };
  const cancleButton = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      surNname: "",
      email: "",
      age: "",
      favoriteColor: "",
      gender: "Male",
      notification: false,
    });
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const getInput = (field) => {
    return (
      <FormInput
        key={field?.key}
        value={values[field?.name]}
        onChange={onChange}
        type={field?.type}
        name={field?.name}
        label={field?.label}
        placeholder={field?.placeholder}
        errorMessage={field?.errorMessage}
        pattern={field?.pattern}
      />
    );
  };
  const getFormField = (field) => {
    switch (field?.type) {
      case "text":
      case "email":
        return getInput(field);
      
    }
  };
  return (
    <>
      <Heading text="Main Heading" />
      <SubHeading text="Sub Heading" />

      <Card bgColor="white">
        <form onSubmit={handleSubmit}>
          <Heading text="Form Heading" />
          <SubHeading text="Form Sub Heading" />
          {formFields.map((field) => {
            return getFormField(field);
          })}
          <div style={{ display: "flex" }}>
            <FormInput
              key={"gender"}
              value="Male"
              onChange={onChange}
              type="radio"
              name="gender"
              label="Male"
              defaultChecked={false}
            />
            <FormInput
              key={"Femalegender"}
              value="Female"
              onChange={onChange}
              type="radio"
              name="gender"
              label="Female"
              marginLeft="15px"
              defaultChecked={false}
            />
          </div>
          <FormInput
            key={"notification"}
            value={values["notification"] === "true" ? "false" : "true"}
            onChange={onChange}
            type="checkbox"
            name="notification"
            label="Receive Notification"
            checked={values["notification"]}
          />

          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyButton
              text="Submit"
              bgColor="#42B549"
              textColor="#ffea03"
              padding="10px"
              borderRadius="5px"
              type="submit"
              disabled={
                values["name"] === "" ||
                values["surNname"] === "" ||
                values["email"] === "" ||
                values["age"] === "" ||
                values["favoriteColor"] === "" ||
                values["gender"] === "" ||
                values["notification"] === ""
                  ? true
                  : false
              }
            />
            <MyButton
              text="Cancel"
              bgColor="red"
              textColor="white"
              padding="10px"
              borderRadius="5px"
              marginLeft="20px"
              onClick={cancleButton}
            />
          </div>
        </form>
      </Card>
      {printForm && (
        <Card bgColor="#00468B" textColor="white">
          <div
            style={{
              color: "white",
            }}
          >
            Name: {printValues["name"]}
            <br />
            SurName: {printValues["surNname"]}
            <br />
            Email: {printValues["email"]} <br />
            Age: {printValues["age"]} <br />
            Favorite Color: {printValues["favoriteColor"]}
            <br />
            Gender: {printValues["gender"]}
            <br />
            Notification: {printValues["notification"]}
          </div>
        </Card>
      )}
    </>
  );
};

export default App;
