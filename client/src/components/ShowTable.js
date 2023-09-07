import { TableBody, TableCell, TableRow, Table, TableHeader, TableHeaderCell, TableCellActions } from "@fluentui/react-components/unstable";
import { Avatar, Button } from "@fluentui/react-components";
import React, {useEffect, useState} from 'react';
import { Edit16Regular as EditRegular,  Document16Regular as DocumentRegular, DocumentPdf16Regular as DocumentPdfRegular, Video16Regular as VideoRegular, Delete12Filled } from '@fluentui/react-icons';

/* const items = [{
  file: {
    label: 'Meeting notes',
    icon: <DocumentRegular />
  },
  author: {
    label: 'Max Mustermann',
    status: 'available'
  },
  lastUpdated: {
    label: '7h ago',
    timestamp: 1
  },
  lastUpdate: {
    label: 'You edited this',
    icon: <EditRegular />
  }
}];
 */
const columns = [{
  columnKey: 'file',
  label: 'File'
}, {
  columnKey: 'author',
  label: 'Author'
}, {
  columnKey: 'lastUpdated',
  label: 'Last updated'
}, {
  columnKey: 'lastUpdate',
  label: 'Last update'
},{
columnKey: 'delete',
label: ''
}];

const ShowTable = () => {

  const [todos, setTodos] = useState([]);

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5050/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5050/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <div>
     
      <Table>
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      
      <TableBody>
      
      {todos.map(todo => (
          <TableRow key={todo.fluent_id}>
            <TableCell media={<DocumentRegular/>}>{todo.file}</TableCell>
            <TableCell
              media={<Avatar name={todo.author} badge={{ status:"available"  }} />}
            >
              {todo.author}
            </TableCell>
            <TableCell>{todo.last_updated}</TableCell>
            <TableCell media={<EditRegular/>}>
              {todo.last_update} 
             
             </TableCell>
            <TableCell> 
              <Button icon={<Delete12Filled />} appearance="subtle" className="btn btn-danger"
                  onClick={() => deleteTodo(todo.fluent_id)}>
                    Delete
             </Button>
             </TableCell>
          </TableRow>
        ))}
        
      </TableBody>
     
    </Table>
    
    </div>
  )
}

export default ShowTable