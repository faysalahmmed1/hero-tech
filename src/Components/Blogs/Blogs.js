import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='article-A'>
                <h1 style={{ color: 'red', font: '15px' }}>HOW TO REACT WORK?</h1>
                <p className='article'>
                    React works by combining several key principles and features that contribute to its efficiency and flexibility in building user interfaces..Create React app prototypes effortlessly with just one click. Simply drag and drop UI components sourced from top open-source React libraries such as MUI, Ant Design, React Bootstrap, or seamlessly integrate your own React components. Simplify your development process and unleash your creativity with React's declarative approach to building UI components and its efficient rendering via a virtual DOM. Let your imagination soar as you craft dynamic single-page applications that offer seamless user interactions without the need for full page reloads.</p>
            </div>
            <div className='article-B'>
                <h1 style={{ color: 'red', font: '30px' }}>Props VS State Distance </h1>
                <p className='article'>The key difference between state and props is that state is managed within a component, while props are passed from a parent component to a child component. State is used to manage internal component data, while props are used to pass data from a parent component to a child component.</p>
                <div className='props-state-container'>
                    <div className='state'>
                        <h3>State:</h3>
                        <p>Managed within a component.
                            Allows components to maintain and update their own internal data.
                            Utilized for dynamic data that can change over time within a component.
                            Accessed and modified using the setState() method.
                        </p>
                    </div>
                    <div>
                        <h3>Props</h3>
                        <p>  Passed from a parent component to a child component.
                            Immutable and read-only within the child component.
                            Used for passing data and configuration to child components.
                            Enable communication and data sharing between components in the component hierarchy.
                        </p>
                    </div>
                </div>
            </div>
            <div className='article-C'>
                <h1 style={{ color: 'red', font: '15px' }}>How to UseState Work</h1>
                <p className='article'>
                    In React, the useState hook is a function that allows functional components to add state to them. This hook is essential for managing component state in functional components, as opposed to class components where state is managed differently.The useState() hook works by handling and managing state in your applications. The useState() hook takes the first (initial) value of the state variable as its argument. The second value then sets your state, which is why it's always initiated as setState </p>
            </div>
        </div>
    );
};

export default Blogs;