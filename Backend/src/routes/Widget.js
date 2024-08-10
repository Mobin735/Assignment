import express from "express";
import { getWidgetData, updateWidgetData } from "../controllers/Widget.controller.js";

const Widget = express.Router();

Widget.route("/:projectID").get(getWidgetData);
Widget.route("/:projectID/updateconfig").post(updateWidgetData);

export default Widget