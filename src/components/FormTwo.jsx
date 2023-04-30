import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";

const FormTwo = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    albumin: "",
    alkalinePhosphatase: "",
    alanineTransaminase: "",
    aspartateTransaminase: "",
    sex: "",
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
            <FormLabel>Albumin Blood Test</FormLabel>
            <Input
              type="number"
              name="albumin"
              value={formValues.albumin}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Alkaline Phosphatase</FormLabel>
            <Input
              type="number"
              name="alkalinePhosphatase"
              value={formValues.alkalinePhosphatase}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Alanine Transaminase</FormLabel>
            <Input
              type="number"
              name="alanineTransaminase"
              value={formValues.alanineTransaminase}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Aspartate Transaminase</FormLabel>
            <Input
              type="number"
              name="aspartateTransaminase"
              value={formValues.aspartateTransaminase}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Sex</FormLabel>
            <Select
              name="sex"
              value={formValues.sex}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormTwo;
