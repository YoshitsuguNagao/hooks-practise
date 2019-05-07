// import React from 'react'

// export default class Greeting extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: 'Marry',
//       surname: 'Poppins',
//     }
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSurnameChange = this.handleSurnameChange.bind(this);
//   }

//   handleNameChange(e) {
//     this.setState({
//       name: e.target.value,
//     })
//   }

//   handleSurnameChange(e) {
//     this.setState({
//       surname: e.target.value,
//     })
//   }

//   componentDidMount() {
//     document.title = this.state.name + ' ' + this.state.surname
//   }
//   componentDidUpdate() {
//     document.title = this.state.name + ' ' + this.state.surname
//   }
//   render() {
//     return (
//       <section>
//         <input
//           value={this.props.name}
//           onChange={this.handleNameChange}
//         />
//         <input
//           value={this.props.surname}
//           onChange={this.handleSurnameChange}
//         />
//       </section>
//     )
//   }
// }


import React, { useState, useEffect } from 'react'

export default function Greeting(props) {
  const name = useFormInput('Marry')
  const surname = useFormInput('Poppins')
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
      <section>
        <input {...name} />
        <input {...surname}/>
        {width}
      </section>
  )
}
function useFormInput(initial) {
  const [value, setValue] = useState(initial)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange,
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  })
}
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}