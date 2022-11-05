import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";


const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);

    console.log(todos);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
        <div className="col-md-10 offset-md-1">
            <h2>Todos App</h2>
            {isLoading && <h3>Loading ...</h3>}
            {error && <h3>{error.message}</h3>}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">USER ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {todos && todos.map((todo, index) => {
                        const { id, userId, title, body } = todo;
                        return (
                            <tr key={index}>
                                <th >{id}</th>
                                <td>{userId}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

};
export default Todos;