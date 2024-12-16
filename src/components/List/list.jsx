import React from 'react';
import './List.css';
import {Link} from 'react-router-dom'
const List = () => {
    const components = [
        { name: 'Color Changer', path: '/ColorChanger' },
        { name: 'Contact Card', path: '/ContactCard' },
        { name: 'Counter', path: '/Counter' },
        { name: 'Slider', path: '/Slider' },
        { name: 'Form', path: '/Form' },
        { name: 'Modal Window', path: '/Modal' },
        { name: 'Stop Watch', path: '/StopWatch' },
        { name: 'Stop Watch By Sumit', path: '/StopWatchBySumit' },
        { name: 'Todo List', path: '/Todolist' }
    ]
    return (
        <div className="list">
            <div className="list-container">
                {components.map((component, index) => (
                    <Link key={index} to={component.path} className="component">
                        <button> {component.name}</button>
                    </Link>))}
            </div>
        </div>

    );

    /*return(
        <div className='list'>
            <h2>Components List</h2>
            <div className='list-container'>
            <Link to="/">home</Link>
                <Link to="/ColorChanger"><button>Color Changer</button></Link>
                <Link to="/ContactCard">contact</Link>
                <Link to="/counter">users</Link>
            </div>
        </div>
    );*/


};

export default List;
