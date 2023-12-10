
export const quizQuestions_1 = {
  questions: [
    {
      question: 'What is the primary advantage of using functional components in React?',
      choices: ['Better performance', 'Easier state management', 'Improved code reusability', 'Enhanced debugging capabilities'],
      correctAnswer: 'Improved code reusability',
    },
    {
      question: 'In a functional component, how do you access the props passed to it?',
      choices: ['this.props', 'props', 'component.props', 'this.state.props'],
      correctAnswer: 'props',
    },
    {
      question: 'Which lifecycle method is not available in functional components?',
      choices: ['componentDidMount', 'render', 'componentWillUnmount', 'constructor'],
      correctAnswer: 'componentDidMount',
    },
    {
      question: 'How can you achieve conditional rendering in a functional component?',
      choices: ['Using if-else statements', 'Ternary operators', 'Both a and b', 'Switch statements'],
      correctAnswer: 'Both a and b',
    },
    {
      question: 'What is one limitation of functional components compared to class components?',
      choices: ['They cannot use state', 'They do not support lifecycle methods', 'They cannot contain other components', 'They cannot be used in JSX'],
      correctAnswer: 'They do not support lifecycle methods',
    },
    {
      question: 'In React, what is the purpose of the useState hook?',
      choices: ['To define state in functional components', 'To modify the state in class components', 'To connect components to the Redux store', 'To handle asynchronous operations'],
      correctAnswer: 'To define state in functional components',
    },
    {
      question: 'Which of the following is a valid way to define a functional component in React?',
      choices: ['class MyComponent extends Component { }', 'function MyComponent() { }', 'const MyComponent = () => { }', 'Both b and c'],
      correctAnswer: 'Both b and c',
    },
    {
      question: 'How do you pass data from a parent component to a child component in React?',
      choices: ['Using props', 'Using state', 'Using Redux', 'Using context'],
      correctAnswer: 'Using props',
    },
    {
      question: 'What is the purpose of the React.memo function in functional components?',
      choices: ['To memoize the components state', 'To optimize performance by memoizing the component', 'To create a higher-order component', 'To connect the component to the Redux store'],
      correctAnswer: 'To optimize performance by memoizing the component',
    },
    {
      question: 'In a functional component, how do you perform side effects?',
      choices: ['Using the componentDidMount lifecycle method', 'Using the useEffect hook', 'Using the componentWillUnmount lifecycle method', 'Using the render method'],
      correctAnswer: 'Using the useEffect hook',
    }
  ],
}