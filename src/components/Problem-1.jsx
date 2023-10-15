import React, { useState } from 'react';

const Problem1 = () => {

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('All');

    // set value 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { name, status };
        setTasks([...tasks, newTask]);
    };

    // filter all task 
    const filterTasks = (status) => {
        if (status === 'All') {
            return tasks.sort((a, b) => {
                if (a.status === 'Active') return -1;
                if (a.status === 'Completed' && b.status !== 'Active') return -1;
                return 1;
            });
        }
        return tasks.filter((task) => task.status === status);
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="form-control"
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${status === 'All' && 'All'}`} type="button" onClick={() => setStatus('All')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${status === 'Active' && 'Active'}`} type="button" onClick={() => setStatus('Active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${status === 'Completed' && 'Completed'}`} type="button" onClick={() => setStatus('Completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterTasks(status)?.map((task, index) => (
                                    <tr key={index}>
                                        <id> {task?.name} </id>
                                        <id> {task?.status} </id>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;