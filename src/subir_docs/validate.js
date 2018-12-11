const fileMinSize = 1 * 1000 * 1000; // 1MB
const fileMaxSize = 50 * 1000 * 1000; // 50MB

export default function validate (values) {
  let errors = {};
  console.log(values);
  if (!values.file) {
    errors.file = 'Required';
  } else {
    let file = values.file[0];
    if (!file.name.endsWith('.stl') || !file.name.endsWith('.obj')) {
      errors.file = 'El archivo de escaneo debe ser un archivo .STL o .OBJ';
    } else if (file.size < fileMinSize) {
      errors.file = 'El archivo escaneado debe tener al menos 1MB';
    } else if (file.size > fileMaxSize) {
      errors.file = 'El archivo escaneado no puede exceder los 50MB de tamaño';
    }
  }

  console.log(errors);
  // Object {file: "Required"}

  return errors;
}


// -----------------------------------------
// import React, {Component, PropTypes} from 'react';
// import {reduxForm} from 'redux-form';

// import validate from './validate.js';

// export const fields = [
//   'biometric.file'
// ];

// @reduxForm({
//   form: 'checkout',
//   fields,
//   destroyOnUnmount: false,
//   validate
// })
// export default class MyForm extends Component {
//   static propTypes = {
//     fields: PropTypes.object.isRequired,
//     handleSubmit: PropTypes.func.isRequired
//   };

//   render () {
//     const {
//       handleSubmit,
//       fields: {
//         biometric: {file}
//       }
//     } = this.props;

//     // file doesn't seem to have an error property even tho validate returns a error for file
//     console.log(file.touched, file.error);
//     // true undefined

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>{'Upload scan'}</label>
//         <p>{file.touched && file.error ? file.error : ''}</p>
//         <input
//           type="file"
//           {...file}
//           value={null}
//         />

//         <button type="submit">{'Next'}</button>
//       </form>
//   }
// }