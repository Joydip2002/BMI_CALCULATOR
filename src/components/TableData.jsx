import React from 'react'

const TableData = () => {
    return (
        <>
            <div className="checkData">
                <table className='table border'>
                    <thead>
                        <tr>
                            <th className='p-3'>BMI</th>
                            <th className='p-3'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-warning'>
                            <td>≤ 18.4</td>
                            <td>Underweight</td>
                        </tr>
                        <tr className='bg-success'>
                            <td>18.5 - 24.9</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td className='bg-secondary'>25.0 - 39.9</td>
                            <td>Overweight</td>
                        </tr>
                        <tr className='bg-info'>
                            <td>≥ 40.0</td>
                            <td>Obese</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableData
