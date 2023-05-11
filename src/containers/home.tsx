import Contactcard from "../components/contactCard";
import Sidebar from "../components/sidebar";
import { useQuery } from "react-query";
import axios from "axios";
import { contacts, setContacts } from "../redux/contactReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import EditForm from "../components/editForm";
import CreateForm from "../components/createContact";

const Home = () => {
  const allContacts = useAppSelector(contacts);
  const dispatch = useAppDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [currentContact, setCurrentContact] = useState("");
  const getContacts = async () => {
    const res = await axios.get(
      "https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts"
    );
    dispatch(setContacts(res.data));
  };

  const deleteContact = async (id: any) => {
    await axios
      .delete(`https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/${id}`)
      .then(() => alert("deleted!"));
  };

  useQuery("contacts", getContacts);

  const toggleEditForm = (contact: any) => {
    setShowEditForm(true);
    setCurrentContact(contact);
  };

  let content;
  if (allContacts.length === 0) {
    content = (
      <div>
        <div>
          <p>OOPS!</p>
        </div>
        <span>
          Seems there are no Contacts. CLick the button above to Add Contacts
        </span>
      </div>
    );
  } else {
    content = (
      <div className="w-3/5 h-fit p-5 bg-red-300 rounded-md">
        <div className="flex flex-row gap-4 flex-wrap">
          {allContacts.map((contact: any, id: any) => (
            <div className="flex flex-col gap-4 bg-slate-200 w-fit p-5 rounded-sm items-center">
              <Contactcard
                key={contact.id}
                fname={contact.firstname}
                lname={contact.lastname}
                status={contact.status === "false" ? "Inactive" : "Active"}
              />
              <button
                className="p-2 text-white rounded-sm w-[7rem] bg-green-600"
                onClick={() => toggleEditForm(contact)}
              >
                Edit
              </button>
              <button
                className="p-2 text-white rounded-sm w-[7rem] bg-red-600"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/*  */}
      </div>
    );
  }
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center gap-3">
      <Sidebar />
      <button
        onClick={() => {
          setShowCreateForm(true);
        }}
        className="p-4 w-fit rounded-md bg-green-600 text-white"
      >
        Create Contact
      </button>
      {content}
      {showCreateForm && (
        <div
          className="flex flex-col w-screen h-screen backdrop-blur-md bg-white/30 z-1 fixed items-center justify-center"
          onClick={(e) => {
            setShowCreateForm(false);
          }}
        >
          <CreateForm />
        </div>
      )}

      {showEditForm && (
        <div
          className="flex flex-col w-screen h-screen backdrop-blur-md bg-white/30 z-1 fixed items-center justify-center"
          onClick={(e) => {
            setShowEditForm(false);
          }}
        >
          <EditForm currentValues={currentContact} />
        </div>
      )}
    </div>
  );
};

export default Home;
