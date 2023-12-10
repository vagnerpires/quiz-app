
export const quizQuestions_2 = {
  questions: [
    {
      question: 'How do you initialize state in a class component?',
      choices: ['this.state = initialState', 'state = initialState', 'constructor() { this.state = initialState }', 'getInitialState() { return initialState }'],
      correctAnswer: 'constructor() { this.state = initialState }',
    },
    {
      question: 'What is the key difference between props and state in React?',
      choices: ['Props are mutable, while state is immutable', 'Props are used for communication between parent and child components, while state is used for internal component data', 'Props are only accessible in functional components, while state is only accessible in class components', 'State is passed down from parent to child components, while props are managed internally within a component'],
      correctAnswer: 'Props are used for communication between parent and child components, while state is used for internal component data',
    },
    {
      question: 'In React, what happens when you modify the state directly without using the setState method?',
      choices: ['It throws an error', 'It updates the state as expected', 'It triggers a re-render, but the state remains unchanged', 'It results in unpredictable behavior'],
      correctAnswer: 'It results in unpredictable behavior',
    },
    {
      question: 'How do you update the state based on the previous state in a functional component?',
      choices: ['this.setState({ count: this.state.count + 1 })', 'setCount(count + 1)', 'setCount((prevCount) => prevCount + 1)', 'updateState({ count: count + 1 })'],
      correctAnswer: 'setCount((prevCount) => prevCount + 1)',
    },
    {
      question: 'What is the purpose of the defaultProps property in a React component?',
      choices: ['To set default values for props', 'To define default state values', 'To set default styles for the component', 'To specify default lifecycle methods'],
      correctAnswer: 'To set default values for props',
    },
    {
      question: 'Which of the following is a valid way to define default props in a functional component?',
      choices: ['function MyComponent(props = defaultProps) { }', 'MyComponent.defaultProps = { }', 'const MyComponent = (props = defaultProps) => { }', 'const MyComponent = ({ prop1 = defaultValue }) => { }'],
      correctAnswer: 'const MyComponent = ({ prop1 = defaultValue }) => { }',
    },
    {
      question: 'What is the purpose of the shouldComponentUpdate method in React?',
      choices: ['To determine if a component should re-render', 'To force a component to re-render', 'To handle side effects in a component', 'To define initial state values'],
      correctAnswer: 'To determine if a component should re-render',
    },
    {
      question: 'How do you pass a callback function from a parent component to a child component through props?',
      choices: ['onCallback={callbackFunction}', 'callbackFunction={onCallback}', 'callback={callbackFunction}', 'props.callbackFunction'],
      correctAnswer: 'callback={callbackFunction}',
    },
    {
      question: 'In React, what is the role of the key prop when rendering a list of elements?',
      choices: ['It defines the style of each element in the list', 'It uniquely identifies each element in the list, helping React update efficiently', 'It determines the order of elements in the list', 'It specifies the maximum number of elements to render in the list'],
      correctAnswer: 'It uniquely identifies each element in the list, helping React update efficiently',
    },
    {
      question: 'What is the purpose of the componentWillUnmount lifecycle method in React?',
      choices: ['To initialize the component', 'To update the components state', 'To perform cleanup before the component is removed from the DOM', 'To handle errors during rendering'],
      correctAnswer: 'To perform cleanup before the component is removed from the DOM',
    },
  ],
}