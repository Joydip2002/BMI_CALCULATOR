import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TableData from './components/TableData';

function App() {
  const [getResult, setResult] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      height: '',
      weight: '',
    }
  });

  const bmiCalculator = (h, w, hu, wu) => {
    if (hu == 'meter' && wu == 'kg') {
      if (h >= 1 && w >= 1 && w <= 300 && h <= 3.048) {
        const result = Math.abs(w / (Math.pow(h, 2))).toFixed(2);
        setResult(result);
      }
      else {
        setResult('Please Write a valid height and weight!!');
      }
    }
    else if (hu == 'feet' && wu == 'kg') {
      if (h >= 3 && w >= 1 && w <= 300) {
        const footToMeter = (h / 3.281);
        const result = Math.abs(w / (Math.pow(footToMeter, 2))).toFixed(1);
        setResult(result);
      }
      else {
        setResult('Please Write a valid height and weight!!');
      }
    }
  }

  const formSubmit = (data) => {

    console.log(data);
    const height = data.height;
    const weight = data.weight;
    const heightUnit = data.heightunit;
    const weightUnit = data.weightunit;
    // console.log(typeof(height));

    // BMI Calculation Function
    bmiCalculator(height, weight, heightUnit, weightUnit);
  }

  return (
    <>
    <div><h4 className='text-center'>WELCOME TO BML CALCULATOR..</h4></div>
      <div className='d-flex justify-content-center flex-wrap align-items-center min-vh-100 gap-5'>
        <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column m-2'>
          <div className='shadow-lg px-5 py-2 rounded-3'>
            <h4 className='text-center my-3'>BMI CALCULATOR</h4>
            <form className='from-group ' onSubmit={handleSubmit(formSubmit)}>
              <label htmlFor="height" className=''>Height</label>
              <div className='d-flex gap-2'>
                <input type="text" id="height" name='height' placeholder='Height' className='form-control w-100 p-3' {...register('height', { required: true })} />
                <select name="heightunit" id="heightunit" className='form-select' {...register('heightunit', { required: true })} required>
                  <option value="#">select unit</option>
                  <option value="feet">feet</option>
                  <option value="meter">meter</option>
                </select>
              </div>
              <span>
                {errors.height && (
                  <div className="text-danger">Height is required</div>
                )}
              </span>
              <label htmlFor="weigth" className='mt-3'>Weight</label>
              <div className="d-flex gap-2">
                <input type="text" id='weight' name='weight' placeholder='Weight' className='form-control w-100 p-3'
                  {...register('weight', { required: true })}
                />
                <select name="weightunit" id="weightunit" className='form-select' {...register('weightunit', { required: true })} required>
                  <option value="#">select unit</option>
                  <option value="kg">kg</option>
                </select>

              </div>
              <span>
                {errors.weight && (
                  <div className="text-danger">Weight is required</div>
                )}
              </span>
              <button className='btn btn-info w-100 my-4 p-2 '>Calculate</button>
            </form>
          </div>
          <div className='result'>
            {
              getResult ? (<p className='shadow-lg px-5 py-2 rounded-3 mt-3'>Your BMI is : <span className={getResult>18?'text-success':'text-warning'}><strong>{getResult}</strong></span></p>) : ''
            }
          </div>
        </div>
        <TableData />
      </div>
    </>
  )
}

export default App;