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
    gender: "Male",
    notification: false,
  });

  const [printForm, setPrintForm] = useState(false);
  const [radioValue, setradioValue] = useState();
  const [printValues, setprintValues] = useState({
    name: "",
    surNname: "",
    email: "",
    age: "",
    favoriteColor: "",
    gender: "Male",
    notification: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setprintValues(values);
    setPrintForm(true);
    console.log(values);
    setradioValue(false);
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
            errorMessage="name must be without number or special character"
            pattern="[A-Za-z' ']+"
          />
          <FormInput
            key={"surNname"}
            value={values["surNname"]}
            onChange={onChange}
            type="text"
            name="surNname"
            label="Surname"
            placeholder="Surname"
            errorMessage="surname must be without number or special character"
            pattern="[A-Za-z' ']+"
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
            pattern="^[1-9][0-9' ']*$"
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
            pattern="[A-Za-z' ']+"
          />

          <div style={{ display: "flex" }}>
            <FormInput
              key={"gender"}
              value="Male"
              onChange={onChange}
              type="radio"
              name="gender"
              label="Male"
              defaultChecked={false}
              checked={radioValue}
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
              checked={radioValue}
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
