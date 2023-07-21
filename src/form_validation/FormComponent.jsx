import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ErrorMessage from '@hookform/error-message';

const FormComponent = ({ formType, onSubmit }) => {
  const { handleSubmit, control, errors } = useForm();

  const fields = {
    email: {
      label: 'Email',
      type: 'email',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email address',
        },
      },
    },
    password: {
      label: 'Password',
      type: 'password',
      validation: {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must have at least 6 characters',
        },
      },
    },
    confirmPassword: {
      label: 'Confirm Password',
      type: 'password',
      validation: {
        required: 'Confirm Password is required',
        validate: (value) =>
          value === control.fieldsRef.current.password.value ||
          'Passwords do not match',
      },
    },
    fullName: {
      type: 'text',
      label: 'Full Name',
      validation: {
        required: 'Full Name is required',
      },
    },
    newPassword: {
      label: 'New Password',
      type: 'password',
      validation: {
        required: 'New Password is required',
        minLength: {
          value: 6,
          message: 'New Password must have at least 6 characters',
        },
      },
    },

    phone: {
      label: 'Phone',
      validation: {
        required: 'Phone number is required',
        type: Number,
        minLength: {
          value: 10,
          message: 'Phone number must have at least 10 characters',
        },
      },
    },

    address: {
      type: 'text',
      label: 'Address',
      validation: {
        required: 'Address required',
      },
    },
  };
};

export default FormComponent;
