import { useState } from "react";
import axios from "axios";

interface contact {
  firstname: string;
  lastname: string;
  status: string;
}

let intistate: contact = {
  firstname: "",
  lastname: "",
  status: "false",
};

// This component performs a simple post request to the database to create a contact. This is a promise based fuction
//and performs a window refresh on completion
const CreateForm = () => {
  const [intiValues, setInitValues] = useState<contact>(intistate);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts", intiValues)
      .then((response) => {
        alert("Contact Created!");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event: HTMLInputElement) => {
    const { name, value } = event;
    setInitValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div
      className="flex flex-col items-center gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="font-bold text-2xl">Create Contact</span>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-md shadow-black/40 p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <div className="flex flex-row gap-3 h-[3rem] items-center">
            <label htmlFor="firstname"> First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="rounded-md h-full border border-black px-2"
              value={intiValues.firstname}
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="flex flex-row gap-3 h-[3rem] items-center">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="rounded-md h-full border border-black px-2"
              value={intiValues.lastname}
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="flex flex-row justify-around w-full">
            {" "}
            <label htmlFor="">Status:</label>
            <div className="flex flex-col ">
              <div className="flex flex-row gap-3">
                <input
                  type="radio"
                  name="status"
                  id=""
                  value="true"
                  onChange={(e) => handleChange(e.target)}
                />
                <label htmlFor="active">Active</label>
              </div>
              <div className="flex flex-row gap-3">
                <input
                  type="radio"
                  name="status"
                  id=""
                  value="false"
                  onChange={(e) => handleChange(e.target)}
                />
                <label htmlFor="status">Inactive</label>
              </div>
            </div>
          </div>{" "}
          <button className="p-4 w-fit rounded-md bg-black text-white">
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
