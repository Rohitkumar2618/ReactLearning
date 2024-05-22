import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  //  UseState for changing in real time
  const [users, setUsers] = useState([]);

  // handle submit data ko hum props jaysa pass karenge usse new card create ho
  const handleSubmitData = (data) => {
    setUsers([...users, data]);
  };

  // handle remove data ko hum props jaysa pass karenge to delete card

  const handleRemove = (id) => {
    setUsers(users.filter((item, index) => index !== id));
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-zinc-600 bg-cover bg-center bg-no-repeat
    "
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM=')",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {/* Propers ke  help se send kr diye  Cards component me */}
          <Cards users={users} handleRemove={handleRemove} />
        </div>
        <Form handleSubmitData={(data) => handleSubmitData(data)} />
      </div>
    </div>
  );
};

export default App;
