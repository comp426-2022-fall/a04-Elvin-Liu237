import { roll } from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const app = express(2);

const args = minimist(process.argv.slice(2));


