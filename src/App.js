import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardTwo from "../src/components/CardTwo.js"
import {theme} from "../src/theme.js"

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      {/* <h1>Me apague quando for iniciar!</h1>
      <p>Chame o Card aqui!</p> */}
      {
        users.map((user) => {
          return <CardTwo key={user.name} name={user.name} company={user.company} email={user.email} website={user.website}/>
        })
      }
    </ChakraProvider>
  );
}
