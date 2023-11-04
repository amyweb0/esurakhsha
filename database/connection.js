import mongoose from "mongoose";

const CreateEmployeeSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  salary: String,
  address: String,
  imageFilename: String,
});

const CreateEmployeeModel = mongoose.model(
  "newemployees",
  CreateEmployeeSchema
);

export default CreateEmployeeModel;
