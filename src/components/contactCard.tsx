type ContactProps = {
  fname: string;
  lname: string;
  status: string;
};

const Contactcard = ({ fname, lname, status }: ContactProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold">FirstName: {fname}</span>
      <span className="font-bold">LastName: {lname}</span>
      <span className="font-semibold">Contact Status: {status}</span>
    </div>
  );
};

export default Contactcard;
