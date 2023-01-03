import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from './Card';

const App = () => {

    const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

    console.log(users);
    
  return (
    <div className="App">
        <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}>
                User Cards App
        </motion.h1>
        <div className="container">
            <motion.div
                initial={{ y: 2000 }}
                animate={{ y: 10 }}
                transition={{ type: "spring", duration: 1 }}>
                    <div className="row">
                        {users.map((user, id) => {
                            return (
                                <Card user={user} key={id} />    
                            )
                        })}
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default App