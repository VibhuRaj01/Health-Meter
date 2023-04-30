import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const FormOne = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPercentage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Do something with the form data, like send it to an API or update state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              name="age"
              value={formValues.age}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Number of Pregnancies</FormLabel>
            <Input
              type="number"
              name="pregnancies"
              value={formValues.pregnancies}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Glucose</FormLabel>
            <Input
              type="number"
              name="glucose"
              value={formValues.glucose}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Blood Pressure</FormLabel>
            <Input
              type="number"
              name="bloodPressure"
              value={formValues.bloodPressure}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Skin Thickness</FormLabel>
            <Input
              type="number"
              name="skinThickness"
              value={formValues.skinThickness}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Insulin</FormLabel>
            <Input
              type="number"
              name="insulin"
              value={formValues.insulin}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>BMI</FormLabel>
            <Input
              type="number"
              name="bmi"
              value={formValues.bmi}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Diabetes Percentage</FormLabel>
            <Input
              type="number"
              name="diabetesPercentage"
              value={formValues.diabetesPercentage}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme='blue'>Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormOne;
