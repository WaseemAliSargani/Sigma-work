"use server"

import fs from "fs/promises"
export const SubmitAction = async(e)=>{
    console.log(e.get("name"))  /// This is the  Name = input text
    console.log(e.get("add"))   /// This is email = input email
    fs.writeFile("Waseem.txt", `Name is [${e.get("name")}] and Address is [${e.get("add")}]`)
    // fs.appendFile("Waseem.txt", `Name is [${e.get("name")}] and Address is [${e.get("add")}]`)
  /// fs.appendFile("waseem.txt")Means: Now Name, Email append in this file: multiple Name and Email in this File
  }