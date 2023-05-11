import { useState } from "react";
import axios from "axios";

interface contact {
  firstname: string;
  lastname: string;
  status: string;
  id: number;
}

const EditForm = (currentValues: any) => {
  let initstate: contact = {
    id: currentValues.currentValues.id,
    firstname: currentValues.currentValues.firstname,
    lastname: currentValues.currentValues.lastname,
    status: currentValues.currentValues.status,
  };
  console.log(initstate.firstname);
  const [initValues, setInitValues] = useState<contact>(initstate);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(
        `https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/${initstate.id}`,
        initValues
      )
      .then((response) => {
        alert("Successfully edited up!");
        console.log(response.data);
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
      <span className="font-bold text-2xl">Edit Contact</span>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-md shadow-black/40 p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <div className="flex flex-row gap-3 h-[3rem] items-center ">
            <label htmlFor="firstname"> First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="rounded-md h-full  border border-black px-2"
              value={initValues.firstname}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className="flex flex-row gap-3 h-[3rem] items-center">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="rounded-md h-full border border-black px-2"
              value={initValues.lastname}
              onChange={(e) => handleChange(e.target)}
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
          <button className="p-4 w-fit rounded-md bg-green-600 text-white">
            Save Edited Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
