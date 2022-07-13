import { useState } from "react";
import "./app.css";
import { Card } from "./component/Card";
import FormInput from "./component/FormInput";
import Heading from "./component/Heading";
import SubHeading from "./component/SubHeading";
import MyButton from "./component/MyButton";

const App = () => {
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
  };
  const cancleButton = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      surNname: "",
      email: "",
      age: "",
      favoriteColor: "",
      gender: "",
      notification: false,
    });
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <>
      <Heading text="Main Heading" />
      <SubHeading text="Sub Heading" />

      <Card bgColor="white">
        <form onSubmit={handleSubmit}>
          <Heading text="Form Heading" />
          <SubHeading text="Form Sub Heading" />
          <FormInput
            key={"name"}
            value={values["name"]}
            onChange={onChange}
            type="text"
            name="name"
            label="Name"
            placeholder="Name"
            errorMessage="name must be start with capital letter and without number or special character"
            pattern="[A-Z][a-z]+"
          />
          <FormInput
            key={"surNname"}
            value={values["surNname"]}
            onChange={onChange}
            type="text"
            name="surNname"
            label="Surname"
            placeholder="Surname"
            errorMessage="surname must be start with capital letter and without number or special character"
            pattern="[A-Z][a-z]+"
          />
          <FormInput
            key={"email"}
            value={values["email"]}
            onChange={onChange}
            type="email"
            name="email"
            label="Email"
            placeholder="abc@gmail.com"
            errorMessage="It should be a valid email address!"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          />
          <FormInput
            key={"age"}
            value={values["age"]}
            onChange={onChange}
            type="text"
            name="age"
            label="Age"
            placeholder="Age"
            errorMessage="age must be greater than 0"
            pattern="^[1-9]\d*$"
          />
          <FormInput
            key={"favoriteColor"}
            value={values["favoriteColor"]}
            onChange={onChange}
            type="text"
            name="favoriteColor"
            label="Favorite Color"
            placeholder="Favorite Color"
            errorMessage="must be a valid color name"
            pattern="[A-Za-z]+"
          />

          <div style={{ display: "flex" }}>
            <FormInput
              key={"gender"}
              value="MALE"
              onChange={onChange}
              type="radio"
              name="gender"
              label="Male"
            />
            <FormInput
              key={"femalegender"}
              value="FEMALE"
              onChange={onChange}
              type="radio"
              name="gender"
              label="Female"
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
              bgColor="green"
              textColor="#cfbd1f"
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
              marginLeft="10px"
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
