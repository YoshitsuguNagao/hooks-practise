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


// import React, { useState, useEffect } from 'react'

// export default function Greeting(props) {
//   const name = useFormInput('Marry')
//   const surname = useFormInput('Poppins')
//   const width = useWindowWidth();
//   useDocumentTitle(name.value + ' ' + surname.value);

//   return (
//       <section>
//         <input {...name} />
//         <input {...surname}/>
//         {width}
//       </section>
//   )
// }
// function useFormInput(initial) {
//   const [value, setValue] = useState(initial)
//   function handleChange(e) {
//     setValue(e.target.value)
//   }
//   return {
//     value,
//     onChange: handleChange,
//   }
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title;
//   })
// }
// function useWindowWidth() {
//     const [width, setWidth] = useState(window.innerWidth)
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width
// }

import React, { Component, useState, useEffect } from 'react';
// import { withAuth } from '../AuthProvider';

export default function EditLanguage(props) {
  // console.log(props)
  // const language = useFormInput(props.languages.language)
  // console.log('language.value', language.value)
  // const level = useFormInput(props.languages.level)
  // const { index, updateLanguage } = props;
  // useEffect(() => {
  //   props.listContent.language = language;
  //   props.listContent.level = level;
  // })

  // componentDidUpdate() {
  //   this.props.languages.language = this.state.editLanguageInput
  //   this.props.languages.level = this.state.editLevelInput
  // }

  // componentWillMount() {
  //   this.setState({
  //     editLanguageInput: this.props.languages.language,
  //     editLevelInput: this.props.languages.level
  //   })
  // }
  const [language, setLanguage] = useState('japa')
  const [level, setLevel] = useState('beghin')
  function handleLangChange(e) {
    setLanguage(e.target.value)
  }
  function handleLevelChange(e) {
    setLevel(e.target.value)
  }
  return (
    <section className="edit-list-item-container">
      {/* <div className="edit-list-item-word"> */}
        <input value={language} onChange={handleLangChange} placeholder="language"/>
        <input value={level} onChange={handleLevelChange} placeholder="level"/>
      {/* </div> */}
      {/* <div className="list-item-btns">
        <button className="save-btn" onClick={() => {updateLanguage(index, language, level)}}>Save</button>
      </div> */}
    </section>
  )
}