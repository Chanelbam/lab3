

console.log("this is working great");

//import into this file
import { Students } from "./Students";
import { Internship } from "./Internship";
import { CustomizedMap } from "./CustomizedMap";
const map = new CustomizedMap("map");
const student = new Students();
const internship = new Internship();
map.addPin(student);
map.addPin(internship);